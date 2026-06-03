// ============================================================
// GRAMMAR QUIZ DATA
// ============================================================

const GRAMMAR_CATEGORIES = [
  { id: 'tense',       nameZh: '動詞時態', nameEn: 'Verb Tenses',   icon: '⏰', color: '#3B82F6', colorLight: '#EFF6FF' },
  { id: 'article',     nameZh: '冠詞',     nameEn: 'Articles',       icon: '📖', color: '#22C55E', colorLight: '#F0FDF4' },
  { id: 'preposition', nameZh: '介系詞',   nameEn: 'Prepositions',   icon: '📍', color: '#F59E0B', colorLight: '#FFFBEB' },
  { id: 'modal',       nameZh: '情態動詞', nameEn: 'Modal Verbs',    icon: '💬', color: '#8B5CF6', colorLight: '#FAF5FF' },
  { id: 'passive',     nameZh: '被動語態', nameEn: 'Passive Voice',  icon: '🔄', color: '#EC4899', colorLight: '#FDF2F8' },
  { id: 'comparison',  nameZh: '比較句型', nameEn: 'Comparatives',   icon: '⚖️', color: '#14B8A6', colorLight: '#F0FDFA' },
];

const GRAMMAR_QUESTIONS = [

  // ══════════════════════════════════════════════
  // 動詞時態 VERB TENSES
  // ══════════════════════════════════════════════
  {
    id: 'gr-t1', category: 'tense',
    sentence: 'She ___ to the office by subway every morning.',
    sentenceZh: '她每天早上搭地鐵去辦公室。',
    options: ['go', 'goes', 'is going', 'gone'],
    correct: 'goes',
    explanationZh: '主詞 she 是第三人稱單數，一般現在式動詞需加 -s。',
    explanationEn: 'Third-person singular subjects (he/she/it) take -s in simple present tense.'
  },
  {
    id: 'gr-t2', category: 'tense',
    sentence: 'He ___ dinner when the phone rang.',
    sentenceZh: '電話響的時候，他正在吃晚飯。',
    options: ['had', 'was having', 'has had', 'is having'],
    correct: 'was having',
    explanationZh: '過去進行式（was/were + V-ing）描述過去某時刻正在進行的動作，常與簡單過去式連用。',
    explanationEn: 'Past continuous (was/were + V-ing) describes an action in progress at a past moment, often interrupted by another event.'
  },
  {
    id: 'gr-t3', category: 'tense',
    sentence: 'I ___ my keys. I can\'t find them anywhere!',
    sentenceZh: '我把鑰匙弄丟了。我找不到它們！',
    options: ['lost', 'have lost', 'am losing', 'had lost'],
    correct: 'have lost',
    explanationZh: '現在完成式（have/has + p.p.）表示過去發生、對現在有影響的事件。「找不到」是此刻的結果。',
    explanationEn: 'Present perfect links a past event to a present result — losing keys explains why they can\'t be found now.'
  },
  {
    id: 'gr-t4', category: 'tense',
    sentence: 'By the time the ambulance arrived, he ___ already ___.',
    sentenceZh: '救護車抵達時，他已經昏倒了。',
    options: ['already fainted', 'had already fainted', 'has already fainted', 'was already fainting'],
    correct: 'had already fainted',
    explanationZh: '過去完成式（had + p.p.）表示在另一個過去動作之前已完成的事。「救護車到達」在前，「昏倒」在更早之前。',
    explanationEn: 'Past perfect (had + p.p.) shows an action completed before another past action.'
  },
  {
    id: 'gr-t5', category: 'tense',
    sentence: 'Look at those dark clouds! It ___ rain soon.',
    sentenceZh: '看看那些烏雲！很快就要下雨了。',
    options: ['will', 'is going to', 'would', 'is about raining'],
    correct: 'is going to',
    explanationZh: '「be going to」用於根據眼前明顯跡象做的預測（烏雲→要下雨）。「will」則用於臨時決定或純粹預測。',
    explanationEn: '"Be going to" expresses a prediction based on visible evidence. "Will" is for spontaneous decisions or general predictions without evidence.'
  },
  {
    id: 'gr-t6', category: 'tense',
    sentence: 'Water ___ at 100 degrees Celsius.',
    sentenceZh: '水在攝氏100度時沸騰。',
    options: ['is boiling', 'boiled', 'boils', 'has boiled'],
    correct: 'boils',
    explanationZh: '一般現在式用於陳述科學事實、普遍真理或不變的狀態。',
    explanationEn: 'Simple present tense is used for scientific facts, general truths, and permanent states.'
  },
  {
    id: 'gr-t7', category: 'tense',
    sentence: 'I ___ English since I was seven years old.',
    sentenceZh: '我從七歲起就一直在學英文。',
    options: ['learn', 'learned', 'have been learning', 'am learning'],
    correct: 'have been learning',
    explanationZh: '現在完成進行式（have been + V-ing）強調從過去持續到現在的動作，常與 since/for 連用。',
    explanationEn: 'Present perfect continuous emphasizes an ongoing action that started in the past and continues now.'
  },
  {
    id: 'gr-t8', category: 'tense',
    sentence: 'Don\'t disturb her — she ___ on a very important report right now.',
    sentenceZh: '別打擾她——她現在正在寫一份非常重要的報告。',
    options: ['works', 'worked', 'is working', 'has worked'],
    correct: 'is working',
    explanationZh: '現在進行式（am/is/are + V-ing）表示說話當下正在發生的動作，right now 是關鍵線索。',
    explanationEn: 'Present continuous describes an action happening at the moment of speaking. "Right now" is the clue.'
  },
  {
    id: 'gr-t9', category: 'tense',
    sentence: 'She is exhausted because she ___ all day without a break.',
    sentenceZh: '她精疲力竭，因為她整天沒有休息地工作。',
    options: ['worked', 'is working', 'has worked', 'has been working'],
    correct: 'has been working',
    explanationZh: '現在完成進行式強調動作持續的時間，解釋了「為什麼精疲力竭」這一現在的狀態。',
    explanationEn: 'Present perfect continuous emphasizes the duration of an activity that explains a present result.'
  },
  {
    id: 'gr-t10', category: 'tense',
    sentence: 'I ___ a famous singer when I was a teenager. I performed in concerts!',
    sentenceZh: '我年輕時曾經是一位著名歌手，還在音樂會上表演過！',
    options: ['was used to be', 'used to be', 'was being', 'used to being'],
    correct: 'used to be',
    explanationZh: '「used to + 原形動詞」表示過去的習慣或狀態，但現在已不再如此。注意：不能說 "was used to be"。',
    explanationEn: '"Used to + base verb" describes a past habit or state that no longer exists. The structure is always "used to + base verb".'
  },
  {
    id: 'gr-t11', category: 'tense',
    sentence: 'By the time you arrive, I ___ already ___ all the cooking.',
    sentenceZh: '等你到的時候，我應該已經把飯都做好了。',
    options: ['will already finish', 'will have already finished', 'am finishing', 'would finish'],
    correct: 'will have already finished',
    explanationZh: '未來完成式（will have + p.p.）表示在未來某個時間點之前將已完成的動作。',
    explanationEn: 'Future perfect (will have + p.p.) describes an action that will be completed before a specific point in the future.'
  },
  {
    id: 'gr-t12', category: 'tense',
    sentence: 'He was completely exhausted yesterday because he ___ all through the night.',
    sentenceZh: '他昨天精疲力竭，因為他整夜都在工作。',
    options: ['worked', 'was working', 'has been working', 'had been working'],
    correct: 'had been working',
    explanationZh: '過去完成進行式（had been + V-ing）表示在過去某個時間點之前一直持續進行的動作，說明了過去狀態的原因。',
    explanationEn: 'Past perfect continuous describes an ongoing activity before a past point in time, explaining a past state or result.'
  },

  // ══════════════════════════════════════════════
  // 冠詞 ARTICLES
  // ══════════════════════════════════════════════
  {
    id: 'gr-a1', category: 'article',
    sentence: 'Could you pass me ___ salt, please?',
    sentenceZh: '可以把鹽遞給我嗎？',
    options: ['a', 'an', 'the', '∅ (no article)'],
    correct: 'the',
    explanationZh: '桌上特定的那罐鹽，雙方都知道是哪個，用定冠詞 the。',
    explanationEn: 'Use "the" when both speaker and listener know exactly which item is being referred to (specific reference).'
  },
  {
    id: 'gr-a2', category: 'article',
    sentence: 'My sister is ___ engineer at a tech company.',
    sentenceZh: '我姐姐是一家科技公司的工程師。',
    options: ['a', 'an', 'the', '∅ (no article)'],
    correct: 'an',
    explanationZh: '"engineer" 以母音音素 /ɛ/ 開頭，冠詞要用 an。不定冠詞（a/an）用於第一次提到的職業。',
    explanationEn: 'Use "an" before words starting with a vowel sound. "Engineer" starts with the vowel sound /ɛ/.'
  },
  {
    id: 'gr-a3', category: 'article',
    sentence: 'I love ___ classical music. I listen to it every day.',
    sentenceZh: '我喜歡古典音樂，每天都在聽。',
    options: ['a', 'an', 'the', '∅ (no article)'],
    correct: '∅ (no article)',
    explanationZh: '談論一般性的抽象概念（music、love、nature）時不加冠詞。若特指某個音樂作品才加 the。',
    explanationEn: 'No article is used with abstract nouns or uncountable nouns used in a general sense.'
  },
  {
    id: 'gr-a4', category: 'article',
    sentence: '___ Mount Fuji is a popular tourist destination in Japan.',
    sentenceZh: '富士山是日本著名的旅遊景點。',
    options: ['A', 'An', 'The', '∅ (no article)'],
    correct: '∅ (no article)',
    explanationZh: '山名（Mount + 名稱）前通常不加冠詞，例如 Mount Everest、Mount Ali。但 the Himalayas、the Alps（山脈）需加 the。',
    explanationEn: 'No article before named mountains (Mount + name). But mountain ranges like "the Alps" take "the".'
  },
  {
    id: 'gr-a5', category: 'article',
    sentence: 'I bought a new book yesterday. ___ book is really interesting.',
    sentenceZh: '我昨天買了一本新書，那本書非常有趣。',
    options: ['A', 'An', 'The', '∅ (no article)'],
    correct: 'The',
    explanationZh: '第一次提到用 a/an，第二次提到（聽者已知是哪本書）改用 the。',
    explanationEn: 'First mention uses "a/an" (indefinite). Subsequent mentions use "the" because the listener now knows which one.'
  },
  {
    id: 'gr-a6', category: 'article',
    sentence: 'He plays ___ piano at a concert hall every weekend.',
    sentenceZh: '他每個週末在音樂廳彈鋼琴。',
    options: ['a', 'an', 'the', '∅ (no article)'],
    correct: 'the',
    explanationZh: '演奏樂器時，樂器名稱前加 the（play the piano、play the guitar）。但 play sports 不加冠詞（play basketball）。',
    explanationEn: 'Use "the" with musical instruments: play the piano, play the violin. But no article for sports: play basketball.'
  },
  {
    id: 'gr-a7', category: 'article',
    sentence: '___ honesty is the most important quality in a friend.',
    sentenceZh: '誠實是朋友最重要的品質。',
    options: ['A', 'An', 'The', '∅ (no article)'],
    correct: '∅ (no article)',
    explanationZh: '用抽象名詞表達一般概念時（honesty、freedom、love）不加冠詞。',
    explanationEn: 'Abstract nouns used in a general sense do not take an article: honesty, freedom, courage.'
  },
  {
    id: 'gr-a8', category: 'article',
    sentence: 'There is ___ university near my house, but it\'s quite small.',
    sentenceZh: '我家附近有一所大學，但它很小。',
    options: ['a', 'an', 'the', '∅ (no article)'],
    correct: 'a',
    explanationZh: '"university" 雖以字母 u 開頭，但發音為 /juː/（輔音音素），所以用 a，不用 an。',
    explanationEn: '"University" starts with a consonant sound /j/, so use "a", not "an". It\'s the sound, not the letter, that matters.'
  },
  {
    id: 'gr-a9', category: 'article',
    sentence: '___ Amazon is the world\'s largest river by volume.',
    sentenceZh: '亞馬遜河是世界上水量最大的河流。',
    options: ['A', 'An', 'The', '∅ (no article)'],
    correct: 'The',
    explanationZh: '河流、海洋、山脈、運河等名稱前加 the（the Amazon、the Pacific、the Nile）。',
    explanationEn: 'Use "the" with rivers, oceans, mountain ranges, and canals: the Amazon, the Pacific, the Alps.'
  },
  {
    id: 'gr-a10', category: 'article',
    sentence: 'She wants to become ___ doctor and specialize in pediatrics.',
    sentenceZh: '她想成為一名兒科醫生。',
    options: ['a', 'an', 'the', '∅ (no article)'],
    correct: 'a',
    explanationZh: '談論一個（非特定）職業或身份時用不定冠詞 a/an。"doctor" 以輔音開頭，用 a。',
    explanationEn: 'Use "a/an" when referring to a job or role in a non-specific way. "Doctor" starts with a consonant, so use "a".'
  },

  // ══════════════════════════════════════════════
  // 介系詞 PREPOSITIONS
  // ══════════════════════════════════════════════
  {
    id: 'gr-p1', category: 'preposition',
    sentence: 'The meeting is scheduled ___ 3 o\'clock this afternoon.',
    sentenceZh: '會議安排在今天下午三點。',
    options: ['in', 'on', 'at', 'by'],
    correct: 'at',
    explanationZh: '精確的時間點（幾點幾分、noon、midnight）用 at。',
    explanationEn: 'Use "at" for specific points in time: at 3 o\'clock, at noon, at midnight.'
  },
  {
    id: 'gr-p2', category: 'preposition',
    sentence: 'She was born ___ 1995, on a rainy Tuesday.',
    sentenceZh: '她出生於1995年一個下雨的星期二。',
    options: ['at', 'on', 'in', 'by'],
    correct: 'in',
    explanationZh: '年份和月份用 in（in 1995、in March）；日期和星期用 on（on Tuesday）；時間點用 at。',
    explanationEn: 'Use "in" for years and months; "on" for days and dates; "at" for clock times.'
  },
  {
    id: 'gr-p3', category: 'preposition',
    sentence: 'Their apartment is ___ the fifth floor of that building.',
    sentenceZh: '他們的公寓在那棟大樓的五樓。',
    options: ['in', 'on', 'at', 'above'],
    correct: 'on',
    explanationZh: '描述樓層用 on（on the first floor、on the fifth floor）。',
    explanationEn: 'Use "on" for floors of a building: on the third floor, on the ground floor.'
  },
  {
    id: 'gr-p4', category: 'preposition',
    sentence: 'We finally arrived ___ the airport with only ten minutes to spare.',
    sentenceZh: '我們終於抵達機場，只剩十分鐘。',
    options: ['in', 'on', 'at', 'to'],
    correct: 'at',
    explanationZh: '機場、車站、學校、公司等「地點/設施」用 at（視為一個地點）。較大的地理區域（城市、國家）用 in。',
    explanationEn: 'Use "at" for specific locations treated as a point (airport, station, school). Use "in" for larger areas (cities, countries).'
  },
  {
    id: 'gr-p5', category: 'preposition',
    sentence: 'I\'ve been waiting ___ over two hours! Where have you been?',
    sentenceZh: '我已經等了超過兩個小時了！你去哪了？',
    options: ['since', 'for', 'during', 'while'],
    correct: 'for',
    explanationZh: 'for + 時間長度（for two hours、for a week）；since + 起始點（since 3pm、since Monday）。',
    explanationEn: '"For" + duration of time (for two hours). "Since" + starting point in time (since Monday, since 2020).'
  },
  {
    id: 'gr-p6', category: 'preposition',
    sentence: 'She has been living in Taipei ___ she graduated from university.',
    sentenceZh: '她從大學畢業後就一直住在台北。',
    options: ['for', 'during', 'since', 'from'],
    correct: 'since',
    explanationZh: 'since + 時間起點（since she graduated、since 2020）配合完成式使用。',
    explanationEn: '"Since" marks the starting point of an action and is used with perfect tenses.'
  },
  {
    id: 'gr-p7', category: 'preposition',
    sentence: 'I usually go to work ___ bus, but today I drove.',
    sentenceZh: '我通常搭公車上班，但今天我開車去。',
    options: ['with', 'on', 'by', 'in'],
    correct: 'by',
    explanationZh: 'by + 交通工具（by bus、by train、by plane）。注意：不加冠詞。搭計程車可說 by taxi 或 in a taxi。',
    explanationEn: 'Use "by" with means of transport (no article): by bus, by train, by plane. Exception: in a taxi/car.'
  },
  {
    id: 'gr-p8', category: 'preposition',
    sentence: 'She cut the vegetables ___ a sharp kitchen knife.',
    sentenceZh: '她用一把鋒利的菜刀切蔬菜。',
    options: ['by', 'with', 'using of', 'through'],
    correct: 'with',
    explanationZh: '用具體的工具/器具做某事用 with（with a knife、with a pen）。by 後接動名詞（by using a knife）。',
    explanationEn: 'Use "with" for the tool or instrument used: with a knife, with a brush. "By" is followed by a gerund (by using...).'
  },
  {
    id: 'gr-p9', category: 'preposition',
    sentence: 'We have a team meeting ___ Friday afternoon every week.',
    sentenceZh: '我們每週五下午都有團隊會議。',
    options: ['in', 'at', 'on', 'by'],
    correct: 'on',
    explanationZh: '星期幾和具體日期用 on（on Friday、on Monday morning、on July 4th）。',
    explanationEn: 'Use "on" for days of the week and specific dates: on Friday, on Monday morning, on July 4th.'
  },
  {
    id: 'gr-p10', category: 'preposition',
    sentence: 'Please divide the project tasks equally ___ all five team members.',
    sentenceZh: '請把專案任務平均分配給所有五位組員。',
    options: ['between', 'among', 'within', 'across of'],
    correct: 'among',
    explanationZh: 'between 用於兩者之間；among 用於三者或三者以上之間。',
    explanationEn: '"Between" is used for two people/things. "Among" is used for three or more.'
  },

  // ══════════════════════════════════════════════
  // 情態動詞 MODAL VERBS
  // ══════════════════════════════════════════════
  {
    id: 'gr-m1', category: 'modal',
    sentence: 'You ___ eat so much junk food — it\'s really bad for your health.',
    sentenceZh: '你不應該吃那麼多垃圾食物，對健康真的很不好。',
    options: ['mustn\'t', 'shouldn\'t', 'can\'t', 'wouldn\'t'],
    correct: 'shouldn\'t',
    explanationZh: 'shouldn\'t = should not，給予建議或警告（不夠強硬）。mustn\'t 是強烈禁止，語氣更重。',
    explanationEn: '"Shouldn\'t" gives advice or a recommendation. "Mustn\'t" is a strong prohibition (forbidden).'
  },
  {
    id: 'gr-m2', category: 'modal',
    sentence: 'When I was a child, I ___ run very fast, but now I can barely walk!',
    sentenceZh: '我小時候跑得很快，但現在我幾乎走不動了！',
    options: ['can', 'could', 'was able to be', 'might'],
    correct: 'could',
    explanationZh: '表示過去的能力用 could（或 was/were able to）。can 是現在的能力。',
    explanationEn: '"Could" expresses past ability (general). "Can" expresses present ability.'
  },
  {
    id: 'gr-m3', category: 'modal',
    sentence: 'You ___ submit the application before Friday, or you\'ll miss the deadline.',
    sentenceZh: '你必須在星期五前遞交申請，否則就會錯過截止日期。',
    options: ['should', 'might', 'must', 'used to'],
    correct: 'must',
    explanationZh: 'must 表示強烈的必要性或義務（說話者的立場）。should 只是建議，語氣較弱。',
    explanationEn: '"Must" expresses strong obligation or necessity from the speaker. "Should" is a recommendation, less urgent.'
  },
  {
    id: 'gr-m4', category: 'modal',
    sentence: 'Take an umbrella — it ___ rain this afternoon. The forecast is uncertain.',
    sentenceZh: '帶把雨傘吧——今天下午可能會下雨，天氣預報不確定。',
    options: ['will', 'shall', 'might', 'must'],
    correct: 'might',
    explanationZh: 'might 表示較不確定的可能性（可能，也可能不）。may 比 might 略確定一點。will 表確定。',
    explanationEn: '"Might" suggests a weaker possibility (uncertain). "May" is slightly more certain. "Will" is definite.'
  },
  {
    id: 'gr-m5', category: 'modal',
    sentence: 'You ___ bring a gift to the party — it\'s optional, but it would be nice.',
    sentenceZh: '你不一定要帶禮物去派對——這是可選的，但如果帶會很好。',
    options: ['mustn\'t', 'shouldn\'t', 'don\'t have to', 'can\'t'],
    correct: 'don\'t have to',
    explanationZh: 'don\'t have to = 沒有義務，不需要（但可以做）。mustn\'t = 禁止，絕對不能做。兩者意思完全不同！',
    explanationEn: '"Don\'t have to" = no obligation (but you can if you want). "Mustn\'t" = prohibition (you are not allowed to). Very different meanings!'
  },
  {
    id: 'gr-m6', category: 'modal',
    sentence: '___ I borrow your charger? My phone is about to die.',
    sentenceZh: '我可以借一下你的充電線嗎？我的手機快沒電了。',
    options: ['Will', 'Shall', 'Could', 'Would'],
    correct: 'Could',
    explanationZh: 'Could I...? 是有禮貌的請求方式，比 Can I...? 更正式委婉。',
    explanationEn: '"Could I...?" is a polite request, more formal than "Can I...?"'
  },
  {
    id: 'gr-m7', category: 'modal',
    sentence: 'She ___ be home by now — she left the office two hours ago.',
    sentenceZh: '她現在應該已經到家了——她兩小時前就離開辦公室了。',
    options: ['must', 'should', 'might', 'would'],
    correct: 'should',
    explanationZh: 'should 在此表示根據邏輯推測的期望，意思是「按理說應該已經……」。must 用於更確定的推斷。',
    explanationEn: '"Should" expresses logical expectation. "Must" would suggest stronger certainty (almost certain).'
  },
  {
    id: 'gr-m8', category: 'modal',
    sentence: 'You ___ back up your files — losing all that data would be a disaster.',
    sentenceZh: '你最好備份你的檔案——丟失那些資料將是一場災難。',
    options: ['should', 'had better', 'must', 'ought'],
    correct: 'had better',
    explanationZh: '"had better + 原形動詞" 帶有警告意味，暗示不做的話有不好的後果，比 should 語氣更強。',
    explanationEn: '"Had better" carries a warning — there will be negative consequences if you don\'t follow the advice. Stronger than "should".'
  },
  {
    id: 'gr-m9', category: 'modal',
    sentence: '___ you rather have tea or coffee this morning?',
    sentenceZh: '你今天早上比較想要茶還是咖啡？',
    options: ['Will', 'Shall', 'Would', 'Could'],
    correct: 'Would',
    explanationZh: '"Would you rather...?" 用來詢問偏好選擇，是固定搭配。',
    explanationEn: '"Would you rather...?" is a fixed phrase for asking about preferences between two options.'
  },
  {
    id: 'gr-m10', category: 'modal',
    sentence: 'You ___ worry so much — everything will work out in the end.',
    sentenceZh: '你不需要擔心那麼多——一切最終都會好起來的。',
    options: ['mustn\'t', 'couldn\'t', 'needn\'t', 'hadn\'t'],
    correct: 'needn\'t',
    explanationZh: '"needn\'t + 原形動詞" = don\'t need to，表示不必要、不需要。注意：mustn\'t 是禁止。',
    explanationEn: '"Needn\'t + base verb" means "don\'t need to" — there\'s no necessity. It\'s different from "mustn\'t" (forbidden).'
  },

  // ══════════════════════════════════════════════
  // 被動語態 PASSIVE VOICE
  // ══════════════════════════════════════════════
  {
    id: 'gr-pv1', category: 'passive',
    sentence: 'English ___ as an official language in more than fifty countries.',
    sentenceZh: '英語在超過五十個國家被當作官方語言使用。',
    options: ['speaks', 'spoke', 'is spoken', 'has spoken'],
    correct: 'is spoken',
    explanationZh: '現在式被動語態：am/is/are + 過去分詞（p.p.）。主詞 English 是動作的接受者。',
    explanationEn: 'Simple present passive: am/is/are + past participle. The subject (English) receives the action.'
  },
  {
    id: 'gr-pv2', category: 'passive',
    sentence: 'The Eiffel Tower ___ in Paris in 1889 for the World\'s Fair.',
    sentenceZh: '艾菲爾鐵塔於1889年在巴黎為世界博覽會而建。',
    options: ['builds', 'built', 'was built', 'has been built'],
    correct: 'was built',
    explanationZh: '過去式被動語態：was/were + 過去分詞。1889年是明確的過去時間點，用簡單過去式被動。',
    explanationEn: 'Simple past passive: was/were + past participle. Use when there is a specific past time reference.'
  },
  {
    id: 'gr-pv3', category: 'passive',
    sentence: 'The annual report ___ already ___ to the board of directors.',
    sentenceZh: '年度報告已經提交給董事會了。',
    options: ['is already sent', 'was already submitted', 'has already been submitted', 'had submitted'],
    correct: 'has already been submitted',
    explanationZh: '現在完成式被動語態：has/have + been + 過去分詞。already 是典型的現在完成式時間副詞。',
    explanationEn: 'Present perfect passive: has/have + been + past participle. "Already" is a typical present perfect adverb.'
  },
  {
    id: 'gr-pv4', category: 'passive',
    sentence: 'Your package ___ delivered to your address tomorrow morning.',
    sentenceZh: '您的包裹將於明天早上送達您的地址。',
    options: ['is going to deliver', 'delivers', 'will be delivered', 'has been delivered'],
    correct: 'will be delivered',
    explanationZh: '未來式被動語態：will + be + 過去分詞。主詞 package 是動作的接受者，不是執行者。',
    explanationEn: 'Future passive: will + be + past participle. The subject (package) receives the action of delivery.'
  },
  {
    id: 'gr-pv5', category: 'passive',
    sentence: 'This form ___ signed by the department manager before submission.',
    sentenceZh: '這份表格在提交前必須由部門經理簽署。',
    options: ['must sign', 'must be signing', 'must be signed', 'should sign'],
    correct: 'must be signed',
    explanationZh: '情態動詞被動語態：情態動詞 + be + 過去分詞。主詞 form 是被簽署的對象。',
    explanationEn: 'Modal passive: modal verb + be + past participle. The form is what gets signed (receiver of action).'
  },
  {
    id: 'gr-pv6', category: 'passive',
    sentence: 'The patients ___ the new medication last week as part of the trial.',
    sentenceZh: '上週，患者被給予了新藥作為試驗的一部分。',
    options: ['were giving', 'gave', 'were given', 'have given'],
    correct: 'were given',
    explanationZh: 'give 有雙賓語（give sb sth）。被動式可把間接賓語變為主詞：The patients were given the medication（= Doctors gave the patients the medication）。',
    explanationEn: '"Give" can take two objects. In passive voice, the indirect object (patients) becomes the subject: were given + direct object.'
  },
  {
    id: 'gr-pv7', category: 'passive',
    sentence: 'The road outside our office ___ right now, so there will be delays.',
    sentenceZh: '我們辦公室外面的道路現在正在施工，所以會有延誤。',
    options: ['repairs', 'is repairing', 'is being repaired', 'has repaired'],
    correct: 'is being repaired',
    explanationZh: '現在進行式被動語態：am/is/are + being + 過去分詞。描述當下正在進行中的被動動作。',
    explanationEn: 'Present continuous passive: am/is/are + being + past participle. Describes an action currently in progress.'
  },
  {
    id: 'gr-pv8', category: 'passive',
    sentence: 'By the time we arrived, all the food at the buffet ___ already ___.',
    sentenceZh: '我們到的時候，自助餐的食物已經全部被吃光了。',
    options: ['already ate', 'was already eating', 'had already been eaten', 'has already been eaten'],
    correct: 'had already been eaten',
    explanationZh: '過去完成式被動語態：had + been + 過去分詞。在「抵達」這個過去時間點之前，食物已被吃完。',
    explanationEn: 'Past perfect passive: had + been + past participle. The food was eaten before the past event of arriving.'
  },

  // ══════════════════════════════════════════════
  // 比較句型 COMPARATIVES & SUPERLATIVES
  // ══════════════════════════════════════════════
  {
    id: 'gr-c1', category: 'comparison',
    sentence: 'This exercise is much ___ than I expected it to be.',
    sentenceZh: '這個練習比我預想的難多了。',
    options: ['hard', 'more hard', 'harder', 'hardest'],
    correct: 'harder',
    explanationZh: '單音節或雙音節形容詞用 -er 構成比較級（hard → harder）。多音節形容詞用 more（more difficult）。',
    explanationEn: 'One/two-syllable adjectives form comparatives with -er. Multi-syllable adjectives use "more".'
  },
  {
    id: 'gr-c2', category: 'comparison',
    sentence: 'Out of all the candidates, she was clearly ___ for the position.',
    sentenceZh: '在所有候選人中，她顯然是這個職位最適合的人選。',
    options: ['more good', 'better', 'the best', 'the goodest'],
    correct: 'the best',
    explanationZh: 'good → better（比較級）→ the best（最高級）。不規則變化，不能說 more good 或 gooder。',
    explanationEn: 'Irregular superlative: good → better → the best. Never use "more good" or "gooder".'
  },
  {
    id: 'gr-c3', category: 'comparison',
    sentence: 'Traveling by plane is ___ expensive than traveling by bus.',
    sentenceZh: '搭飛機比搭公車貴得多。',
    options: ['more', 'most', 'very', 'much'],
    correct: 'more',
    explanationZh: '"expensive" 是多音節形容詞，比較級用 more + 形容詞，而非加 -er。',
    explanationEn: 'Multi-syllable adjectives form comparatives with "more + adjective": more expensive, more beautiful.'
  },
  {
    id: 'gr-c4', category: 'comparison',
    sentence: 'Her English pronunciation is ___ good ___ a native speaker\'s.',
    sentenceZh: '她的英語發音跟母語人士一樣好。',
    options: ['so...as', 'as...as', 'more...than', 'such...as'],
    correct: 'as...as',
    explanationZh: '表示「與…一樣…」用 as + 形容詞/副詞 + as。表示「不如…」用 not as...as 或 not so...as。',
    explanationEn: '"As + adjective/adverb + as" expresses equality. "Not as...as" or "not so...as" expresses inequality.'
  },
  {
    id: 'gr-c5', category: 'comparison',
    sentence: 'This new laptop is ___ better than my old one — the battery life is amazing!',
    sentenceZh: '這台新筆記型電腦好多了——電池續航力真是驚人！',
    options: ['very', 'more', 'much', 'a most'],
    correct: 'much',
    explanationZh: '比較級前可用 much、far、a lot、even、still 加強語氣（much better）。不能用 very 修飾比較級。',
    explanationEn: 'Use much/far/a lot/even/still to intensify comparatives: much better, far more interesting. Never use "very".'
  },
  {
    id: 'gr-c6', category: 'comparison',
    sentence: 'That was ___ most delicious meal I\'ve had in years!',
    sentenceZh: '那是我多年來吃過的最美味的一頓飯！',
    options: ['a', 'an', 'the', '∅ (no article)'],
    correct: 'the',
    explanationZh: '最高級（most/least/best/worst/...est）前面一定要加定冠詞 the。',
    explanationEn: 'The definite article "the" is always used before superlatives: the most, the least, the best, the tallest.'
  },
  {
    id: 'gr-c7', category: 'comparison',
    sentence: '___ you practice, ___ you will improve.',
    sentenceZh: '你練習得越多，你就會進步越快。',
    options: ['More...more', 'The more...the more', 'The most...the most', 'More...the more'],
    correct: 'The more...the more',
    explanationZh: '「The + 比較級, the + 比較級」表示「越…越…」。兩邊都需要 the，且用比較級不用最高級。',
    explanationEn: '"The + comparative, the + comparative" expresses proportional increase: the more you practice, the better you get.'
  },
  {
    id: 'gr-c8', category: 'comparison',
    sentence: 'My spoken English is not ___ fluent ___ my written English.',
    sentenceZh: '我的口語英文沒有我的書面英文流利。',
    options: ['more...than', 'as...as', 'so...than', 'such...as'],
    correct: 'as...as',
    explanationZh: '否定句 not as...as = not so...as，表示「沒有…那麼…」、「不如…」。兩個 as 都必須保留。',
    explanationEn: '"Not as...as" expresses that something is less than another. Both "as" must be present: not as fluent as.'
  },
];
