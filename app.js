// ============================================================
// ENGLISH LEARNING APP - Main Application Logic
// ============================================================

// ---- State ----
const state = {
  page: 'home',          // home | theme | learn | vocab | quiz | grammar-home | grammar-quiz
  themeId: null,
  sceneId: null,
  chunkIndex: 0,

  // Vocab quiz state
  quizWords: [],
  quizQueue: [],
  quizWrongInSession: [],
  quizAnswered: 0,
  quizScore: 0,
  quizPhase: 'main',     // main | review
  currentQuestion: null,
  quizThemeId: null,

  // Grammar quiz state
  grammarCategoryId: null,   // null = mixed
  grammarQueue: [],
  grammarAnswered: 0,
  grammarScore: 0,
  grammarWrongInSession: [],
  grammarCurrentQ: null,
  grammarPhase: 'main',      // main | review
};

// ---- Persistence ----
function loadProgress() {
  try { return JSON.parse(localStorage.getItem('elp_progress') || '{}'); } catch { return {}; }
}
function saveProgress(data) {
  const existing = loadProgress();
  localStorage.setItem('elp_progress', JSON.stringify({ ...existing, ...data }));
}

function getWrongWords() {
  const p = loadProgress();
  return p.wrongWords || {};  // { wordId: count }
}
function addWrongWord(id) {
  const ww = getWrongWords();
  ww[id] = (ww[id] || 0) + 1;
  saveProgress({ wrongWords: ww });
}
function removeWrongWord(id) {
  const ww = getWrongWords();
  delete ww[id];
  saveProgress({ wrongWords: ww });
}
function markCompleted(type, id) {
  const p = loadProgress();
  const key = `completed_${type}`;
  const arr = p[key] || [];
  if (!arr.includes(id)) arr.push(id);
  saveProgress({ [key]: arr });
}
function isCompleted(type, id) {
  const p = loadProgress();
  return (p[`completed_${type}`] || []).includes(id);
}
function getQuizDoneToday(themeId) {
  const p = loadProgress();
  const key = `quiz_done_${themeId}_${todayStr()}`;
  return p[key] || false;
}
function markQuizDone(themeId) {
  saveProgress({ [`quiz_done_${themeId}_${todayStr()}`]: true });
}
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}
function getGrammarWrong() {
  const p = loadProgress();
  return p.grammarWrong || {};  // { questionId: count }
}
function addGrammarWrong(id) {
  const gw = getGrammarWrong();
  gw[id] = (gw[id] || 0) + 1;
  saveProgress({ grammarWrong: gw });
}
function removeGrammarWrong(id) {
  const gw = getGrammarWrong();
  delete gw[id];
  saveProgress({ grammarWrong: gw });
}

// ---- Seeded Random ----
function seededRandom(seed) {
  let s = seed;
  return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}
function getDailyWords(themeId, count = 20) {
  const vocab = VOCABULARY[themeId] || [];
  const seed = parseInt(todayStr().replace(/-/g, '')) + themeId.charCodeAt(0);
  const rng = seededRandom(seed);

  // Include persistent wrong words for this theme
  const wrongIds = new Set(Object.keys(getWrongWords()));
  const wrongInTheme = vocab.filter(w => wrongIds.has(w.id));
  const rest = vocab.filter(w => !wrongIds.has(w.id));

  // Shuffle rest
  const shuffled = [...rest].sort(() => rng() - 0.5);

  // Combine: wrong words first, then random fill
  const combined = [...wrongInTheme, ...shuffled].slice(0, Math.min(count, vocab.length));
  return combined;
}
function getDailyWordsMixed(count = 20) {
  const allVocab = Object.values(VOCABULARY).flat();
  const seed = parseInt(todayStr().replace(/-/g, '')) + 99;
  const rng = seededRandom(seed);

  const wrongIds = new Set(Object.keys(getWrongWords()));
  const wrongWords = allVocab.filter(w => wrongIds.has(w.id));
  const rest = allVocab.filter(w => !wrongIds.has(w.id));

  const shuffled = [...rest].sort(() => rng() - 0.5);
  return [...wrongWords, ...shuffled].slice(0, Math.min(count, allVocab.length));
}

// ---- Speech ----
let speechSynth = window.speechSynthesis;
let recognition = null;
let isRecording = false;
let currentRecognitionCallback = null;

function speak(text, rate = 0.9) {
  speechSynth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = rate;
  utter.pitch = 1;
  // Try to get an English voice
  const voices = speechSynth.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en'));
  if (enVoice) utter.voice = enVoice;
  speechSynth.speak(utter);
}

function startRecording(callback) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    callback(null, 'Speech recognition is not supported in this browser. Please use Chrome.');
    return;
  }
  if (isRecording) {
    recognition.stop();
    return;
  }
  recognition = new SR();
  recognition.lang = 'en-US';
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.onresult = e => {
    const transcript = e.results[0][0].transcript;
    isRecording = false;
    callback(transcript, null);
  };
  recognition.onerror = e => {
    isRecording = false;
    callback(null, 'Recording error: ' + e.error);
  };
  recognition.onend = () => { isRecording = false; };
  recognition.start();
  isRecording = true;
  currentRecognitionCallback = callback;
}

