export const supportedLocales = ["en", "zh-TW"] as const;
export type SiteLocale = (typeof supportedLocales)[number];
export const defaultLocale: SiteLocale = "en";

export type FeatureSlug =
  | "capture"
  | "voice"
  | "ai"
  | "donation"
  | "sync"
  | "widgets";
export const featureSlugs: FeatureSlug[] = [
  "capture",
  "voice",
  "ai",
  "donation",
  "sync",
  "widgets",
];

type NavCopy = {
  overview: string;
  features: string;
  pricing: string;
  about: string;
};

type AboutNavCopy = {
  overview: string;
  tos: string;
  pp: string;
  contact: string;
};

type CommonCopy = {
  appName: string;
  tagline: string;
  languageLabel: string;
  switchLanguageLabel: string;
  featureDetailEyebrow: string;
  aboutSectionEyebrow: string;
  backToFeaturesLabel: string;
  contactLabel: string;
  iosDownloadLabel: string;
  pricingSetupTitle: string;
  nav: NavCopy;
  aboutNav: AboutNavCopy;
  footerText: string;
  footerNote: string;
};

type KPI = {
  value: number;
  suffix: string;
  label: string;
};

type OverviewCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  quickBadges: string[];
  visualCards: {
    firstName: string;
    firstEta: string;
    secondName: string;
    secondEta: string;
    aiLabel: string;
    aiSub: string;
    donationLabel: string;
    donationSub: string;
    syncLabel: string;
    syncSub: string;
  };
  kpis: KPI[];
  howTitle: string;
  howIntro: string;
  steps: Array<{ title: string; description: string }>;
  galleryTitle: string;
  galleryIntro: string;
  gallery: Array<{
    imagePath: string;
    title: string;
    description: string;
    alt: string;
  }>;
};

type FeatureCardCopy = {
  slug: FeatureSlug;
  icon: string;
  title: string;
  summary: string;
  bullets: string[];
};

type FeaturesHubCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  exploreLabel: string;
  cards: FeatureCardCopy[];
};

type FeatureDetailCopy = {
  icon: string;
  title: string;
  summary: string;
  valuePropsTitle: string;
  valueProps: string[];
  flowTitle: string;
  flow: Array<{ title: string; description: string }>;
  integrationsTitle: string;
  integrations: string[];
  mediaTitle: string;
  mediaCaption: string;
  mediaAlt: string;
  imagePath: string;
};

type PricingPlanCopy = {
  name: string;
  price: string;
  billing: string;
  description: string;
  bullets: string[];
  cta: string;
  setupHint: string;
  highlighted?: boolean;
};

type PricingCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  plans: PricingPlanCopy[];
  note: string;
};

type GuideSection = {
  title: string;
  prompt: string;
};

type GuidePageCopy = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  sectionsTitle: string;
  sections: GuideSection[];
  note: string;
};

export const commonCopy: Record<SiteLocale, CommonCopy> = {
  en: {
    appName: "Food Ninja",
    tagline: "Track. Donate. Solve.",
    languageLabel: "EN",
    switchLanguageLabel: "Switch language",
    featureDetailEyebrow: "Feature Detail",
    aboutSectionEyebrow: "About Section",
    backToFeaturesLabel: "Back to Features",
    contactLabel: "Contact Us",
    iosDownloadLabel: "/images/download-en.svg",
    pricingSetupTitle: "Plan setup checklist",
    nav: {
      overview: "Overview",
      features: "Features",
      pricing: "Pricing",
      about: "About",
    },
    aboutNav: {
      overview: "About",
      tos: "Terms",
      pp: "Privacy",
      contact: "Contact",
    },
    footerText:
      "Food Ninja combines camera capture, voice logging, AI planning, and donation safety checks to reduce waste.",
    footerNote: "If your fridge had a COO, this would be it.",
  },
  "zh-TW": {
    appName: "Food Ninja",
    tagline: "隨手記，隨心捐，隨口問。",
    languageLabel: "繁中",
    switchLanguageLabel: "切換語言",
    featureDetailEyebrow: "功能細節",
    aboutSectionEyebrow: "關於專區",
    backToFeaturesLabel: "返回功能頁",
    contactLabel: "聯絡我們",
    iosDownloadLabel: "/images/download-zh-TW.svg",
    pricingSetupTitle: "方案設定清單",
    nav: {
      overview: "總覽",
      features: "功能",
      pricing: "定價",
      about: "關於",
    },
    aboutNav: {
      overview: "關於",
      tos: "條款",
      pp: "隱私",
      contact: "聯絡",
    },
    footerText: "Food Ninja 結合拍照辨識、語音記錄、AI 規劃與捐贈安全判斷，幫你有效減少浪費。",
    footerNote: "冰箱也值得一位專業管理師。",
  },
};

