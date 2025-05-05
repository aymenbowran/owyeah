const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "2204",
  passcodeTitle: "Passcode invoeren",
  successMessage: "Owyeahh",
  redirectMessage: "Doorverwijzen...",
  incorrectPasscodeMessage: "Verkeerde wachtwoordcode, hint: onze anniversary!",
  cancelButtonText: "Annuleren",

  // 🔍 Question Page
  searchPlaceholder: "Zoek op Google of typ een URL",
  trendingTitle: "Trending zoekopdrachten",
  trendingSearches: [
    "Is Duman even nonchalant als Aybuke?",
    "Brainrot TikTok Foryou Page",
    `TheWeeknd Europe Tour 2026`,
  ],
  proTip: 'Trending: Hoelang zijn we al samen?" ;)',

  // ⏳ Timer Page
  anniversaryDate: "2025-04-22",
  timerTitle: "We zijn al samen voor:",
  timerMessage: "... en nog steeds aan het tellen 🐈",
  timeUnits: {
    days: "Dagen",
    hours: "Uren",
    minutes: "Minuten",
    seconds: "Seconden",
  },

  // 📸 Recap Page
  recapTitle: "Laten we onze tijd samen samenvatten",
  clickMeText: "Klik op mij!",

  recapSections: [
    { label: "Pictures", path: "/recap/pictures", icon: "Image" },
    { label: "Music", path: "/recap/music", icon: "Music" },
  ],

  // 🎵 Music Page
  musicTitle: "Liedjes die me aan jou laat denken",
  musicGallery: [
    {
      title: "The Party & The After Party",
      artist: "The Weeknd",
      left: "5%",
      top: "5%",
    },
    {
      title: "Lost in the Fire",
      artist: "Gesaffelstein, The Weeknd",
      left: "40%",
      top: "15%",
    },
    {
      title: "Banshee",
      artist: "FloyyMenor, J Balvin",
      left: "15%",
      top: "40%",
    },
    {
      title: "Say It",
      artist: "Tory Lanez",
      left: "30%",
      top: "75%",
    },
    {
      title: "Sao Paulo",
      artist: "The Weeknd, Anitta",
      left: "5%",
      top: "65%",
    },
    {
      title: "House of Balloons / Glass Table Girls",
      artist: "The Weeknd",
      left: "25%",
      top: "90%",
    },
    {
      title: "Biliyorsun",
      artist: "Sezen Aksu",
      left: "35%",
      top: "50%",
    },
    {
      title: "Cry For Me",
      artist: "The Weeknd",
      left: "10%",
      top: "25%",
    },
  ],

  // 📸 Picture Recap Page
  pictureTitle: "Onze herinneringen",
  pictureGallery: [
    { title: "15 April 2025", description: "Eerste bloemen, na zoveel uitstel 🌸" },
    { title: "22 April 2025", description: "It's official ;)" },
  ],

  // 💌 Love Letter Page
  loveLetterMessage: "Seni istiyorum, sadece seni. Kalbimde ve hayatımda başka kimseye yer yok.",

  // 🎇 Closing Page
  closingMessage: "Hopelijk nog meer te komen, i love youuu",

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  redirectPath: "/question",
  timerRedirectPath: "/timer",
  questionRedirectPath: "/question",
  recapRedirectPath: "/recap",
  recapPreviousPage: "/timer",
  recapNextPage: "/letter",
  letterNextPage: "/closing",
  letterPreviousPage: "/letter",
  previousPageText: "Vorige Pagina",
  nextPageText: "Volgende Pagine",

  correctSearchQueries: [
    "Hoelang zijn we al samen?",
    "hoelang zijn we al samen?",
  ],
};

export default config;