function compareTexts(expected, spoken) {
  const normalize = s => s.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
  const expWords = normalize(expected).split(/\s+/);
  const spoWords = normalize(spoken).split(/\s+/);
  let correct = 0;
  const results = expWords.map(w => {
    const found = spoWords.includes(w);
    if (found) correct++;
    return { word: w, correct: found };
  });
  return { results, score: Math.round((correct / expWords.length) * 100) };
}

// ---- Quiz Helpers ----
function buildQuestion(word, allWords, type) {
  // type: 0=en-to-zh MCQ, 1=zh-to-en typing, 2=fill-blank MCQ
  const others = allWords.filter(w => w.id !== word.id);
  const shuffle = arr => arr.sort(() => Math.random() - 0.5);

  if (type === 0) {
    const distractors = shuffle(others).slice(0, 3).map(w => w.chinese);
    const options = shuffle([word.chinese, ...distractors]);
    return { type: 'en-to-zh', word, options, correct: word.chinese };
  }
  if (type === 1) {
    return { type: 'zh-to-en', word, correct: word.english };
  }
  if (type === 2) {
    const escaped = word.english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const sentence = word.example.replace(new RegExp(escaped, 'gi'), '______');
    const distractors = shuffle(others).slice(0, 3).map(w => w.english);
    const options = shuffle([word.english, ...distractors]);
    return { type: 'fill-blank', word, sentence, options, correct: word.english };
  }
}

function buildQuizQueue(words) {
  return words.map((w, i) => {
    const type = i % 3; // 0=MCQ en-zh, 1=typing, 2=fill-blank
    return buildQuestion(w, words, type);
  });
}

// ---- Render Helpers ----
const $ = id => document.getElementById(id);
const root = () => $('app-root');

function icon(name) {
  const icons = {
    home: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    book: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    mic: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
    sound: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
    quiz: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
    arrow: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
    star: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  };
  return icons[name] || '';
}

// ---- Navigation ----
function navigate(page, extra = {}) {
  Object.assign(state, { page, ...extra });
  render();
}

// ============================================================
// PAGE RENDERERS
// ============================================================

function renderHome() {
  const progress = loadProgress();
  return `
    <div class="page-home">
      <div class="app-header">
        <div class="app-logo">🎓</div>
        <div>
          <h1 class="app-title">EnglishUp</h1>
          <p class="app-subtitle">聽說讀寫全方位學習</p>
        </div>
      </div>

      <div class="section-label">選擇學習主題</div>
      <div class="theme-grid">
        ${THEMES.map(t => {
          const totalChunks = t.scenes.reduce((n, s) => n + s.chunks.length, 0);
          const doneChunks = t.scenes.reduce((n, s) =>
            n + s.chunks.filter(c => isCompleted('chunk', c.id)).length, 0);
          const pct = Math.round((doneChunks / totalChunks) * 100);
          const vocab = VOCABULARY[t.id] || [];
          return `
          <div class="theme-card" style="border-top:4px solid ${t.color}; background:${t.colorLight}"
               onclick="navigate('theme', {themeId:'${t.id}'})">
            <div class="theme-icon">${t.icon}</div>
            <div class="theme-name">${t.name}</div>
            <div class="theme-name-zh">${t.nameZh}</div>
            <div class="theme-meta">
              <span>${t.scenes.length} 場景</span>
              <span>${vocab.length} 單字</span>
            </div>
            <div class="progress-bar-wrap">
              <div class="progress-bar-inner" style="width:${pct}%; background:${t.color}"></div>
            </div>
            <div class="progress-label">${pct}% 完成</div>
          </div>`;
        }).join('')}
      </div>

      <div class="section-label" style="margin-top:24px">每日混合測驗</div>
      <div style="padding:0 16px">
        <button class="grammar-home-entry" onclick="startMixedQuiz()" style="background:linear-gradient(135deg,#6366F1,#8B5CF6);color:white;border:none">
          <span class="grammar-entry-icon">🎲</span>
          <div class="grammar-entry-text">
            <div class="grammar-entry-title" style="color:white">Daily Mixed Quiz 每日混合測驗</div>
            <div class="grammar-entry-sub" style="color:rgba(255,255,255,0.8)">從所有主題隨機抽 20 題，每天不同組合</div>
          </div>
          <span class="grammar-entry-arrow" style="color:white">→</span>
        </button>
      </div>

      <div class="section-label" style="margin-top:24px">文法練習</div>
      <div style="padding:0 16px">
        <button class="grammar-home-entry" onclick="navigate('grammar-home')">
          <span class="grammar-entry-icon">📝</span>
          <div class="grammar-entry-text">
            <div class="grammar-entry-title">Grammar Practice 文法專項</div>
            <div class="grammar-entry-sub">時態・冠詞・介系詞・情態動詞・被動・比較 共 ${GRAMMAR_QUESTIONS.length} 題</div>
          </div>
          <span class="grammar-entry-arrow">→</span>
        </button>
      </div>

      <div class="section-label" style="margin-top:16px">今日複習提醒</div>
      ${renderWrongWordSummary()}
    </div>`;
}