export const overviewCopy: Record<SiteLocale, OverviewCopy> = {
  en: {
    metaTitle: "Food Ninja Overview",
    metaDescription:
      "A static landing site for Food Ninja: capture expiry data, get AI recipes and meal plans, and donate safely.",
    eyebrow: "Built from your iOS app + server capabilities",
    title: "Your fridge just hired a ninja.",
    subtitle:
      "Snap or speak your food items, track expiry dates, and get AI-powered recipe, meal-plan, and donation guidance before food goes bad.",
    ctaPrimary: "Explore Features",
    ctaSecondary: "Contact Us",
    quickBadges: [
      "Camera + OCR",
      "Voice Logging",
      "AI Recipe Planner",
      "Donation Safety Matching",
      "Widget & Calendar Sync",
    ],
    visualCards: {
      firstName: "🥛 Milk",
      firstEta: "+1 day",
      secondName: "🥬 Spinach",
      secondEta: "+2 days",
      aiLabel: "🤖 AI",
      aiSub: "2 recipes ready",
      donationLabel: "🎯 Donate",
      donationSub: "safe matches found",
      syncLabel: "📅 Sync status",
      syncSub: "Google Calendar • Google Tasks • Apple Calendar • Apple Reminders",
    },
    kpis: [
      { value: 4, suffix: "", label: "capture modes" },
      { value: 3, suffix: "", label: "core features" },
      { value: 4, suffix: "", label: "sync targets (Google/Apple)" },
      { value: 9, suffix: "", label: "widget styles" },
    ],
    howTitle: "How Food Ninja Works",
    howIntro:
      "The workflow reflects your current app and backend behavior in `Food Ninja` + `fnserver`.",
    steps: [
      {
        title: "Capture food in seconds",
        description:
          "Use camera OCR plus classification hints, then optionally add a supplemental voice transcript for missing details.",
      },
      {
        title: "Prioritize expiry risk",
        description:
          "Records are sorted by urgency; reminders and widgets surface what should be cooked, donated, or used first.",
      },
      {
        title: "Take action with AI",
        description:
          "Chat generates recipes, meal plans, and donation-safe center matches from your records and context.",
      },
    ],
    galleryTitle: "Product Gallery",
    galleryIntro:
      "These visuals are now part of the production build. Replace them with your final renders when ready.",
    gallery: [
      // {
      //   imagePath: "/images/hero-mascot.svg",
      //   title: "Hero Scene",
      //   description: "Food Ninja mascot and dashboard-style kitchen command center.",
      //   alt: "Food Ninja mascot next to a smart fridge dashboard",
      // },
      {
        imagePath: "/images/RecordsView.png",
        title: "Records View",
        description: "Expiration-first list with urgency-aware organization.",
        alt: "Records screen showing food items and expiration dates",
      },
      {
        imagePath: "/images/AIAssistant.png",
        title: "AI Assistant",
        description: "Recipes and meal plans generated from your real inventory.",
        alt: "AI chat screen with recipe and meal plan cards",
      },
      {
        imagePath: "/images/DonationDatabase.png",
        title: "Donation Center Finder",
        description: "Map and list views with safety-based center matching.",
        alt: "Donation feature map with nearby accepted centers",
      },
    ],
  },
  "zh-TW": {
    metaTitle: "Food Ninja 總覽",
    metaDescription:
      "Food Ninja 靜態介紹網站：拍照或語音記錄食物、取得 AI 食譜與餐計畫、並進行安全捐贈判斷。",
    eyebrow: "根據你的 iOS App 與後端功能整理",
    title: "你的冰箱，現在有忍者管家。",
    subtitle:
      "用拍照或語音快速記錄食物，追蹤到期日，並在變質前獲得 AI 食譜、餐計畫與捐贈建議。",
    ctaPrimary: "查看功能",
    ctaSecondary: "聯絡我們",
    quickBadges: ["拍照 + OCR", "語音記錄", "AI 食譜規劃", "捐贈安全配對", "小工具與行事曆同步"],
    visualCards: {
      firstName: "🥛 牛奶",
      firstEta: "+1 天",
      secondName: "🥬 菠菜",
      secondEta: "+2 天",
      aiLabel: "🤖 AI",
      aiSub: "已準備 2 份食譜",
      donationLabel: "🎯 捐贈",
      donationSub: "已找到可行據點",
      syncLabel: "📅 同步狀態",
      syncSub: "Google 行事曆 • Google Tasks • Apple 行事曆 • Apple 提醒事項",
    },
    kpis: [
      { value: 4, suffix: "", label: "記錄模式" },
      { value: 3, suffix: "", label: "核心功能" },
      { value: 4, suffix: "", label: "同步目標（Google/Apple）" },
      { value: 9, suffix: "", label: "小工具樣式" },
    ],
    howTitle: "Food Ninja 的運作方式",
    howIntro: "以下流程對應你目前 `Food Ninja` 與 `fnserver` 的實際能力。",
    steps: [
      {
        title: "幾秒內完成記錄",
        description:
          "以相機 OCR + 影像辨識先抓關鍵資訊，再用補充語音補齊到期日、位置或備註。",
      },
      {
        title: "優先處理即將到期項目",
        description:
          "系統依急迫度排序，並透過提醒與小工具提示該先料理、先吃、或先捐贈的食物。",
      },
      {
        title: "用 AI 立即行動",
        description:
          "聊天功能可根據你的記錄生成食譜、餐計畫，並比對可捐贈據點與安全條件。",
      },
    ],
    galleryTitle: "產品畫面",
    galleryIntro: "這些視覺已納入正式版網站，可隨時替換為你最終輸出的素材。",
    gallery: [
      // {
      //   imagePath: "/images/hero-mascot.svg",
      //   title: "主視覺",
      //   description: "Food Ninja 吉祥物與冰箱管理儀表板場景。",
      //   alt: "Food Ninja 吉祥物與智慧冰箱介面",
      // },
      {
        imagePath: "/images/RecordsViewZh.png",
        title: "記錄頁",
        description: "依到期優先排序的食材清單。",
        alt: "食材記錄頁顯示到期日期與急迫度",
      },
      {
        imagePath: "/images/AIAssistantZh.png",
        title: "AI 對話頁",
        description: "根據食材清單產生食譜與餐計畫。",
        alt: "AI 對話頁顯示食譜與餐計畫卡片",
      },
      {
        imagePath: "/images/DonationDatabaseZh.png",
        title: "捐贈資料庫",
        description: "地圖與清單提供捐贈據點資料。",
        alt: "捐贈地圖顯示可捐贈據點",
      },
    ],
  },
};

