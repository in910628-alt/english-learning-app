// ============================================================
// ENGLISH LEARNING APP - Data File
// ============================================================

const THEMES = [
  {
    id: 'job-interview',
    name: 'Job Interview',
    nameZh: '工作面試',
    icon: '💼',
    color: '#3B82F6',
    colorLight: '#EFF6FF',
    scenes: [
      {
        id: 'ji-greeting',
        title: 'Opening & Greeting',
        titleZh: '開場打招呼',
        chunks: [
          { id: 'ji-g1', english: "Good morning. Thank you for having me.", chinese: "早安。感謝您邀請我來面試。" },
          { id: 'ji-g2', english: "I'm pleased to meet you.", chinese: "很高興認識您。" },
          { id: 'ji-g3', english: "Thank you for the opportunity to interview with your company.", chinese: "感謝您給我在貴公司面試的機會。" },
          { id: 'ji-g4', english: "I've been looking forward to this interview.", chinese: "我一直很期待這次面試。" },
          { id: 'ji-g5', english: "Your company's reputation really impressed me.", chinese: "貴公司的聲譽令我印象深刻。" },
          { id: 'ji-g6', english: "I had no trouble finding the office today.", chinese: "我今天找到辦公室沒有遇到任何困難。" }
        ]
      },
      {
        id: 'ji-intro',
        title: 'Self Introduction',
        titleZh: '自我介紹',
        chunks: [
          { id: 'ji-i1', english: "My name is [Name], and I'm a software engineer with five years of experience.", chinese: "我叫[姓名]，是一位有五年經驗的軟體工程師。" },
          { id: 'ji-i2', english: "I graduated from [University] with a degree in Computer Science.", chinese: "我畢業於[大學]，主修電腦科學。" },
          { id: 'ji-i3', english: "I've spent the last three years specializing in backend development.", chinese: "過去三年我專注於後端開發。" },
          { id: 'ji-i4', english: "In my current role, I lead a team of four developers.", chinese: "在我目前的職位上，我帶領一個四人的開發團隊。" },
          { id: 'ji-i5', english: "I'm passionate about creating efficient and scalable solutions.", chinese: "我熱衷於創造高效且可擴展的解決方案。" },
          { id: 'ji-i6', english: "I believe my background makes me a strong candidate for this position.", chinese: "我相信我的背景使我成為這個職位的有力候選人。" }
        ]
      },
      {
        id: 'ji-experience',
        title: 'Discussing Experience',
        titleZh: '談論工作經驗',
        chunks: [
          { id: 'ji-e1', english: "In my previous role, I was responsible for managing the product roadmap.", chinese: "在我之前的職位，我負責管理產品路線圖。" },
          { id: 'ji-e2', english: "I successfully led a project that reduced costs by thirty percent.", chinese: "我成功領導了一個將成本降低30%的專案。" },
          { id: 'ji-e3', english: "I collaborated with cross-functional teams to deliver results on time.", chinese: "我與跨部門團隊合作，準時交付成果。" },
          { id: 'ji-e4', english: "One of my key achievements was launching a new product feature that increased user engagement.", chinese: "我的一個重要成就是推出新產品功能，提高了用戶參與度。" },
          { id: 'ji-e5', english: "I have experience working in both startup and enterprise environments.", chinese: "我有在新創公司和大型企業環境中工作的經驗。" },
          { id: 'ji-e6', english: "I'm comfortable working under pressure and meeting tight deadlines.", chinese: "我能夠在壓力下工作並在緊迫的期限內完成任務。" }
        ]
      },
      {
        id: 'ji-strengths',
        title: 'Strengths & Weaknesses',
        titleZh: '優缺點',
        chunks: [
          { id: 'ji-s1', english: "One of my greatest strengths is my ability to solve complex problems.", chinese: "我最大的優點之一是解決複雜問題的能力。" },
          { id: 'ji-s2', english: "I'm a strong communicator and I enjoy working in team settings.", chinese: "我有很強的溝通能力，喜歡在團隊環境中工作。" },
          { id: 'ji-s3', english: "I tend to be very detail-oriented, which helps me deliver high-quality work.", chinese: "我傾向於非常注重細節，這有助於我提供高品質的工作。" },
          { id: 'ji-s4', english: "I'm always eager to learn new skills and stay current with industry trends.", chinese: "我總是渴望學習新技能並保持對行業趨勢的了解。" },
          { id: 'ji-s5', english: "I'm working on improving my public speaking skills by joining a Toastmasters club.", chinese: "我正在透過加入演講俱樂部來提升我的公開演講技巧。" },
          { id: 'ji-s6', english: "I sometimes take on too much work, but I'm learning to delegate more effectively.", chinese: "我有時會接太多工作，但我正在學習更有效地授權。" }
        ]
      },
      {
        id: 'ji-questions',
        title: 'Asking Questions & Closing',
        titleZh: '提問與結尾',
        chunks: [
          { id: 'ji-q1', english: "Could you tell me more about the day-to-day responsibilities of this role?", chinese: "您能告訴我這個職位的日常職責嗎？" },
          { id: 'ji-q2', english: "What does success look like for someone in this position after six months?", chinese: "六個月後，這個職位的成功標準是什麼？" },
          { id: 'ji-q3', english: "I'm very excited about this opportunity and I believe I'd be a great fit.", chinese: "我對這個機會感到非常興奮，我相信自己非常適合這個職位。" },
          { id: 'ji-q4', english: "What are the next steps in the hiring process?", chinese: "招聘流程的下一步是什麼？" },
          { id: 'ji-q5', english: "Thank you so much for your time today. It was a pleasure speaking with you.", chinese: "非常感謝您今天的時間。很高興與您交談。" },
          { id: 'ji-q6', english: "I look forward to hearing from you soon.", chinese: "我期待很快收到您的消息。" }
        ]
      }
    ]
  },
  {
    id: 'daily-life',
    name: 'Daily Life',
    nameZh: '日常生活對話',
    icon: '🌟',
    color: '#22C55E',
    colorLight: '#F0FDF4',
    scenes: [
      {
        id: 'dl-greetings',
        title: 'Greetings & Small Talk',
        titleZh: '打招呼與閒聊',
        chunks: [
          { id: 'dl-g1', english: "Hey! Long time no see. How have you been?", chinese: "嘿！好久不見。你最近好嗎？" },
          { id: 'dl-g2', english: "Not too bad, just keeping busy with work.", chinese: "還不錯，只是工作比較忙。" },
          { id: 'dl-g3', english: "The weather is lovely today, isn't it?", chinese: "今天天氣很好，不是嗎？" },
          { id: 'dl-g4', english: "I heard you just got back from a trip. How was it?", chinese: "我聽說你剛旅行回來。怎麼樣？" },
          { id: 'dl-g5', english: "It was absolutely amazing! I'd love to go back.", chinese: "真的太棒了！我很想再去一次。" },
          { id: 'dl-g6', english: "Well, I should get going. It was great catching up!", chinese: "好吧，我該走了。很高興能敘舊！" }
        ]
      },
      {
        id: 'dl-shopping',
        title: 'Shopping',
        titleZh: '購物',
        chunks: [
          { id: 'dl-s1', english: "Excuse me, where can I find the dairy section?", chinese: "不好意思，乳製品區在哪裡？" },
          { id: 'dl-s2', english: "Do you have this shirt in a medium?", chinese: "這件衣服有中號嗎？" },
          { id: 'dl-s3', english: "Can I try this on? Where are the fitting rooms?", chinese: "我可以試穿嗎？試衣間在哪裡？" },
          { id: 'dl-s4', english: "Is this on sale? I saw an advertisement for a discount.", chinese: "這個有特價嗎？我看到了折扣的廣告。" },
          { id: 'dl-s5', english: "I'd like to return this. I have my receipt.", chinese: "我想退貨。我有收據。" },
          { id: 'dl-s6', english: "Can I pay by credit card, or is it cash only?", chinese: "我可以用信用卡付款嗎，還是只收現金？" }
        ]
      },
      {
        id: 'dl-dining',
        title: 'Dining Out',
        titleZh: '外出用餐',
        chunks: [
          { id: 'dl-d1', english: "Hi, I have a reservation for two under the name Smith.", chinese: "您好，我以Smith的名義預訂了兩人桌。" },
          { id: 'dl-d2', english: "Could we have a table by the window?", chinese: "我們可以坐靠窗的桌子嗎？" },
          { id: 'dl-d3', english: "What do you recommend? Is there anything special today?", chinese: "您推薦什麼？今天有什麼特別的嗎？" },
          { id: 'dl-d4', english: "I'm allergic to shellfish. Does this dish contain any?", chinese: "我對貝類過敏。這道菜含有貝類嗎？" },
          { id: 'dl-d5', english: "Could we get some more water when you have a chance?", chinese: "方便的時候可以再給我們一些水嗎？" },
          { id: 'dl-d6', english: "Could we get the check, please? We'll split it.", chinese: "可以給我們帳單嗎？我們要各付各的。" }
        ]
      },
      {
        id: 'dl-transport',
        title: 'Getting Around',
        titleZh: '交通出行',
        chunks: [
          { id: 'dl-t1', english: "Excuse me, how do I get to the city center from here?", chinese: "不好意思，從這裡怎麼去市中心？" },
          { id: 'dl-t2', english: "Is this the right platform for the train to downtown?", chinese: "這是去市區的火車月台嗎？" },
          { id: 'dl-t3', english: "How long does it take to get there by subway?", chinese: "坐地鐵去那裡需要多長時間？" },
          { id: 'dl-t4', english: "Can you take me to this address, please?", chinese: "可以帶我去這個地址嗎？" },
          { id: 'dl-t5', english: "I think I missed my stop. Can you tell me where we are?", chinese: "我想我錯過了我的站。您能告訴我們現在在哪裡嗎？" },
          { id: 'dl-t6', english: "Is there a bus stop nearby? Which bus goes to the airport?", chinese: "附近有公車站嗎？哪路公車去機場？" }
        ]
      },
      {
        id: 'dl-plans',
        title: 'Making Plans',
        titleZh: '約定計劃',
        chunks: [
          { id: 'dl-p1', english: "Are you free this weekend? I was thinking we could hang out.", chinese: "這個週末你有空嗎？我想我們可以一起出去玩。" },
          { id: 'dl-p2', english: "There's a new movie coming out. Do you want to go see it?", chinese: "有一部新電影要上映了。你想去看嗎？" },
          { id: 'dl-p3', english: "I'll meet you in front of the coffee shop at seven o'clock.", chinese: "我七點在咖啡店門口等你。" },
          { id: 'dl-p4', english: "Sorry, something came up. Can we reschedule for next week?", chinese: "抱歉，有事情臨時來了。我們可以改到下週嗎？" },
          { id: 'dl-p5', english: "That sounds like a great idea! I'm really looking forward to it.", chinese: "聽起來是個好主意！我真的很期待。" },
          { id: 'dl-p6', english: "Let's stay in touch. I'll text you the details later.", chinese: "保持聯繫。我稍後會把詳細資訊傳給你。" }
        ]
      }
    ]
  },
  {
    id: 'taiwan-intro',
    name: 'Introducing Taiwan',
    nameZh: '介紹台灣好棒',
    icon: '🇹🇼',
    color: '#EF4444',
    colorLight: '#FEF2F2',
    scenes: [
      {
        id: 'ti-nightmarket',
        title: 'Night Markets',
        titleZh: '夜市文化',
        chunks: [
          { id: 'ti-n1', english: "Taiwan's night markets are a must-experience part of the culture.", chinese: "台灣的夜市是必須體驗的文化一部分。" },
          { id: 'ti-n2', english: "Shilin Night Market is the most famous and largest night market in Taipei.", chinese: "士林夜市是台北最著名、最大的夜市。" },
          { id: 'ti-n3', english: "You can find everything from street food to clothing and games.", chinese: "你可以找到從街頭食物到服裝和遊戲的一切。" },
          { id: 'ti-n4', english: "Have you tried stinky tofu? It smells strong but tastes amazing!", chinese: "你有試過臭豆腐嗎？它氣味強烈但味道棒極了！" },
          { id: 'ti-n5', english: "Oyster vermicelli is a classic night market dish you shouldn't miss.", chinese: "蚵仔麵線是你不應該錯過的經典夜市食物。" },
          { id: 'ti-n6', english: "The atmosphere at night markets is lively and full of energy.", chinese: "夜市的氣氛熱鬧非凡，充滿活力。" }
        ]
      },
      {
        id: 'ti-food',
        title: 'Taiwanese Food',
        titleZh: '台灣美食',
        chunks: [
          { id: 'ti-f1', english: "Bubble tea was invented in Taiwan and has become popular worldwide.", chinese: "珍珠奶茶是台灣發明的，已在全球流行。" },
          { id: 'ti-f2', english: "Taiwanese beef noodle soup is considered a national dish.", chinese: "台灣牛肉麵被認為是國民美食。" },
          { id: 'ti-f3', english: "Scallion pancakes are a popular breakfast food made with flaky layers.", chinese: "蔥油餅是一種受歡迎的早餐食品，由酥脆的層次製成。" },
          { id: 'ti-f4', english: "Pineapple cake is one of the most popular souvenirs from Taiwan.", chinese: "鳳梨酥是台灣最受歡迎的伴手禮之一。" },
          { id: 'ti-f5', english: "Red bean shaved ice is a refreshing dessert perfect for hot days.", chinese: "紅豆刨冰是炎熱天氣中完美的清涼甜點。" },
          { id: 'ti-f6', english: "Three-cup chicken is a fragrant dish cooked with sesame oil, soy sauce, and rice wine.", chinese: "三杯雞是用麻油、醬油和米酒烹調的香噴噴菜餚。" }
        ]
      },
      {
        id: 'ti-places',
        title: 'Famous Places',
        titleZh: '著名景點',
        chunks: [
          { id: 'ti-p1', english: "Taipei 101 was once the tallest building in the world.", chinese: "台北101曾是世界上最高的建築物。" },
          { id: 'ti-p2', english: "Sun Moon Lake is breathtaking, especially at sunrise.", chinese: "日月潭令人嘆為觀止，尤其是在日出時。" },
          { id: 'ti-p3', english: "Taroko Gorge is a stunning natural wonder with marble cliffs.", chinese: "太魯閣峽谷是擁有大理石峭壁的壯觀自然奇景。" },
          { id: 'ti-p4', english: "Jiufen is a hillside village that looks like it's from a fairy tale.", chinese: "九份是一個山坡小村，看起來像童話故事中的場景。" },
          { id: 'ti-p5', english: "Alishan is famous for its sea of clouds and ancient cypress trees.", chinese: "阿里山以雲海和古柏樹聞名。" },
          { id: 'ti-p6', english: "The National Palace Museum houses one of the world's greatest collections of Chinese art.", chinese: "故宮博物院收藏了世界上最偉大的中國藝術收藏之一。" }
        ]
      },
      {
        id: 'ti-culture',
        title: 'Taiwanese Culture',
        titleZh: '台灣文化',
        chunks: [
          { id: 'ti-c1', english: "Taiwan is known worldwide for the warmth and hospitality of its people.", chinese: "台灣以其人民的熱情和好客聞名於世。" },
          { id: 'ti-c2', english: "The Dragon Boat Festival features exciting boat races and delicious zongzi.", chinese: "端午節有令人興奮的龍舟賽和美味的粽子。" },
          { id: 'ti-c3', english: "Lantern festivals during the Lunar New Year are absolutely magical to see.", chinese: "農曆新年期間的燈節看起來絕對是神奇的。" },
          { id: 'ti-c4', english: "Taiwanese temples are beautiful architectural masterpieces full of color and detail.", chinese: "台灣寺廟是色彩豐富、細節精緻的建築傑作。" },
          { id: 'ti-c5', english: "Betel nut, though controversial, is a traditional part of Taiwan's rural culture.", chinese: "檳榔雖然有爭議，但卻是台灣農村文化的傳統部分。" },
          { id: 'ti-c6', english: "Taiwan has a vibrant contemporary art scene in addition to its rich traditions.", chinese: "除了豐富的傳統之外，台灣還有充滿活力的當代藝術場景。" }
        ]
      }
    ]
  },
  {
    id: 'taiwan-knowledge',
    name: 'Taiwan Knowledge',
    nameZh: '台灣知識系列',
    icon: '📚',
    color: '#A855F7',
    colorLight: '#FAF5FF',
    scenes: [
      {
        id: 'tk-geography',
        title: 'Geography & Nature',
        titleZh: '地理與自然',
        chunks: [
          { id: 'tk-g1', english: "Taiwan is a mountainous island located in East Asia, in the western Pacific Ocean.", chinese: "台灣是位於東亞、西太平洋的多山島嶼。" },
          { id: 'tk-g2', english: "Taiwan has over one hundred peaks exceeding three thousand meters in elevation.", chinese: "台灣有超過一百座海拔超過三千米的山峰。" },
          { id: 'tk-g3', english: "The island experiences a subtropical climate with typhoon season from June to October.", chinese: "該島氣候為亞熱帶氣候，颱風季節為六月至十月。" },
          { id: 'tk-g4', english: "Taiwan Strait separates Taiwan from mainland China by about 180 kilometers.", chinese: "台灣海峽將台灣與中國大陸相隔約180公里。" },
          { id: 'tk-g5', english: "Taiwan has incredible biodiversity, including many species found nowhere else on Earth.", chinese: "台灣擁有令人難以置信的生物多樣性，包括許多地球上其他地方找不到的物種。" },
          { id: 'tk-g6', english: "The East Rift Valley is one of Taiwan's most scenic and geologically active regions.", chinese: "花東縱谷是台灣最美麗、地質最活躍的地區之一。" }
        ]
      },
      {
        id: 'tk-history',
        title: 'History & Society',
        titleZh: '歷史與社會',
        chunks: [
          { id: 'tk-h1', english: "Taiwan has been inhabited for thousands of years by Austronesian indigenous peoples.", chinese: "台灣已有數千年的歷史，由南島語系原住民居住。" },
          { id: 'tk-h2', english: "Taiwan was under Dutch colonial rule in the seventeenth century.", chinese: "台灣在十七世紀曾受荷蘭殖民統治。" },
          { id: 'tk-h3', english: "Taiwan transitioned to democracy in the 1990s and is now a vibrant democratic society.", chinese: "台灣在1990年代轉型為民主，現在是一個充滿活力的民主社會。" },
          { id: 'tk-h4', english: "There are sixteen officially recognized indigenous groups in Taiwan, each with unique cultures.", chinese: "台灣有十六個官方認定的原住民族，每個都有獨特的文化。" },
          { id: 'tk-h5', english: "Taiwan has one of the highest literacy rates in the world, exceeding ninety-eight percent.", chinese: "台灣識字率是全球最高的之一，超過98%。" },
          { id: 'tk-h6', english: "Taiwan's healthcare system is frequently ranked among the best in the world.", chinese: "台灣的醫療保健系統常被評為全球最佳之一。" }
        ]
      },
      {
        id: 'tk-economy',
        title: 'Economy & Technology',
        titleZh: '經濟與科技',
        chunks: [
          { id: 'tk-e1', english: "Taiwan is often called the 'Silicon Island' because of its dominant semiconductor industry.", chinese: "台灣常被稱為「矽島」，因為其半導體產業舉足輕重。" },
          { id: 'tk-e2', english: "TSMC, founded in Taiwan, is the world's largest contract chip manufacturer.", chinese: "台積電在台灣創立，是全球最大的晶圓代工廠。" },
          { id: 'tk-e3', english: "Taiwan produces a significant portion of the world's advanced semiconductors.", chinese: "台灣生產了全球相當大比例的先進半導體。" },
          { id: 'tk-e4', english: "Taiwan is also a global leader in the production of computer hardware and electronics.", chinese: "台灣也是電腦硬體和電子產品生產的全球領導者。" },
          { id: 'tk-e5', english: "Despite its small size, Taiwan has the twenty-first largest economy in the world.", chinese: "儘管面積小，台灣擁有全球第二十一大的經濟體。" },
          { id: 'tk-e6', english: "Taiwan's Hsinchu Science Park is often compared to Silicon Valley in California.", chinese: "台灣的新竹科學園區常被比作加州的矽谷。" }
        ]
      },
      {
        id: 'tk-festivals',
        title: 'Festivals & Traditions',
        titleZh: '節日與傳統',
        chunks: [
          { id: 'tk-f1', english: "The Lunar New Year is the most important holiday in Taiwan, lasting fifteen days.", chinese: "農曆新年是台灣最重要的節日，持續十五天。" },
          { id: 'tk-f2', english: "The Pingxi Sky Lantern Festival is a magical tradition where thousands of lanterns are released.", chinese: "平溪天燈節是一個神奇的傳統，在那裡數千個燈籠被放飛。" },
          { id: 'tk-f3', english: "Ghost Month, the seventh lunar month, is when Taiwanese people honor their ancestors.", chinese: "鬼月，農曆七月，是台灣人祭祀祖先的時候。" },
          { id: 'tk-f4', english: "The Yanshui Beehive Fireworks Festival is one of the world's most dangerous festivals.", chinese: "鹽水蜂炮節是世界上最危險的節日之一。" },
          { id: 'tk-f5', english: "Taiwan's indigenous tribes have preserved their traditional ceremonies and dances.", chinese: "台灣的原住民部落保留了他們的傳統儀式和舞蹈。" },
          { id: 'tk-f6', english: "Worship at local temples is a central part of everyday spiritual life in Taiwan.", chinese: "在地方寺廟祭拜是台灣日常精神生活的核心部分。" }
        ]
      }
    ]
  }
];