function renderWrongWordSummary() {
  const ww = getWrongWords();
  const count = Object.keys(ww).length;
  if (count === 0) {
    return `<div class="info-card">✅ 目前沒有待複習的單字！繼續保持！</div>`;
  }
  return `<div class="info-card warn">⚠️ 你有 <strong>${count}</strong> 個單字需要複習，在下次測驗中將自動加入。</div>`;
}

// ---- Theme Page ----
function renderThemePage() {
  const theme = THEMES.find(t => t.id === state.themeId);
  if (!theme) return renderHome();

  const vocab = VOCABULARY[theme.id] || [];
  const quizDone = getQuizDoneToday(theme.id);

  return `
    <div class="page-theme">
      <button class="back-btn" onclick="navigate('home')">← 返回</button>
      <div class="page-header" style="background:${theme.colorLight}; border-left:4px solid ${theme.color}">
        <div class="theme-icon-lg">${theme.icon}</div>
        <div>
          <h2>${theme.name}</h2>
          <p>${theme.nameZh}</p>
        </div>
      </div>

      <div class="action-row">
        <button class="action-btn vocab-btn" onclick="navigate('vocab', {themeId:'${theme.id}'})">
          ${icon('book')} 單字表 (${vocab.length})
        </button>
        <button class="action-btn quiz-btn"
                onclick="startQuiz('${theme.id}')">
          ${icon('quiz')} ${quizDone ? '🔄 再測一次' : '今日測驗'}
        </button>
      </div>

      <div class="section-label">學習場景</div>
      <div class="scene-list">
        ${theme.scenes.map((sc, i) => {
          const done = sc.chunks.filter(c => isCompleted('chunk', c.id)).length;
          const pct = Math.round((done / sc.chunks.length) * 100);
          return `
          <div class="scene-card" onclick="navigate('learn', {themeId:'${theme.id}', sceneId:'${sc.id}', chunkIndex:0})">
            <div class="scene-num" style="background:${theme.color}">${i + 1}</div>
            <div class="scene-info">
              <div class="scene-title">${sc.title}</div>
              <div class="scene-title-zh">${sc.titleZh}</div>
              <div class="scene-progress">
                <div class="mini-bar"><div style="width:${pct}%;background:${theme.color};height:100%;border-radius:4px"></div></div>
                <span>${done}/${sc.chunks.length}</span>
              </div>
            </div>
            <div class="scene-arrow">${icon('arrow')}</div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
}

// ---- Learn Page ----
function renderLearnPage() {
  const theme = THEMES.find(t => t.id === state.themeId);
  const scene = theme?.scenes.find(s => s.id === state.sceneId);
  if (!theme || !scene) return renderThemePage();

  const chunk = scene.chunks[state.chunkIndex];
  const isLast = state.chunkIndex >= scene.chunks.length - 1;
  const isFirst = state.chunkIndex === 0;
  const done = isCompleted('chunk', chunk.id);

  return `
    <div class="page-learn">
      <div class="learn-header">
        <button class="back-btn" onclick="navigate('theme', {themeId:'${theme.id}'})">← 返回</button>
        <div class="learn-title">${scene.title}</div>
        <div class="learn-counter">${state.chunkIndex + 1} / ${scene.chunks.length}</div>
      </div>

      <div class="progress-strip">
        ${scene.chunks.map((c, i) => `
          <div class="progress-dot ${i === state.chunkIndex ? 'active' : ''} ${isCompleted('chunk', c.id) ? 'done' : ''}"
               style="${i === state.chunkIndex ? 'background:' + theme.color : ''}"></div>`).join('')}
      </div>

      <div class="chunk-card" style="border-top:4px solid ${theme.color}">
        <div class="chunk-english" id="chunk-en">${chunk.english}</div>
        <div class="chunk-chinese">${chunk.chinese}</div>
        ${done ? `<div class="chunk-done-badge">✓ 完成</div>` : ''}
      </div>

      <div class="skill-row">
        <button class="skill-btn listen-btn" onclick="speakChunk()" title="AI朗讀">
          ${icon('sound')} 聆聽
        </button>
        <button class="skill-btn slow-btn" onclick="speakChunkSlow()" title="慢速朗讀">
          🐢 慢速
        </button>
        <button class="skill-btn record-btn" id="rec-btn" onclick="toggleRecord()" title="錄音">
          ${icon('mic')} 錄音
        </button>
      </div>

      <div id="compare-area" class="compare-area" style="display:none"></div>

      <div class="nav-row">
        <button class="nav-btn prev-btn" ${isFirst ? 'disabled' : ''}
                onclick="prevChunk()">← 上一個</button>
        <button class="nav-btn mark-btn" onclick="markChunkDone('${chunk.id}')"
                style="background:${theme.color}; color:white">
          ${done ? '✓ 已完成' : '標記完成'}
        </button>
        <button class="nav-btn next-btn" ${isLast ? '' : ''}
                onclick="nextChunk()">下一個 →</button>
      </div>
    </div>`;
}