export const pricingCopy: Record<SiteLocale, PricingCopy> = {
  en: {
    metaTitle: "Food Ninja Pricing",
    metaDescription:
      "Pricing page for Food Ninja with clear plan structure.",
    eyebrow: "Pricing",
    title: "Choose a plan that fits your kitchen.",
    subtitle:
      "Plan names and limits are wired for easy editing. Fill in exact pricing and quota values when ready.",
    plans: [
      {
        name: "Built-in Plan",
        price: "Free",
        billing: "/month",
        description: "The plan that comes with the app when downloaded.",
        bullets: [
          "Does not require any setup",
          "Access to basic record creation features",
          "Access to updated donation center database",
          "Access to widgets",
          "Access to sync features"
        ],
        cta: "Configure Plan 1",
        setupHint:
          "Edit this card in `src/lib/site-copy.ts` under `pricingCopy.en.plans[0]`.",
      },
      {
        name: "Freemium Plan",
        price: "Free",
        billing: "/month",
        description: "The free forever plan to try out our AI features.",
        bullets: [
          "Everything in Built-in",
          "Completely free to use with a Food Ninja account",
          "Access to limited monthly chat usage",
          "Access to limited monthly voice log and capture usage",
          "Basic models in AI chat"
        ],
        cta: "Configure Plan 1",
        setupHint:
          "Edit this card in `src/lib/site-copy.ts` under `pricingCopy.en.plans[0]`.",
      },
      {
        name: "Pantry Plan",
        price: "US$4.99",
        billing: "/month",
        description: "The recommended plan to access our AI features.",
        bullets: [
          "Everything in Built-in",
          "20x monthly chat usage compared to Freemium",
          "40x monthly voice log and capture usage compared to Freemium",
          "Same model as Freemium in AI chat but with search capability",
        ],
        cta: "Configure Plan 2",
        setupHint:
          "Edit this card in `src/lib/site-copy.ts` under `pricingCopy.en.plans[1]`.",
        highlighted: true,
      },
      {
        name: "Chef Plan",
        price: "US$15.99",
        billing: "/month",
        description: "Our best plan for power users who want to maximize their AI benefits.",
        bullets: [
          "Everything in Built-in",
          "100x monthly chat usage compared to Freemium",
          "Unlimited voice log and capture usage",
          "Access to advanced models in AI chat with search and reasoning capabilities",
        ],
        cta: "Configure Plan 3",
        setupHint:
          "Edit this card in `src/lib/site-copy.ts` under `pricingCopy.en.plans[2]`.",
      },
    ],
    note:
      "When your real plans are ready, keep exactly three cards and replace names, prices, limits, and CTA links.",
  },
  "zh-TW": {
    metaTitle: "Food Ninja 定價",
    metaDescription: "Food Ninja 定價頁，詳細的方案資訊。",
    eyebrow: "定價",
    title: "選擇最適合你的方案",
    subtitle:
      "目前先保留三種方案欄位，之後可直接填入正式價格與額度。",
    plans: [
      {
        name: "自帶方案",
        price: "免費",
        billing: "/月",
        description: "下載 App 自帶的方案。",
        bullets: [
          "無需任何額外設定",
          "基本紀錄創建功能",
          "最新捐贈據點資料庫",
          "小工具功能",
          "各種同步功能"
        ],
        cta: "設定方案一",
        setupHint:
          "Edit this card in `src/lib/site-copy.ts` under `pricingCopy.en.plans[0]`.",
      },
      {
        name: "免費方案",
        price: "免費",
        billing: "/月",
        description: "永遠免費的方案，讓您體驗我們的 AI 功能。",
        bullets: [
          "自帶方案的所有功能",
          "只要有 Food Ninja 帳號就都可免費使用",
          "可使用有限的每月聊天次數",
          "可使用有限的每月語音紀錄次數",
          "AI 聊天功能中使用基本 AI 模型"
        ],
        cta: "設定方案一",
        setupHint:
          "請在 `src/lib/site-copy.ts` 的 `pricingCopy[\"zh-TW\"].plans[0]` 修改。",
      },
      {
        name: "管家方案",
        price: "US$4.99",
        billing: "/月",
        description: "我們推薦的方案，讓您體驗更強大的 AI 功能。",
        bullets: [
          "自帶方案的所有功能",
          "相比免費方案20倍的每月 AI 聊天次數",
          "相比免費方案40倍的每月語音、拍照紀錄次數",
          "與免費方案相同的 AI 模型，但具備搜尋功能"
        ],
        cta: "設定方案二",
        setupHint:
          "請在 `src/lib/site-copy.ts` 的 `pricingCopy[\"zh-TW\"].plans[1]` 修改。",
        highlighted: true,
      },
      {
        name: "主廚方案",
        price: "US$15.99",
        billing: "/月",
        description: "高階方案占位，可替換為你的正式內容。",
        bullets: [
          "自帶方案的所有功能",
          "相比免費方案100倍的每月 AI 聊天次數", 
          "無限的語音、拍照紀錄次數", 
          "最進階的 AI 聊天模型，具備搜尋功能"
        ],
        cta: "設定方案三",
        setupHint:
          "請在 `src/lib/site-copy.ts` 的 `pricingCopy[\"zh-TW\"].plans[2]` 修改。",
      },
    ],
    note: "正式方案上線後，保留三張卡片並直接替換名稱、價格、額度與 CTA 連結。",
  },
};