// ============================================================
// VOCABULARY
// ============================================================
const VOCABULARY = {
  'job-interview': [
    { id: 'ji-v1', english: 'resume', chinese: '履歷', pos: 'n.', example: "Please send your resume before the interview.", exampleZh: "請在面試前寄送您的履歷。" },
    { id: 'ji-v2', english: 'candidate', chinese: '候選人', pos: 'n.', example: "She is the strongest candidate for the position.", exampleZh: "她是這個職位最強的候選人。" },
    { id: 'ji-v3', english: 'qualification', chinese: '資格/資歷', pos: 'n.', example: "His qualifications match what we are looking for.", exampleZh: "他的資歷符合我們的要求。" },
    { id: 'ji-v4', english: 'negotiate', chinese: '協商/談判', pos: 'v.', example: "We need to negotiate the salary before making an offer.", exampleZh: "我們需要在提出錄用前協商薪資。" },
    { id: 'ji-v5', english: 'achievement', chinese: '成就/成績', pos: 'n.', example: "Her greatest achievement was leading the international project.", exampleZh: "她最大的成就是領導了國際專案。" },
    { id: 'ji-v6', english: 'deadline', chinese: '截止日期', pos: 'n.', example: "We must finish the project before the deadline.", exampleZh: "我們必須在截止日期前完成專案。" },
    { id: 'ji-v7', english: 'responsible', chinese: '負責任的', pos: 'adj.', example: "She is responsible for managing the entire team.", exampleZh: "她負責管理整個團隊。" },
    { id: 'ji-v8', english: 'promotion', chinese: '升職', pos: 'n.', example: "He received a promotion after exceeding his sales targets.", exampleZh: "在超越銷售目標後，他獲得了升職。" },
    { id: 'ji-v9', english: 'collaborate', chinese: '合作', pos: 'v.', example: "We need to collaborate with the marketing team on this.", exampleZh: "我們需要就此與市場部門合作。" },
    { id: 'ji-v10', english: 'proficient', chinese: '熟練的', pos: 'adj.', example: "She is proficient in three programming languages.", exampleZh: "她精通三種程式語言。" },
    { id: 'ji-v11', english: 'initiative', chinese: '主動性/提案', pos: 'n.', example: "He showed great initiative by starting the project early.", exampleZh: "他提前開始專案，表現出極大的主動性。" },
    { id: 'ji-v12', english: 'dedicated', chinese: '投入的/專注的', pos: 'adj.', example: "She is a dedicated employee who always goes the extra mile.", exampleZh: "她是一位總是盡力而為的敬業員工。" },
    { id: 'ji-v13', english: 'flexible', chinese: '靈活的', pos: 'adj.', example: "We are flexible regarding the start date.", exampleZh: "我們對開始日期很靈活。" },
    { id: 'ji-v14', english: 'reference', chinese: '推薦人/參考資料', pos: 'n.', example: "Please provide three professional references.", exampleZh: "請提供三位專業推薦人。" },
    { id: 'ji-v15', english: 'performance', chinese: '表現/績效', pos: 'n.', example: "His annual performance review was excellent.", exampleZh: "他的年度績效考核非常優秀。" },
    { id: 'ji-v16', english: 'efficient', chinese: '有效率的', pos: 'adj.', example: "She is very efficient and completes tasks quickly.", exampleZh: "她非常有效率，能快速完成任務。" },
    { id: 'ji-v17', english: 'leadership', chinese: '領導力', pos: 'n.', example: "Good leadership is essential for a successful team.", exampleZh: "良好的領導力對成功的團隊至關重要。" },
    { id: 'ji-v18', english: 'opportunity', chinese: '機會', pos: 'n.', example: "This is a great opportunity for career growth.", exampleZh: "這是職業發展的好機會。" },
    { id: 'ji-v19', english: 'compensation', chinese: '薪酬/補償', pos: 'n.', example: "The compensation package includes health insurance.", exampleZh: "薪酬方案包括健康保險。" },
    { id: 'ji-v20', english: 'strategic', chinese: '戰略性的', pos: 'adj.', example: "We need strategic thinking to solve this problem.", exampleZh: "我們需要戰略性思維來解決這個問題。" },
    { id: 'ji-v21', english: 'motivated', chinese: '有幹勁的', pos: 'adj.', example: "She is highly motivated to succeed in her career.", exampleZh: "她有強烈的動力在職業上取得成功。" },
    { id: 'ji-v22', english: 'adaptable', chinese: '適應力強的', pos: 'adj.', example: "Adaptable employees thrive in changing environments.", exampleZh: "適應力強的員工在多變的環境中茁壯成長。" },
    { id: 'ji-v23', english: 'mentorship', chinese: '指導/輔導', pos: 'n.', example: "Good mentorship can accelerate career development.", exampleZh: "良好的指導可以加速職業發展。" },
    { id: 'ji-v24', english: 'accountability', chinese: '責任感', pos: 'n.', example: "Accountability is important in any professional setting.", exampleZh: "在任何專業環境中，責任感都很重要。" },
    { id: 'ji-v25', english: 'expertise', chinese: '專業知識', pos: 'n.', example: "Her expertise in data analysis is unmatched.", exampleZh: "她在數據分析方面的專業知識無與倫比。" },
    { id: 'ji-v26', english: 'innovative', chinese: '創新的', pos: 'adj.', example: "The company values innovative thinking.", exampleZh: "公司重視創新思維。" },
    { id: 'ji-v27', english: 'feedback', chinese: '回饋意見', pos: 'n.', example: "Constructive feedback helps employees improve.", exampleZh: "建設性的回饋有助於員工進步。" },
    { id: 'ji-v28', english: 'workforce', chinese: '勞動力/員工', pos: 'n.', example: "The company is expanding its global workforce.", exampleZh: "公司正在擴大其全球員工隊伍。" },
    { id: 'ji-v29', english: 'objective', chinese: '目標/客觀的', pos: 'n./adj.', example: "Our main objective is to increase market share.", exampleZh: "我們的主要目標是增加市場份額。" },
    { id: 'ji-v30', english: 'persevere', chinese: '堅持不懈', pos: 'v.', example: "You must persevere through challenges to succeed.", exampleZh: "你必須堅持不懈地克服挑戰才能成功。" }
  ],
  'daily-life': [
    { id: 'dl-v1', english: 'grocery', chinese: '食品雜貨', pos: 'n.', example: "I need to pick up some groceries on the way home.", exampleZh: "我需要在回家的路上買些食品雜貨。" },
    { id: 'dl-v2', english: 'receipt', chinese: '收據', pos: 'n.', example: "Keep your receipt in case you need to make a return.", exampleZh: "如果需要退貨，請保留您的收據。" },
    { id: 'dl-v3', english: 'reservation', chinese: '預訂', pos: 'n.', example: "I made a reservation at the restaurant for seven o'clock.", exampleZh: "我在餐廳預訂了七點的位置。" },
    { id: 'dl-v4', english: 'commute', chinese: '通勤', pos: 'v./n.', example: "My daily commute takes about forty minutes by subway.", exampleZh: "我每天坐地鐵通勤大約需要四十分鐘。" },
    { id: 'dl-v5', english: 'routine', chinese: '日常慣例', pos: 'n.', example: "She has a strict morning routine she never breaks.", exampleZh: "她有一個她從不打破的嚴格早晨慣例。" },
    { id: 'dl-v6', english: 'appointment', chinese: '預約/約會', pos: 'n.', example: "I have a doctor's appointment this afternoon.", exampleZh: "我今天下午有預約看醫生。" },
    { id: 'dl-v7', english: 'neighborhood', chinese: '鄰里/社區', pos: 'n.', example: "Our neighborhood is very safe and quiet.", exampleZh: "我們的社區非常安全和安靜。" },
    { id: 'dl-v8', english: 'discount', chinese: '折扣', pos: 'n.', example: "Students get a ten percent discount at this store.", exampleZh: "學生在這家店可以享有10%的折扣。" },
    { id: 'dl-v9', english: 'forecast', chinese: '天氣預報/預測', pos: 'n.', example: "The weather forecast says it will rain tomorrow.", exampleZh: "天氣預報說明天會下雨。" },
    { id: 'dl-v10', english: 'errand', chinese: '差事/跑腿', pos: 'n.', example: "I have to run a few errands before I meet you.", exampleZh: "在見你之前，我需要辦幾件差事。" },
    { id: 'dl-v11', english: 'landlord', chinese: '房東', pos: 'n.', example: "The landlord finally fixed the leaking pipe.", exampleZh: "房東終於修好了漏水的管道。" },
    { id: 'dl-v12', english: 'subscription', chinese: '訂閱', pos: 'n.', example: "I cancelled my magazine subscription last month.", exampleZh: "我上個月取消了我的雜誌訂閱。" },
    { id: 'dl-v13', english: 'splurge', chinese: '揮霍/大肆消費', pos: 'v.', example: "I decided to splurge on a nice dinner for my birthday.", exampleZh: "我決定為我的生日豪吃一頓好飯。" },
    { id: 'dl-v14', english: 'negotiate', chinese: '協商', pos: 'v.', example: "We negotiated a lower price for the apartment.", exampleZh: "我們協商了更低的公寓租金。" },
    { id: 'dl-v15', english: 'overwhelmed', chinese: '不知所措的', pos: 'adj.', example: "I felt overwhelmed by the amount of work I had.", exampleZh: "我被工作量壓得喘不過氣來。" },
    { id: 'dl-v16', english: 'convenient', chinese: '方便的', pos: 'adj.', example: "It is convenient to have a supermarket nearby.", exampleZh: "附近有超市很方便。" },
    { id: 'dl-v17', english: 'affordable', chinese: '負擔得起的', pos: 'adj.', example: "The rent is very affordable for such a nice location.", exampleZh: "對於這麼好的地點，租金非常實惠。" },
    { id: 'dl-v18', english: 'hectic', chinese: '忙碌混亂的', pos: 'adj.', example: "My schedule this week has been absolutely hectic.", exampleZh: "我這週的行程絕對是忙碌混亂的。" },
    { id: 'dl-v19', english: 'socialize', chinese: '社交', pos: 'v.', example: "She loves to socialize with her coworkers after work.", exampleZh: "她喜歡下班後與同事社交。" },
    { id: 'dl-v20', english: 'exhausted', chinese: '精疲力竭的', pos: 'adj.', example: "I'm exhausted after working a double shift.", exampleZh: "連續工作了兩個班次後，我精疲力竭了。" },
    { id: 'dl-v21', english: 'spontaneous', chinese: '自發的/隨興的', pos: 'adj.', example: "Let's be spontaneous and take a road trip this weekend.", exampleZh: "讓我們隨興一點，這個週末去公路旅行吧。" },
    { id: 'dl-v22', english: 'budget', chinese: '預算', pos: 'n.', example: "I try to stick to my monthly grocery budget.", exampleZh: "我盡量堅守每月的食品雜貨預算。" },
    { id: 'dl-v23', english: 'relieved', chinese: '鬆了一口氣的', pos: 'adj.', example: "I was so relieved when I found my lost wallet.", exampleZh: "當我找到丟失的錢包時，我鬆了一口氣。" },
    { id: 'dl-v24', english: 'complain', chinese: '抱怨', pos: 'v.', example: "He often complains about the long commute to work.", exampleZh: "他經常抱怨上下班通勤時間長。" },
    { id: 'dl-v25', english: 'priority', chinese: '優先事項', pos: 'n.', example: "Family is my top priority in life.", exampleZh: "家庭是我生活中的最高優先事項。" },
    { id: 'dl-v26', english: 'maintain', chinese: '維持/保養', pos: 'v.', example: "It's important to maintain good relationships with neighbors.", exampleZh: "與鄰居保持良好關係很重要。" },
    { id: 'dl-v27', english: 'clutter', chinese: '雜亂', pos: 'n.', example: "I need to clear the clutter from my desk.", exampleZh: "我需要清理桌子上的雜亂。" },
    { id: 'dl-v28', english: 'leisure', chinese: '休閒', pos: 'n.', example: "I enjoy reading during my leisure time.", exampleZh: "我喜歡在休閒時間閱讀。" },
    { id: 'dl-v29', english: 'stroll', chinese: '漫步', pos: 'v./n.', example: "We took a leisurely stroll through the park.", exampleZh: "我們在公園裡悠閒地漫步。" },
    { id: 'dl-v30', english: 'milestone', chinese: '里程碑', pos: 'n.', example: "Graduating from college is an important milestone.", exampleZh: "大學畢業是一個重要的里程碑。" }
  ],
  'taiwan-intro': [
    { id: 'ti-v1', english: 'night market', chinese: '夜市', pos: 'n.', example: "The night market is the best place to experience Taiwanese street food.", exampleZh: "夜市是體驗台灣街頭食物的最佳場所。" },
    { id: 'ti-v2', english: 'hospitality', chinese: '熱情款待', pos: 'n.', example: "Taiwan is known for the hospitality of its people.", exampleZh: "台灣以其人民的熱情款待而聞名。" },
    { id: 'ti-v3', english: 'delicacy', chinese: '美食/珍饈', pos: 'n.', example: "Stinky tofu is considered a local delicacy.", exampleZh: "臭豆腐被認為是當地的美食。" },
    { id: 'ti-v4', english: 'temple', chinese: '寺廟', pos: 'n.', example: "There are thousands of temples across Taiwan.", exampleZh: "台灣各地有數千座寺廟。" },
    { id: 'ti-v5', english: 'souvenir', chinese: '紀念品', pos: 'n.', example: "Pineapple cake is a popular souvenir to bring home.", exampleZh: "鳳梨酥是受歡迎的伴手禮。" },
    { id: 'ti-v6', english: 'scenic', chinese: '風景優美的', pos: 'adj.', example: "Sun Moon Lake is one of Taiwan's most scenic spots.", exampleZh: "日月潭是台灣最美麗的景點之一。" },
    { id: 'ti-v7', english: 'authentic', chinese: '正宗的/地道的', pos: 'adj.', example: "This restaurant serves authentic Taiwanese cuisine.", exampleZh: "這家餐廳供應正宗的台灣菜。" },
    { id: 'ti-v8', english: 'iconic', chinese: '標誌性的', pos: 'adj.', example: "Taipei 101 is the iconic symbol of the city.", exampleZh: "台北101是這座城市的標誌性象徵。" },
    { id: 'ti-v9', english: 'bustling', chinese: '熙熙攘攘的', pos: 'adj.', example: "The night market is always bustling with activity.", exampleZh: "夜市總是熙熙攘攘、熱鬧非凡。" },
    { id: 'ti-v10', english: 'heritage', chinese: '文化遺產', pos: 'n.', example: "Taiwan has a rich cultural heritage to be proud of.", exampleZh: "台灣有豐富的文化遺產值得自豪。" },
    { id: 'ti-v11', english: 'lantern', chinese: '燈籠', pos: 'n.', example: "The sky was filled with glowing lanterns at the festival.", exampleZh: "節日期間天空充滿了發光的燈籠。" },
    { id: 'ti-v12', english: 'gorge', chinese: '峽谷', pos: 'n.', example: "The gorge carved by the river is absolutely breathtaking.", exampleZh: "河流雕鑿的峽谷令人嘆為觀止。" },
    { id: 'ti-v13', english: 'vibrant', chinese: '充滿活力的', pos: 'adj.', example: "Taiwan has a vibrant music and art scene.", exampleZh: "台灣有充滿活力的音樂和藝術場景。" },
    { id: 'ti-v14', english: 'indigenous', chinese: '原住民的', pos: 'adj.', example: "Taiwan's indigenous tribes have unique traditional ceremonies.", exampleZh: "台灣的原住民部落有獨特的傳統儀式。" },
    { id: 'ti-v15', english: 'subtropical', chinese: '亞熱帶的', pos: 'adj.', example: "Taiwan's subtropical climate makes it lush and green.", exampleZh: "台灣的亞熱帶氣候使其鬱鬱蔥蔥。" },
    { id: 'ti-v16', english: 'fragrant', chinese: '香氣撲鼻的', pos: 'adj.', example: "The fragrant smell of incense filled the temple.", exampleZh: "濃郁的香火味瀰漫整個寺廟。" },
    { id: 'ti-v17', english: 'mouthwatering', chinese: '令人垂涎的', pos: 'adj.', example: "The mouthwatering aroma from the food stall attracted a crowd.", exampleZh: "食物攤位散發出令人垂涎的香味吸引了人群。" },
    { id: 'ti-v18', english: 'pagoda', chinese: '寶塔', pos: 'n.', example: "The colorful pagoda stands at the entrance of the temple.", exampleZh: "色彩繽紛的寶塔矗立在寺廟入口處。" },
    { id: 'ti-v19', english: 'festivity', chinese: '節日慶典', pos: 'n.', example: "The Lunar New Year festivities last for fifteen days.", exampleZh: "農曆新年的節日慶典持續十五天。" },
    { id: 'ti-v20', english: 'breathtaking', chinese: '令人嘆為觀止的', pos: 'adj.', example: "The view from the mountain summit is breathtaking.", exampleZh: "從山頂俯瞰的景色令人嘆為觀止。" },
    { id: 'ti-v21', english: 'cuisine', chinese: '料理/菜餚', pos: 'n.', example: "Taiwanese cuisine blends Chinese, Japanese, and indigenous flavors.", exampleZh: "台灣料理融合了中式、日式和原住民風味。" },
    { id: 'ti-v22', english: 'artisan', chinese: '工匠', pos: 'n.', example: "Local artisans sell handmade crafts at the market.", exampleZh: "當地工匠在市場上出售手工藝品。" },
    { id: 'ti-v23', english: 'folklore', chinese: '民俗/民間傳說', pos: 'n.', example: "Taiwan has a rich tradition of folklore and legends.", exampleZh: "台灣有豐富的民俗和傳說傳統。" },
    { id: 'ti-v24', english: 'typhoon', chinese: '颱風', pos: 'n.', example: "Taiwan experiences several typhoons each year.", exampleZh: "台灣每年經歷幾個颱風。" },
    { id: 'ti-v25', english: 'pilgrimage', chinese: '朝聖/進香', pos: 'n.', example: "The annual pilgrimage to the temple draws millions of followers.", exampleZh: "每年到寺廟的進香活動吸引數百萬信徒。" }
  ],
  'taiwan-knowledge': [
    { id: 'tk-v1', english: 'semiconductor', chinese: '半導體', pos: 'n.', example: "Taiwan is a world leader in semiconductor manufacturing.", exampleZh: "台灣是半導體製造的世界領導者。" },
    { id: 'tk-v2', english: 'democracy', chinese: '民主', pos: 'n.', example: "Taiwan is a thriving democracy in East Asia.", exampleZh: "台灣是東亞的蓬勃民主國家。" },
    { id: 'tk-v3', english: 'biodiversity', chinese: '生物多樣性', pos: 'n.', example: "Taiwan's biodiversity is remarkable for such a small island.", exampleZh: "對於如此小的島嶼來說，台灣的生物多樣性是非凡的。" },
    { id: 'tk-v4', english: 'strait', chinese: '海峽', pos: 'n.', example: "Ships pass through the Taiwan Strait every day.", exampleZh: "船隻每天穿越台灣海峽。" },
    { id: 'tk-v5', english: 'literacy', chinese: '識字率/讀寫能力', pos: 'n.', example: "Taiwan has one of the highest literacy rates in Asia.", exampleZh: "台灣擁有亞洲最高的識字率之一。" },
    { id: 'tk-v6', english: 'geothermal', chinese: '地熱的', pos: 'adj.', example: "Beitou is known for its natural geothermal hot springs.", exampleZh: "北投以其天然地熱溫泉而聞名。" },
    { id: 'tk-v7', english: 'ecosystem', chinese: '生態系統', pos: 'n.', example: "Taiwan's mountain ecosystem is home to many rare species.", exampleZh: "台灣的山地生態系統是許多稀有物種的家園。" },
    { id: 'tk-v8', english: 'colonial', chinese: '殖民地的', pos: 'adj.', example: "Taiwan has colonial-era buildings left from the Japanese period.", exampleZh: "台灣留有日本時期的殖民時代建築。" },
    { id: 'tk-v9', english: 'sovereignty', chinese: '主權', pos: 'n.', example: "The question of sovereignty is a complex political issue.", exampleZh: "主權問題是一個複雜的政治問題。" },
    { id: 'tk-v10', english: 'infrastructure', chinese: '基礎設施', pos: 'n.', example: "Taiwan has invested heavily in transportation infrastructure.", exampleZh: "台灣在交通基礎設施上投入了大量資金。" },
    { id: 'tk-v11', english: 'innovation', chinese: '創新', pos: 'n.', example: "Taiwan's culture of innovation drives its tech industry.", exampleZh: "台灣的創新文化驅動其科技產業。" },
    { id: 'tk-v12', english: 'magnitude', chinese: '規模/震級', pos: 'n.', example: "Taiwan experienced a major earthquake of magnitude seven.", exampleZh: "台灣經歷了7級的重大地震。" },
    { id: 'tk-v13', english: 'plateau', chinese: '高原', pos: 'n.', example: "The Yushan plateau is home to alpine plants and animals.", exampleZh: "玉山高原是高山植物和動物的家園。" },
    { id: 'tk-v14', english: 'manufacture', chinese: '製造', pos: 'v./n.', example: "Taiwan manufactures a significant share of the world's chips.", exampleZh: "台灣製造了全球相當大份額的晶片。" },
    { id: 'tk-v15', english: 'treaty', chinese: '條約', pos: 'n.', example: "The treaty ended the conflict between the two sides.", exampleZh: "條約結束了雙方之間的衝突。" },
    { id: 'tk-v16', english: 'ancestor', chinese: '祖先', pos: 'n.', example: "During Ghost Month, people offer food to their ancestors.", exampleZh: "鬼月期間，人們向祖先供奉食物。" },
    { id: 'tk-v17', english: 'elevation', chinese: '海拔/高度', pos: 'n.', example: "Yushan stands at an elevation of nearly four thousand meters.", exampleZh: "玉山海拔近四千米。" },
    { id: 'tk-v18', english: 'ceremony', chinese: '儀式/典禮', pos: 'n.', example: "The indigenous tribe held a traditional harvest ceremony.", exampleZh: "原住民部落舉行了傳統豐收儀式。" },
    { id: 'tk-v19', english: 'renowned', chinese: '著名的', pos: 'adj.', example: "Taiwan is renowned for its advanced healthcare system.", exampleZh: "台灣以其先進的醫療保健系統而聞名。" },
    { id: 'tk-v20', english: 'coalition', chinese: '聯盟/聯合政府', pos: 'n.', example: "The political coalition formed after the election.", exampleZh: "選舉後成立了政治聯盟。" },
    { id: 'tk-v21', english: 'indigenous', chinese: '原住民的/本土的', pos: 'adj.', example: "Taiwan officially recognizes sixteen indigenous peoples.", exampleZh: "台灣官方承認十六個原住民族。" },
    { id: 'tk-v22', english: 'turbulent', chinese: '動盪的', pos: 'adj.', example: "Taiwan had a turbulent history in the twentieth century.", exampleZh: "台灣在二十世紀有著動盪的歷史。" },
    { id: 'tk-v23', english: 'surplus', chinese: '盈餘/剩餘', pos: 'n.', example: "Taiwan regularly runs a large trade surplus.", exampleZh: "台灣定期錄得大額貿易盈餘。" },
    { id: 'tk-v24', english: 'monsoon', chinese: '季風', pos: 'n.', example: "Taiwan's monsoon season brings heavy rainfall.", exampleZh: "台灣的季風季節帶來大量降雨。" },
    { id: 'tk-v25', english: 'expedition', chinese: '探險/遠征', pos: 'n.', example: "Many climbers go on expeditions to Taiwan's high peaks.", exampleZh: "許多登山者去台灣的高峰進行探險。" }
  ]
};