function speakChunk() {
  const theme = THEMES.find(t => t.id === state.themeId);
  const scene = theme?.scenes.find(s => s.id === state.sceneId);
  if (!scene) return;
  speak(scene.chunks[state.chunkIndex].english);
}
function speakChunkSlow() {
  const theme = THEMES.find(t => t.id === state.themeId);
  const scene = theme?.scenes.find(s => s.id === state.sceneId);
  if (!scene) return;
  speak(scene.chunks[state.chunkIndex].english, 0.6);
}
function prevChunk() {
  if (state.chunkIndex > 0) { state.chunkIndex--; render(); }
}
function nextChunk() {
  const theme = THEMES.find(t => t.id === state.themeId);
  const scene = theme?.scenes.find(s => s.id === state.sceneId);
  if (!scene) return;
  if (state.chunkIndex < scene.chunks.length - 1) { state.chunkIndex++; render(); }
}
function markChunkDone(id) {
  markCompleted('chunk', id);
  render();
}
function toggleRecord() {
  const btn = $('rec-btn');
  const area = $('compare-area');
  if (isRecording) {
    if (recognition) recognition.stop();
    return;
  }
  btn.classList.add('recording');
  btn.innerHTML = `${icon('mic')} ⏹ 停止`;
  area.style.display = 'none';

  const theme = THEMES.find(t => t.id === state.themeId);
  const scene = theme?.scenes.find(s => s.id === state.sceneId);
  const expected = scene?.chunks[state.chunkIndex]?.english || '';

  startRecording((transcript, err) => {
    if (btn) {
      btn.classList.remove('recording');
      btn.innerHTML = `${icon('mic')} 錄音`;
    }
    if (err) { if (area) { area.style.display = 'block'; area.innerHTML = `<div class="compare-error">${err}</div>`; } return; }
    if (!transcript) return;
    const { results, score } = compareTexts(expected, transcript);
    const color = score >= 80 ? '#22C55E' : score >= 50 ? '#F59E0B' : '#EF4444';
    const label = score >= 80 ? '🎉 發音很棒！' : score >= 50 ? '👍 不錯，繼續練習！' : '💪 加油，多練習！';
    area.style.display = 'block';
    area.innerHTML = `
      <div class="compare-score" style="color:${color}">${score}% ${label}</div>
      <div class="compare-spoken">你說的：<em>${transcript}</em></div>
      <div class="compare-words">
        ${results.map(r => `<span class="word-badge ${r.correct ? 'ok' : 'miss'}">${r.word}</span>`).join('')}
      </div>`;
  });
}

// ---- Vocab Page ----
function renderVocabPage() {
  const theme = THEMES.find(t => t.id === state.themeId);
  const vocab = VOCABULARY[state.themeId] || [];
  if (!theme) return renderHome();

  const daily = getDailyWords(state.themeId, 20);
  const dailyIds = new Set(daily.map(w => w.id));

  return `
    <div class="page-vocab">
      <button class="back-btn" onclick="navigate('theme', {themeId:'${theme.id}'})">← 返回</button>
      <h2 class="page-h2">${theme.nameZh} 單字表</h2>
      <p class="page-sub">今日選取 <strong>${daily.length}</strong> 個單字用於測驗</p>

      <div class="vocab-filter-row">
        <button class="filter-btn active" onclick="showVocab('all', this)">全部</button>
        <button class="filter-btn" onclick="showVocab('daily', this)">今日單字</button>
        <button class="filter-btn" onclick="showVocab('wrong', this)">待複習</button>
      </div>

      <div id="vocab-list" class="vocab-list">
        ${vocab.map(w => renderWordCard(w, dailyIds)).join('')}
      </div>
    </div>`;
}

function renderWordCard(w, dailyIds) {
  const isDaily = dailyIds && dailyIds.has(w.id);
  const ww = getWrongWords();
  const isWrong = !!ww[w.id];
  return `
    <div class="word-card ${isDaily ? 'daily-word' : ''} ${isWrong ? 'wrong-word' : ''}"
         data-daily="${isDaily}" data-wrong="${isWrong}">
      <div class="word-row">
        <span class="word-en">${w.english}</span>
        <span class="word-pos">${w.pos}</span>
        ${isDaily ? `<span class="badge daily-badge">今日</span>` : ''}
        ${isWrong ? `<span class="badge wrong-badge">待複習</span>` : ''}
        <button class="speak-icon" onclick="speak('${w.english.replace(/'/g, "\\'")}')" title="朗讀">🔊</button>
      </div>
      <div class="word-zh">${w.chinese}</div>
      <div class="word-example">${w.example}</div>
      <div class="word-example-zh">${w.exampleZh}</div>
    </div>`;
}