export const featuresHubCopy: Record<SiteLocale, FeaturesHubCopy> = {
  en: {
    metaTitle: "Food Ninja Features",
    metaDescription:
      "Explore Food Ninja features: capture, voice log, AI planning, donation matching, sync, and widgets.",
    eyebrow: "Feature Pages",
    title: "Choose your ninja workflow",
    subtitle:
      "Each feature page maps to real capabilities from your app and backend.",
    exploreLabel: "Details",
    cards: [
      {
        slug: "capture",
        icon: "📸",
        title: "Smart Capture",
        summary:
          "Camera OCR + classification + voice follow-up to turn messy packaging data into structured food records.",
        bullets: [
          "Finds item names from image clues",
          "Extracts likely expiration date labels",
          "Marks incomplete fields for quick cleanup",
        ],
      },
      {
        slug: "voice",
        icon: "🎙️",
        title: "Voice Log",
        summary:
          "Speech-first capture flow that turns natural language into structured records with category, location, notes, and expiry.",
        bullets: [
          "Fast hands-free entry when unpacking groceries",
          "Supports supplemental transcript mode after camera capture",
          "Shares the same AI credit model as capture workflows",
        ],
      },
      {
        slug: "ai",
        icon: "🤖",
        title: "AI Chef & Planner",
        summary:
          "Chat assistant that generates recipes and meal plans from what you already have.",
        bullets: [
          "Supports recipe and meal-plan task modes",
          "Uses expiry context to prioritize soon-to-expire items",
          "Returns structured recipe/plan payloads",
        ],
      },
      {
        slug: "donation",
        icon: "🎯",
        title: "Donation Safety Match",
        summary:
          "Compares your item conditions with known center acceptance rules and highlights viable options.",
        bullets: [
          "Checks item suitability before recommending centers",
          "Includes distance and center details in responses",
          "Backed by periodic dataset refresh",
        ],
      },
      {
        slug: "sync",
        icon: "🔄",
        title: "Sync & Integrations",
        summary:
          "Push complete records to Google Calendar/Tasks and Apple Calendar/Reminders to keep expiry alerts in your daily tools.",
        bullets: [
          "Per-record sync with update/delete consistency",
          "Dedicated Food Ninja calendar/task list creation",
          "Works with authentication and token refresh flow",
        ],
      },
      {
        slug: "widgets",
        icon: "📱",
        title: "Widgets & Reminders",
        summary:
          "Home/lock-screen widgets and notification scheduling keep urgent items visible before they expire.",
        bullets: [
          "Widget snapshot reflects saved/wasted metrics",
          "Deep links jump directly into record views",
          "Notification timing is configurable per item",
        ],
      },
    ],
  },
  "zh-TW": {
    metaTitle: "Food Ninja 功能",
    metaDescription: "探索 Food Ninja 功能：拍照記錄、語音輸入、AI 規劃、捐贈配對、同步與小工具。",
    eyebrow: "功能頁面",
    title: "挑選你的忍者流程",
    subtitle: "每個功能頁都對應你目前 App 與後端中的實際能力。",
    exploreLabel: "了解更多",
    cards: [
      {
        slug: "capture",
        icon: "📸",
        title: "智慧記錄",
        summary: "結合拍照 OCR、影像辨識與補充語音，把包裝資訊整理成結構化食物紀錄。",
        bullets: ["從影像線索辨識品項名稱", "推估並擷取可能的到期標籤", "缺漏欄位會標記為待補資料"],
      },
      {
        slug: "voice",
        icon: "🎙️",
        title: "語音記錄",
        summary: "以語音為主的快速輸入流程，將自然語句轉為包含分類、位置、備註與到期日的紀錄。",
        bullets: [
          "整理食材時可免手打快速輸入",
          "支援拍照後補充語音內容",
          "與拍照流程共用 AI 點數機制",
        ],
      },
      {
        slug: "ai",
        icon: "🤖",
        title: "AI 料理與規劃",
        summary: "AI 對話助理可根據你現有食材，生成食譜與餐計畫。",
        bullets: [
          "支援食譜與餐計畫任務模式",
          "依到期資訊優先處理高風險食材",
          "回傳可直接渲染的結構化內容",
        ],
      },
      {
        slug: "donation",
        icon: "🎯",
        title: "捐贈安全配對",
        summary: "比對你的食材條件與據點規範，優先顯示可行的捐贈選項。",
        bullets: ["先檢查是否符合捐贈安全條件", "提供距離與據點資訊", "資料來源具週期性更新機制"],
      },
      {
        slug: "sync",
        icon: "🔄",
        title: "同步與整合",
        summary: "把完整記錄同步到 Google/Apple 的行事曆與提醒工具，讓到期管理進入日常流程。",
        bullets: [
          "單筆記錄支援新增/更新/刪除同步",
          "可自動建立 Food Ninja 專用清單與行事曆",
          "與登入授權及 token 更新流程整合",
        ],
      },
      {
        slug: "widgets",
        icon: "📱",
        title: "小工具與提醒",
        summary: "主畫面/鎖定畫面小工具加上通知排程，讓高風險食材不再被遺忘。",
        bullets: [
          "小工具快照顯示已拯救/浪費統計",
          "可透過 deep link 直接跳到記錄明細",
          "每項食材都可設定提醒時間",
        ],
      },
    ],
  },
};

export const featureDetailsCopy: Record<
  SiteLocale,
  Record<FeatureSlug, FeatureDetailCopy>