function showVocab(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.word-card').forEach(card => {
    if (filter === 'all') card.style.display = '';
    else if (filter === 'daily') card.style.display = card.dataset.daily === 'true' ? '' : 'none';
    else if (filter === 'wrong') card.style.display = card.dataset.wrong === 'true' ? '' : 'none';
  });
}

// ---- Quiz Page ----
function startMixedQuiz() {
  const words = getDailyWordsMixed(20);
  if (words.length < 4) { alert('單字數量不足！'); return; }
  const queue = buildQuizQueue(words);
  Object.assign(state, {
    page: 'quiz',
    quizThemeId: 'mixed',
    quizWords: words,
    quizQueue: [...queue],
    quizWrongInSession: [],
    quizAnswered: 0,
    quizScore: 0,
    quizPhase: 'main',
    currentQuestion: queue[0],
  });
  render();
}
function startQuiz(themeId) {
  const words = getDailyWords(themeId, 20);
  if (words.length < 4) { alert('單字數量不足，請先瀏覽單字表！'); return; }
  const queue = buildQuizQueue(words);
  Object.assign(state, {
    page: 'quiz',
    quizThemeId: themeId,
    quizWords: words,
    quizQueue: [...queue],
    quizWrongInSession: [],
    quizAnswered: 0,
    quizScore: 0,
    quizPhase: 'main',
    currentQuestion: queue[0],
  });
  render();
}

function renderQuizPage() {
  const theme = THEMES.find(t => t.id === state.quizThemeId);
  const total = state.quizQueue.length;
  const current = state.quizAnswered;
  const q = state.currentQuestion;
  if (!q) return renderQuizResults();

  const pct = Math.round((current / total) * 100);
  const phaseLabel = state.quizPhase === 'review' ? ' [複習錯誤]' : '';

  return `
    <div class="page-quiz">
      <div class="quiz-header">
        <button class="back-btn" onclick="navigate('theme', {themeId:'${state.quizThemeId}'})">✕ 離開</button>
        <div class="quiz-progress-info">
          ${current}/${total} · 分數: ${state.quizScore}${phaseLabel}
        </div>
      </div>
      <div class="quiz-bar-wrap">
        <div class="quiz-bar-inner" style="width:${pct}%; background:${theme?.color || '#6366F1'}"></div>
      </div>

      ${q.type === 'en-to-zh' ? renderEnToZh(q, theme) : ''}
      ${q.type === 'zh-to-en' ? renderZhToEn(q, theme) : ''}
      ${q.type === 'fill-blank' ? renderFillBlank(q, theme) : ''}
    </div>`;
}

function renderEnToZh(q, theme) {
  return `
    <div class="question-card">
      <div class="q-type-label">英 → 中 選擇題</div>
      <div class="q-word-big">${q.word.english}</div>
      <div class="q-pos">${q.word.pos}</div>
      <button class="q-listen-btn" onclick="speak('${q.word.english.replace(/'/g, "\\'")}')">🔊 聆聽</button>
      <div class="q-options">
        ${q.options.map(opt => `
          <button class="q-opt-btn" onclick="submitAnswer('${opt.replace(/'/g, "\\'")}', '${q.correct.replace(/'/g, "\\'")}')">
            ${opt}
          </button>`).join('')}
      </div>
    </div>`;
}

function renderZhToEn(q, theme) {
  return `
    <div class="question-card">
      <div class="q-type-label">中 → 英 拼寫題</div>
      <div class="q-word-big">${q.word.chinese}</div>
      <div class="q-pos">${q.word.pos}</div>
      <div class="q-example-hint">${q.word.exampleZh}</div>
      <div class="q-input-row">
        <input id="zh-en-input" class="q-input" type="text" placeholder="輸入英文單字..."
               onkeydown="if(event.key==='Enter') submitTyped()">
        <button class="q-submit-btn" onclick="submitTyped()" style="background:${theme?.color || '#6366F1'}">確認</button>
      </div>
    </div>`;
}

function renderFillBlank(q, theme) {
  return `
    <div class="question-card">
      <div class="q-type-label">填空題</div>
      <div class="q-sentence">${q.sentence}</div>
      <div class="q-example-hint">${q.word.exampleZh}</div>
      <div class="q-options">
        ${q.options.map(opt => `
          <button class="q-opt-btn" onclick="submitAnswer('${opt.replace(/'/g, "\\'")}', '${q.correct.replace(/'/g, "\\'")}')">
            ${opt}
          </button>`).join('')}
      </div>
    </div>`;
}

function submitTyped() {
  const input = $('zh-en-input');
  if (!input) return;
  const typed = input.value.trim().toLowerCase();
  const correct = state.currentQuestion.correct.toLowerCase();
  submitAnswer(typed, correct);
}

function submitAnswer(given, correct) {
  const isCorrect = given.toLowerCase() === correct.toLowerCase();
  const q = state.currentQuestion;

  // Show feedback
  showAnswerFeedback(isCorrect, correct, q);
}

function showAnswerFeedback(isCorrect, correct, q) {
  const card = document.querySelector('.question-card');
  if (!card) return;

  // Disable all option buttons
  card.querySelectorAll('.q-opt-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent.trim().toLowerCase() === correct.toLowerCase()) {
      btn.classList.add('correct');
    } else {
      btn.classList.add('incorrect');
    }
  });
  const input = card.querySelector('.q-input');
  if (input) {
    input.disabled = true;
    input.style.borderColor = isCorrect ? '#22C55E' : '#EF4444';
  }
  const submitBtn = card.querySelector('.q-submit-btn');
  if (submitBtn) submitBtn.disabled = true;

  const fb = document.createElement('div');
  fb.className = `feedback-box ${isCorrect ? 'correct-fb' : 'wrong-fb'}`;
  fb.innerHTML = isCorrect
    ? `✅ 正確！<br><em>${q.word.english}</em> = ${q.word.chinese}`
    : `❌ 正確答案：<strong>${correct}</strong><br><em>${q.word.example}</em>`;
  card.appendChild(fb);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'next-q-btn';
  nextBtn.textContent = '下一題 →';
  nextBtn.onclick = () => advanceQuiz(isCorrect, q);
  card.appendChild(nextBtn);

  if (!isCorrect) {
    addWrongWord(q.word.id);
    state.quizWrongInSession.push(q);
  }
}

function advanceQuiz(wasCorrect, q) {
  if (wasCorrect) {
    // Only remove from persistent wrong if correct
    const ww = getWrongWords();
    if (ww[q.word.id] !== undefined) {
      // Give credit: reduce count, remove if was wrong only once
      removeWrongWord(q.word.id);
    }
    state.quizScore++;
  }
  state.quizAnswered++;

  // Next question
  const nextIdx = state.quizAnswered;
  if (nextIdx < state.quizQueue.length) {
    state.currentQuestion = state.quizQueue[nextIdx];
    render();
  } else {
    // Main quiz done — any wrong answers to review?
    if (state.quizPhase === 'main' && state.quizWrongInSession.length > 0) {
      const reviewQueue = buildQuizQueue(state.quizWrongInSession.map(q => q.word));
      state.quizQueue = [...state.quizQueue, ...reviewQueue];
      state.quizPhase = 'review';
      state.quizWrongInSession = [];
      state.currentQuestion = state.quizQueue[nextIdx];
      render();
    } else {
      state.currentQuestion = null;
      markQuizDone(state.quizThemeId);
      render();
    }
  }
}

function renderQuizResults() {
  const theme = THEMES.find(t => t.id === state.quizThemeId);
  const pct = state.quizQueue.length > 0 ? Math.round((state.quizScore / state.quizQueue.length) * 100) : 0;
  const msg = pct >= 90 ? '🏆 優秀！' : pct >= 70 ? '🎉 不錯！' : pct >= 50 ? '👍 繼續加油！' : '💪 多練習就會進步！';
  const ww = Object.keys(getWrongWords()).length;

  return `
    <div class="page-results">
      <div class="results-card">
        <div class="results-emoji">${msg.split(' ')[0]}</div>
        <h2 class="results-title">測驗完成！</h2>
        <div class="results-score">${state.quizScore} / ${state.quizQueue.length}</div>
        <div class="results-pct" style="color:${pct >= 70 ? '#22C55E' : '#EF4444'}">${pct}%</div>
        <div class="results-label">${msg.split(' ').slice(1).join(' ')}</div>
        ${ww > 0 ? `<div class="results-warn">📌 還有 ${ww} 個單字待複習，下次測驗將再次出現</div>` :
                   `<div class="results-perfect">✨ 所有單字都掌握了！</div>`}

        <div class="results-skills">
          <div class="skill-tag">👂 Listening</div>
          <div class="skill-tag">👁 Reading</div>
          <div class="skill-tag">✍️ Writing</div>
          <div class="skill-tag">🗣 Speaking</div>
        </div>

        <button class="results-home-btn" onclick="navigate('home')">返回首頁</button>
        <button class="results-retry-btn" onclick="${state.quizThemeId === 'mixed' ? 'startMixedQuiz()' : `startQuiz('${state.quizThemeId}')`}">再測一次</button>
      </div>
    </div>`;
}

// ============================================================
// GRAMMAR QUIZ
// ============================================================