> = {
  en: {
    capture: {
      icon: "📸",
      title: "Smart Capture",
      summary:
        "Food Ninja combines image classification, OCR text, optional detected expiry date, and supplemental transcript into clean records.",
      valuePropsTitle: "Why it helps",
      valueProps: [
        "Reduces manual typing when logging groceries.",
        "Uses OCR date hints and normalizes flexible date formats.",
        "Keeps uncertain fields visible by marking incomplete items.",
      ],
      flowTitle: "Typical flow",
      flow: [
        {
          title: "1) Scan packaging",
          description:
            "Camera capture provides classification hints and OCR text to the backend capture endpoint.",
        },
        {
          title: "2) Add voice context",
          description:
            "Optional voice transcript fills missing details like location or notes.",
        },
        {
          title: "3) Confirm records",
          description:
            "Generated items are sanitized, tagged, and inserted into your expiry list.",
        },
      ],
      integrationsTitle: "Linked systems",
      integrations: ["Records tab", "Voice log credits", "Widget snapshot sync"],
      mediaTitle: "Feature Visual",
      mediaCaption:
        "Camera view plus OCR extraction turning a packaging label into structured record fields.",
      mediaAlt: "Smart capture camera workflow illustration",
      imagePath: "/images/Camera.png",
    },
    voice: {
      icon: "🎙️",
      title: "Voice Log",
      summary:
        "Voice Log captures natural speech and converts it into complete food records, including category, location, notes, and expiration context.",
      valuePropsTitle: "Why it helps",
      valueProps: [
        "Fast logging flow when your hands are full.",
        "Works as a standalone mode or as camera-capture follow-up.",
        "Uses structured backend parsing to avoid messy free-text records.",
      ],
      flowTitle: "Typical flow",
      flow: [
        {
          title: "1) Start recording",
          description:
            "Speech transcription captures item names and details in real time.",
        },
        {
          title: "2) Parse into fields",
          description:
            "Backend voice endpoint maps transcript into normalized record fields.",
        },
        {
          title: "3) Save and schedule",
          description:
            "Items are inserted into records with reminder-ready expiration metadata.",
        },
      ],
      integrationsTitle: "Linked systems",
      integrations: ["Voice log config", "Credits usage tracking", "Records tab insert flow"],
      mediaTitle: "Feature Visual",
      mediaCaption:
        "User's voice transcript conversion into item name, location, and expiration fields.",
      mediaAlt: "Voice log transcription workflow illustration",
      imagePath: "/images/VoiceLog.png",
    },
    ai: {
      icon: "🤖",
      title: "AI Chef & Planner",
      summary:
        "The chat layer supports task-specific modes for recipes, meal plans, and general food-waste guidance.",
      valuePropsTitle: "Why it helps",
      valueProps: [
        "Turns your existing records into practical next meals.",
        "Provides structured recipes with ingredients and steps.",
        "Supports compact multi-day planning with shopping notes.",
      ],
      flowTitle: "Typical flow",
      flow: [
        {
          title: "1) Choose task mode",
          description:
            "Prompt mode signals recipe, meal plan, donation safety, or general support.",
        },
        {
          title: "2) Attach context",
          description:
            "Records and optional center data are serialized and sent to the model prompt.",
        },
        {
          title: "3) Render structured output",
          description:
            "The app displays markdown text plus structured recipe/meal-plan cards.",
        },
      ],
      integrationsTitle: "Linked systems",
      integrations: ["Chat threads", "Credits/billing", "Record attachments"],
      mediaTitle: "Feature Visual",
      mediaCaption:
        "AI chat can generate both recipe cards and multi-day meal plans based on your request.",
      mediaAlt: "AI recipe and meal plan illustration",
      imagePath: "/images/AIChef&Planner.png",
    },
    donation: {
      icon: "🎯",
      title: "Donation Safety Match",
      summary:
        "Food Ninja cross-checks your food records against donation center constraints before recommending where to donate.",
      valuePropsTitle: "Why it helps",
      valueProps: [
        "Avoids suggesting centers that cannot accept your items.",
        "Considers expiration timing in donation suitability decisions.",
        "Surfaces map/list context for practical drop-off planning.",
      ],
      flowTitle: "Typical flow",
      flow: [
        {
          title: "1) Load center database",
          description:
            "The app refreshes center data on schedule and keeps local cache for fast browsing.",
        },
        {
          title: "2) Ask for donation check",
          description:
            "Donation task mode receives your records plus center details.",
        },
        {
          title: "3) Return safe matches",
          description:
            "AI response includes matched centers or explicitly returns no valid options.",
        },
      ],
      integrationsTitle: "Linked systems",
      integrations: ["Donate tab map/list", "Center JSON refresh", "Safety-first chat mode"],
      mediaTitle: "Feature Visual",
      mediaCaption:
        "Donation map and center card showing accepted items, open hours, and safety fit.",
      mediaAlt: "Donation safety matching illustration",
      imagePath: "/images/DonationCenterFinder.png",
    },
    sync: {
      icon: "🔄",
      title: "Sync & Integrations",
      summary:
        "Food Ninja syncs complete records into Google and Apple productivity surfaces so expiry tasks stay visible in your daily routine.",
      valuePropsTitle: "Why it helps",
      valueProps: [
        "Connects expiry reminders to calendars and task systems you already check.",
        "Supports update/delete parity to keep external data accurate.",
        "Lets users selectively enable each sync destination.",
      ],
      flowTitle: "Typical flow",
      flow: [
        {
          title: "1) Enable sync targets",
          description:
            "Users can toggle Google Calendar, Google Tasks, Apple Calendar, and Apple Reminders.",
        },
        {
          title: "2) Push record updates",
          description:
            "Each complete record is synced with create/update/delete handling.",
        },
        {
          title: "3) Recover missing targets",
          description:
            "If external objects are deleted, services recreate them as needed.",
        },
      ],
      integrationsTitle: "Linked systems",
      integrations: [
        "Google Calendar API",
        "Google Tasks API",
        "Apple EventKit calendar/reminders",
      ],
      mediaTitle: "Feature Visual",
      mediaCaption:
        "One record syncing across Google and Apple services for reminders and task visibility.",
      mediaAlt: "Sync integrations illustration",
      imagePath: "/images/Sync.png",
    },
    widgets: {
      icon: "📱",
      title: "Widgets & Reminders",
      summary:
        "Widget snapshots and scheduled notifications keep soon-to-expire items visible without opening the app.",
      valuePropsTitle: "Why it helps",
      valueProps: [
        "At-a-glance urgency view from lock screen/home screen widgets.",
        "Deep-link actions jump directly into records inside the app.",
        "Tracks saved vs. wasted counters for behavior feedback.",
      ],
      flowTitle: "Typical flow",
      flow: [
        {
          title: "1) Build snapshot",
          description:
            "Record data and saved/wasted stats are serialized into shared widget storage.",
        },
        {
          title: "2) Surface urgency",
          description:
            "Widget timeline sorts upcoming expirations and highlights near-term items.",
        },
        {
          title: "3) Trigger reminders",
          description:
            "Per-item notification schedules nudge users before expiry.",
        },
      ],
      integrationsTitle: "Linked systems",
      integrations: ["App Group shared data", "Deep-link routing", "UNUserNotificationCenter"],
      mediaTitle: "Feature Visual",
      mediaCaption:
        "Home and lock screen widget cards emphasizing urgent expirations with one-tap deep links.",
      mediaAlt: "Widgets and notifications illustration",
      imagePath: "/images/WidgetNotification.png",
    },
  },
  "zh-TW": {
    capture: {
      icon: "📸",
      title: "智慧記錄",
      summary:
        "Food Ninja 把影像分類、OCR、偵測到期日與補充語音整合成乾淨可用的食物紀錄。",
      valuePropsTitle: "核心價值",
      valueProps: [
        "大幅減少手動輸入的時間。",
        "使用 OCR 日期線索並做彈性日期正規化。",
        "不確定欄位會標記為未完成，方便後續補齊。",
      ],
      flowTitle: "典型流程",
      flow: [
        {
          title: "1）掃描包裝",
          description: "相機拍攝後，會將分類提示與 OCR 文字送往後端解析。",
        },
        {
          title: "2）補充語音",
          description: "可選擇補充語音，填入位置、備註等缺漏資訊。",
        },
        {
          title: "3）確認記錄",
          description: "生成結果會清理格式、套用標籤，並加入到期清單。",
        },
      ],
      integrationsTitle: "關聯系統",
      integrations: ["Records 清單", "語音點數機制", "小工具快照同步"],
      mediaTitle: "功能視覺",
      mediaCaption: "相機與 OCR 擷取流程，把包裝資訊整理成結構化欄位。",
      mediaAlt: "智慧拍照記錄流程示意圖",
      imagePath: "/images/CameraZh.png",
    },
    voice: {
      icon: "🎙️",
      title: "語音記錄",
      summary:
        "語音記錄可把自然語句轉成完整食材紀錄，包含分類、位置、備註與到期資訊。",
      valuePropsTitle: "核心價值",
      valueProps: [
        "雙手忙碌時也能快速輸入。",
        "可獨立使用，也可作為拍照後補充流程。",
        "後端會結構化解析，避免資料只停留在自由文字。",
      ],
      flowTitle: "典型流程",
      flow: [
        {
          title: "1）開始錄音",
          description: "語音轉文字即時擷取品項與關鍵資訊。",
        },
        {
          title: "2）欄位解析",
          description: "後端語音端點會把逐字稿映射成標準欄位。",
        },
        {
          title: "3）寫入與提醒",
          description: "整理後寫入 Records，並可直接套用提醒機制。",
        },
      ],
      integrationsTitle: "關聯系統",
      integrations: ["語音設定端點", "點數使用追蹤", "Records 寫入流程"],
      mediaTitle: "功能視覺",
      mediaCaption: "語音逐字稿會被轉成食材名稱、位置與到期欄位。",
      mediaAlt: "語音記錄轉結構化資料示意圖",
      imagePath: "/images/VoiceLogZh.png",
    },
    ai: {
      icon: "🤖",
      title: "AI 料理與規劃",
      summary: "聊天層支援食譜、餐計畫、捐贈安全與一般食物浪費建議等任務模式。",
      valuePropsTitle: "核心價值",
      valueProps: [
        "將現有食材快速轉成可執行的下一餐。",
        "輸出包含材料與步驟的結構化食譜。",
        "可生成多日餐計畫與採買備註。",
      ],
      flowTitle: "典型流程",
      flow: [
        {
          title: "1）選擇任務模式",
          description: "提示詞模式可指定為食譜、餐計畫、捐贈安全或一般模式。",
        },
        {
          title: "2）附加上下文",
          description: "系統會序列化食材紀錄與（可選）據點資料給模型。",
        },
        {
          title: "3）渲染結構化結果",
          description: "App 端同時顯示文字回覆與食譜/餐計畫卡片。",
        },
      ],
      integrationsTitle: "關聯系統",
      integrations: ["聊天執行緒", "點數/計費機制", "食材紀錄附件"],
      mediaTitle: "功能視覺",
      mediaCaption: "AI 對話可同時輸出食譜卡片與多日餐計畫。",
      mediaAlt: "AI 食譜與餐計畫示意圖",
      imagePath: "/images/AIChef&PlannerZh.png",
    },
    donation: {
      icon: "🎯",
      title: "捐贈安全配對",
      summary: "Food Ninja 會先比對食材條件與據點規範，再推薦可行的捐贈地點。",
      valuePropsTitle: "核心價值",
      valueProps: [
        "避免推薦不接受該品項的據點。",
        "把到期時間納入捐贈可行性判斷。",
        "結合地圖與清單資訊，實際安排更容易。",
      ],
      flowTitle: "典型流程",
      flow: [
        {
          title: "1）更新據點資料",
          description: "系統週期更新據點資料並保留本地快取，讀取快速。",
        },
        {
          title: "2）啟動捐贈安全查詢",
          description: "捐贈模式會收到食材記錄與據點資訊進行比對。",
        },
        {
          title: "3）回傳可捐贈結果",
          description: "若符合條件會列出據點；若不符合會明確說明無可行選項。",
        },
      ],
      integrationsTitle: "關聯系統",
      integrations: ["Donate 地圖/清單", "據點 JSON 更新機制", "安全優先聊天模式"],
      mediaTitle: "功能視覺",
      mediaCaption: "捐贈地圖與據點資訊卡同時顯示可收受條件與安全判斷。",
      mediaAlt: "捐贈安全配對示意圖",
      imagePath: "/images/DonationCenterFinderZh.png",
    },
    sync: {
      icon: "🔄",
      title: "同步與整合",
      summary:
        "Food Ninja 可把完整紀錄同步到 Google 與 Apple 工具，讓到期資訊進入你的日常排程。",
      valuePropsTitle: "核心價值",
      valueProps: [
        "把到期提醒帶進你本來就會查看的行事曆與待辦。",
        "支援新增、更新、刪除同步一致性。",
        "可依需求開啟或關閉各同步目標。",
      ],
      flowTitle: "典型流程",
      flow: [
        {
          title: "1）開啟同步目標",
          description: "可個別啟用 Google 行事曆、Google Tasks、Apple 行事曆、Apple 提醒事項。",
        },
        {
          title: "2）推送記錄更新",
          description: "每筆完整記錄都支援新增/更新/刪除同步。",
        },
        {
          title: "3）自動修復缺漏",
          description: "若外部項目被刪除，系統可重新建立。",
        },
      ],
      integrationsTitle: "關聯系統",
      integrations: ["Google Calendar API", "Google Tasks API", "Apple EventKit 行事曆/提醒"],
      mediaTitle: "功能視覺",
      mediaCaption: "同一筆食材記錄可同步到 Google 與 Apple 生態系。",
      mediaAlt: "同步整合示意圖",
      imagePath: "/images/SyncZh.png",
    },
    widgets: {
      icon: "📱",
      title: "小工具與提醒",
      summary:
        "透過主畫面/鎖定畫面小工具與通知排程，讓即將到期食材在不開 App 的情況下也能被看見。",
      valuePropsTitle: "核心價值",
      valueProps: [
        "鎖定畫面即可檢視到期急迫度。",
        "支援 deep link 點擊直達記錄頁。",
        "可追蹤已拯救與已浪費數量，形成行為回饋。",
      ],
      flowTitle: "典型流程",
      flow: [
        {
          title: "1）建立快照",
          description: "把食材與統計資料寫入共用儲存，供小工具使用。",
        },
        {
          title: "2）顯示急迫度",
          description: "小工具依到期日排序並突出高風險項目。",
        },
        {
          title: "3）提醒通知",
          description: "每筆食材可依設定時間在到期前推送提醒。",
        },
      ],
      integrationsTitle: "關聯系統",
      integrations: ["App Group 共用資料", "Deep Link 導航", "UNUserNotificationCenter"],
      mediaTitle: "功能視覺",
      mediaCaption: "小工具與通知會在不開 App 時持續提示高風險到期品項。",
      mediaAlt: "小工具與提醒示意圖",
      imagePath: "/images/WidgetNotificationZh.png",
    },
  },
};