function startGrammarQuiz(categoryId) {
  const wrongIds = new Set(Object.keys(getGrammarWrong()));
  let pool = categoryId === 'mixed'
    ? [...GRAMMAR_QUESTIONS]
    : categoryId === 'wrong'
      ? GRAMMAR_QUESTIONS.filter(q => wrongIds.has(q.id))
      : GRAMMAR_QUESTIONS.filter(q => q.category === categoryId);

  // Prioritize wrong questions (wrongIds already defined above)
  const wrongInPool = pool.filter(q => wrongIds.has(q.id));
  const rest = pool.filter(q => !wrongIds.has(q.id)).sort(() => Math.random() - 0.5);

  const selected = [...wrongInPool, ...rest].slice(0, 15);
  if (selected.length < 2) { alert('這個類別的題目不足，請選擇其他類別。'); return; }

  // Shuffle options for each question (copy objects to avoid mutation)
  const queue = selected.map(q => ({
    ...q,
    options: [...q.options].sort(() => Math.random() - 0.5),
  }));

  Object.assign(state, {
    page: 'grammar-quiz',
    grammarCategoryId: categoryId,
    grammarQueue: queue,
    grammarAnswered: 0,
    grammarScore: 0,
    grammarWrongInSession: [],
    grammarCurrentQ: queue[0],
    grammarPhase: 'main',
  });
  render();
}

function renderGrammarHome() {
  const wrongCount = Object.keys(getGrammarWrong()).length;
  return `
    <div class="page-grammar-home">
      <button class="back-btn" onclick="navigate('home')">← 返回</button>
      <div class="grammar-home-header">
        <div class="grammar-home-icon">📝</div>
        <h2>Grammar Practice</h2>
        <p class="grammar-home-sub">文法專項練習・每題附中文解析</p>
      </div>

      ${wrongCount > 0 ? `
        <button class="grammar-wrong-banner" onclick="startGrammarQuiz('wrong')">
          ⚠️ 待複習錯題 <strong>${wrongCount} 題</strong>，點此優先練習
        </button>` : `
        <div class="grammar-clear-banner">✅ 目前沒有待複習的錯題，繼續保持！</div>`}

      <div class="section-label">選擇類別</div>
      <div class="grammar-cat-grid">
        ${GRAMMAR_CATEGORIES.map(cat => {
          const total = GRAMMAR_QUESTIONS.filter(q => q.category === cat.id).length;
          const wrongInCat = GRAMMAR_QUESTIONS
            .filter(q => q.category === cat.id && getGrammarWrong()[q.id]).length;
          return `
          <div class="grammar-cat-card" style="border-top:3px solid ${cat.color}; background:${cat.colorLight}"
               onclick="startGrammarQuiz('${cat.id}')">
            <div class="grammar-cat-icon">${cat.icon}</div>
            <div class="grammar-cat-name">${cat.nameZh}</div>
            <div class="grammar-cat-en">${cat.nameEn}</div>
            <div class="grammar-cat-count">${total} 題${wrongInCat > 0 ? ` · <span style="color:#EF4444">${wrongInCat} 待複習</span>` : ''}</div>
          </div>`;
        }).join('')}
      </div>

      <div class="grammar-mixed-row">
        <button class="grammar-mixed-btn" onclick="startGrammarQuiz('mixed')">
          🎲 混合出題（所有類別）
        </button>
      </div>
    </div>`;
}

function renderGrammarQuiz() {
  const q = state.grammarCurrentQ;
  if (!q) return renderGrammarResults();

  const cat = GRAMMAR_CATEGORIES.find(c => c.id === q.category);
  const total = state.grammarQueue.length;
  const pct = Math.round((state.grammarAnswered / total) * 100);
  const phaseLabel = state.grammarPhase === 'review' ? '【錯題複習】' : '';

  return `
    <div class="page-grammar-quiz">
      <div class="quiz-header">
        <button class="back-btn" onclick="navigate('grammar-home')">✕ 離開</button>
        <div class="quiz-progress-info">${state.grammarAnswered}/${total} · ✓${state.grammarScore} ${phaseLabel}</div>
      </div>
      <div class="quiz-bar-wrap">
        <div class="quiz-bar-inner" style="width:${pct}%; background:${cat?.color || '#6366F1'}"></div>
      </div>

      <div class="grammar-q-card" id="grammar-card">
        <div class="grammar-cat-badge" style="background:${cat?.colorLight}; color:${cat?.color}">
          ${cat?.icon} ${cat?.nameZh}
        </div>

        <div class="grammar-q-sentence" id="grammar-sentence">
          ${q.sentence.replace('___', '<span class="grammar-blank">___</span>')}
        </div>
        <div class="grammar-q-zh">${q.sentenceZh}</div>

        <button class="q-listen-btn" onclick="speak('${escAttr(q.sentence.replace('___', q.correct))}')">
          🔊 聽正確句子
        </button>

        <div class="q-options" id="grammar-options">
          ${q.options.map((opt, i) => `
            <button class="q-opt-btn" id="gopt-${i}"
                    onclick="submitGrammarAnswer(${i})">
              ${opt}
            </button>`).join('')}
        </div>
      </div>
    </div>`;
}