export const guidePagesCopy: Record<
  SiteLocale,
  Record<"about" | "tos" | "pp" | "contact", GuidePageCopy>
> = {
  en: {
    about: {
      metaTitle: "About Food Ninja",
      metaDescription:
        "Mission, origin story, and team behind Food Ninja.",
      title: "About Food Ninja",
      intro:
        "Food Ninja is a school project focused on reducing household food waste through practical daily tools.",
      sectionsTitle: "Project Story",
      sections: [
        {
          title: "Mission",
          prompt:
            "Food Ninja exists to reduce food waste starting from each household. The app focuses on the real kitchen workflow: capture what you bought, remember what expires first, and take action early with reminders, recipes, and donation-safe options.",
        },
        {
          title: "Origin Story",
          prompt:
            "This started as a school project while learning how large the food-waste problem is. A recurring household pattern drove the build: food gets bought, placed in a cabinet or fridge, forgotten, then discovered only after expiration and thrown away.",
        },
        {
          title: "Team",
          prompt:
            "Developer: Albert Huang. The project direction was shaped with support from his school project classmates, who proposed the original idea and his teacher, who guided the process. Also thanks his mom, who supported the project through development and iteration.",
        },
      ],
      note: "Food Ninja is still evolving from school project to production product, with the same mission at its core.",
    },
    tos: {
      metaTitle: "Terms of Service",
      metaDescription: "Terms of Service page for Food Ninja.",
      title: "Terms of Service",
      intro:
        "The newest official terms of service.",
      sectionsTitle: "Minimum sections you should include",
      sections: [
        {
          title: "Service scope",
          prompt:
            "Define what the app provides (food logging, AI suggestions, donation matching) and what it does not guarantee.",
        },
        {
          title: "Account and eligibility",
          prompt:
            "Set user age, account responsibility, and acceptable-use boundaries.",
        },
        {
          title: "AI disclaimer",
          prompt:
            "State that AI outputs are informational and users should verify food safety independently.",
        },
        {
          title: "Limitation of liability",
          prompt:
            "Add liability limits, warranty disclaimers, and dispute process/jurisdiction.",
        },
      ],
      note: "Current text is not legal advice and not legally sufficient as-is.",
    },
    pp: {
      metaTitle: "Privacy Policy",
      metaDescription: "Privacy Policy page for Food Ninja.",
      title: "Privacy Policy",
      intro:
        "The newest official privacy policy.",
      sectionsTitle: "Minimum sections you should include",
      sections: [
        {
          title: "Data collected",
          prompt:
            "List account data, food records, optional voice transcript, and any analytics identifiers.",
        },
        {
          title: "Purpose of processing",
          prompt:
            "Explain why each data type is used (sync, AI generation, service reliability).",
        },
        {
          title: "Third parties",
          prompt:
            "Name external providers (authentication, AI provider, hosting/database) and what data is shared.",
        },
        {
          title: "Retention and deletion",
          prompt:
            "Document retention windows and the user process to request deletion/export.",
        },
      ],
      note: "Include contact information for privacy requests and your governing law requirements.",
    },
    contact: {
      metaTitle: "Contact Food Ninja",
      metaDescription:
        "Food Ninja's contact information.",
      title: "Contact Us",
      intro:
        "We are grateful and welcome you to reach out to us, here is our contact information.",
      sectionsTitle: "Contact Policy",
      sections: [
        {
          title: "Support",
          prompt:
            "For general support, technical issues, or account-related questions, please email: support@food-ninja.com",
        },
        {
          title: "Privacy & Data",
          prompt:
            "For privacy questions or data-related requests, please email: privacy@food-ninja.com",
        },
        {
          title: "Legal",
          prompt:
            "For formal notices or legal matters, please email: legal@food-ninja.com",
        },
        {
          title: "Business Inquiries",
          prompt:
            "For partnership or business-related inquiries, please email: alberthuang@food-ninja.com",
        },
        {
          title: "Official Communication",
          prompt:
            "Food Ninja currently has no official social media channels. Email is our only official contact method.",
        },
      ],
      note: "If you add more channels later, keep this page as the single source of truth.",
    },
  },
  "zh-TW": {
    about: {
      metaTitle: "關於 Food Ninja",
      metaDescription: "Food Ninja 的使命、起源與團隊故事。",
      title: "關於 Food Ninja",
      intro: "Food Ninja 是一個從校園專題出發、聚焦家庭食物浪費問題的實作專案。",
      sectionsTitle: "專案故事",
      sections: [
        {
          title: "使命",
          prompt:
            "Food Ninja 的使命是從每一個家庭開始減少食物浪費。產品設計聚焦在真實生活流程：先把買回來的食材快速記錄、再用到期管理防止遺忘、最後用食譜與捐贈建議把浪費降到最低。",
        },
        {
          title: "起源故事",
          prompt:
            "這是一個學校專題。課堂學習中發現食物浪費是很大的社會問題，於是開始打造 Food Ninja。家庭常見情境是：買了食物放進櫃子或冰箱，過一陣子忘記，最後過期只能整批丟掉。",
        },
        {
          title: "團隊",
          prompt:
            "開發者是黃聿辰。專題方向由學校分組專案的同組同學提出並由老師在過程中持續指導；同時也有媽媽在整個開發歷程中的支持與協助，讓這個校園專案能逐步走向可用產品。",
        },
      ],
      note: "Food Ninja 目前仍在持續迭代，但核心目標始終是讓家庭更容易避免食物浪費。",
    },
    tos: {
      metaTitle: "服務條款",
      metaDescription: "Food Ninja 服務條款。",
      title: "服務條款",
      intro: "官方最新的服務條款。",
      sectionsTitle: "至少應包含的章節",
      sections: [
        {
          title: "服務範圍",
          prompt: "定義 App 提供內容（記錄、AI 建議、捐贈比對）與不保證項目。",
        },
        {
          title: "帳號與使用資格",
          prompt: "設定年齡限制、帳號責任與可接受使用規範。",
        },
        {
          title: "AI 免責聲明",
          prompt: "說明 AI 回覆僅供參考，食安判斷仍需使用者自行確認。",
        },
        {
          title: "責任限制",
          prompt: "補上責任限制、保固排除、爭議處理與管轄條款。",
        },
      ],
      note: "目前內容不構成法律意見，也不足以直接作為正式條款。",
    },
    pp: {
      metaTitle: "隱私政策",
      metaDescription: "Food Ninja 隱私政策。",
      title: "隱私政策",
      intro: "官方最新的隱私政策。",
      sectionsTitle: "至少應包含的章節",
      sections: [
        {
          title: "蒐集資料類型",
          prompt: "列出帳號資料、食材記錄、可選語音逐字稿與分析識別資訊。",
        },
        {
          title: "使用目的",
          prompt: "說明每一種資料如何用於同步、AI 生成與服務穩定性。",
        },
        {
          title: "第三方服務",
          prompt: "列出登入、AI、主機與資料庫供應商，以及共享資料範圍。",
        },
        {
          title: "保存與刪除",
          prompt: "定義保存期限，以及使用者申請刪除/匯出的流程。",
        },
      ],
      note: "請補上隱私申訴聯絡方式，並符合你適用法域的規範。",
    },
    contact: {
      metaTitle: "聯絡 Food Ninja",
      metaDescription: "Food Ninja 的聯絡資訊頁面.",
      title: "聯絡我們",
      intro: "我們非常歡迎您聯繫我們，以下是我們的聯絡資訊。",
      sectionsTitle: "聯絡政策",
      sections: [
        {
          title: "客服支援",
          prompt:
            "一般客服問題、技術問題或帳號相關協助，請寄信至：support@food-ninja.com",
        },
        {
          title: "隱私與資料",
          prompt:
            "隱私問題或個人資料相關申請，請寄信至：privacy@food-ninja.com",
        },
        {
          title: "法律事項",
          prompt:
            "正式通知或法律相關事項，請寄信至：legal@food-ninja.com",
        },
        {
          title: "商務合作",
          prompt:
            "合作或其他商務相關詢問，請寄信至：alberthuang@food-ninja.com",
        },
        {
          title: "官方聯絡方式",
          prompt:
            "Food Ninja 目前沒有任何官方社群平台，電子郵件為唯一正式聯絡方式。",
        },
      ],
      note: "若未來新增更多聯絡管道，請以此頁作為唯一官方資訊來源。",
    },
  },
};

export function localePath(locale: SiteLocale, route = ""): string {
  const trimmed = route.replace(/^\/+|\/+$/g, "");
  return trimmed.length > 0 ? `/${locale}/${trimmed}/` : `/${locale}/`;
}

export function switchLocaleInPath(pathname: string, target: SiteLocale): string {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const matcher = /^\/(en|zh-TW)(?=\/|$)/;
  if (matcher.test(normalized)) {
    return normalized.replace(matcher, `/${target}`);
  }
  return localePath(target);
}