function escAttr(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function submitGrammarAnswer(optionIndex) {
  const q = state.grammarCurrentQ;
  const chosen = q.options[optionIndex];
  const isCorrect = chosen === q.correct;

  // Disable all buttons and highlight
  q.options.forEach((opt, i) => {
    const btn = document.getElementById(`gopt-${i}`);
    if (!btn) return;
    btn.disabled = true;
    if (opt === q.correct) btn.classList.add('correct');
    else if (i === optionIndex) btn.classList.add('incorrect');
  });

  const card = document.getElementById('grammar-card');
  if (!card) return;

  // Build feedback block
  const fb = document.createElement('div');
  fb.className = `grammar-feedback ${isCorrect ? 'correct-fb' : 'wrong-fb'}`;

  // Show full correct sentence
  const fullSentence = q.sentence.replace('___', `<strong>${q.correct}</strong>`);

  fb.innerHTML = `
    <div class="fb-verdict">${isCorrect ? '✅ 正確！' : `❌ 正確答案：<strong>${q.correct}</strong>`}</div>
    <div class="fb-full-sentence">${fullSentence}</div>
    <div class="fb-explanation">
      <div class="fb-exp-zh">💡 ${q.explanationZh}</div>
      <div class="fb-exp-en">${q.explanationEn}</div>
    </div>`;
  card.appendChild(fb);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'next-q-btn';
  nextBtn.textContent = '下一題 →';
  nextBtn.onclick = () => advanceGrammarQuiz(isCorrect, q);
  card.appendChild(nextBtn);

  if (!isCorrect) {
    addGrammarWrong(q.id);
    state.grammarWrongInSession.push(q);
  } else {
    removeGrammarWrong(q.id);
    state.grammarScore++;
  }
}

function advanceGrammarQuiz(wasCorrect, q) {
  state.grammarAnswered++;
  const nextIdx = state.grammarAnswered;

  if (nextIdx < state.grammarQueue.length) {
    state.grammarCurrentQ = state.grammarQueue[nextIdx];
    render();
  } else if (state.grammarPhase === 'main' && state.grammarWrongInSession.length > 0) {
    // Re-queue wrong questions (re-shuffle options)
    const reviewQueue = state.grammarWrongInSession.map(rq => ({
      ...rq,
      options: [...rq.options].sort(() => Math.random() - 0.5),
    }));
    state.grammarQueue = [...state.grammarQueue, ...reviewQueue];
    state.grammarPhase = 'review';
    state.grammarWrongInSession = [];
    state.grammarCurrentQ = state.grammarQueue[nextIdx];
    render();
  } else {
    state.grammarCurrentQ = null;
    render();
  }
}

function renderGrammarResults() {
  const total = state.grammarQueue.length;
  const pct = total > 0 ? Math.round((state.grammarScore / total) * 100) : 0;
  const msg = pct >= 90 ? '🏆 文法大師！' : pct >= 70 ? '🎉 掌握得不錯！' : pct >= 50 ? '👍 繼續努力！' : '💪 多練習就能進步！';
  const wrongLeft = Object.keys(getGrammarWrong()).length;

  return `
    <div class="page-results">
      <div class="results-card">
        <div class="results-emoji">${msg.split(' ')[0]}</div>
        <h2 class="results-title">文法測驗完成！</h2>
        <div class="results-score">${state.grammarScore} / ${total}</div>
        <div class="results-pct" style="color:${pct >= 70 ? '#22C55E' : '#EF4444'}">${pct}%</div>
        <div class="results-label">${msg.split(' ').slice(1).join(' ')}</div>
        ${wrongLeft > 0
          ? `<div class="results-warn">📌 還有 ${wrongLeft} 題錯誤，已加入待複習清單</div>`
          : `<div class="results-perfect">✨ 所有題目都答對了！</div>`}
        <button class="results-home-btn" style="margin-top:20px" onclick="navigate('grammar-home')">← 返回文法選單</button>
        <button class="results-retry-btn" onclick="startGrammarQuiz('${state.grammarCategoryId}')">再練一次</button>
        <button class="results-home-btn" onclick="navigate('home')">返回首頁</button>
      </div>
    </div>`;
}

// ---- Main Render ----
function render() {
  let html = '';
  if (state.page === 'home') html = renderHome();
  else if (state.page === 'theme') html = renderThemePage();
  else if (state.page === 'learn') html = renderLearnPage();
  else if (state.page === 'vocab') html = renderVocabPage();
  else if (state.page === 'quiz') html = state.currentQuestion ? renderQuizPage() : renderQuizResults();
  else if (state.page === 'grammar-home') html = renderGrammarHome();
  else if (state.page === 'grammar-quiz') html = state.grammarCurrentQ ? renderGrammarQuiz() : renderGrammarResults();
  else html = renderHome();

  root().innerHTML = html;

  // Auto-speak on learn page
  if (state.page === 'learn') {
    setTimeout(() => {
      const theme = THEMES.find(t => t.id === state.themeId);
      const scene = theme?.scenes.find(s => s.id === state.sceneId);
      if (scene) speak(scene.chunks[state.chunkIndex].english);
    }, 400);
  }
}

// ---- Init ----
window.addEventListener('DOMContentLoaded', () => {
  // Pre-load voices
  speechSynth.getVoices();
  speechSynth.onvoiceschanged = () => {};
  render();
});
