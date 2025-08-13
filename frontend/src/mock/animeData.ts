// Dummy data for different categories

export const watching = [
  { id: 1, title: "Attack on Titan", imageUrl: "https://cdn.myanimelist.net/images/anime/10/47347.jpg" },
  { id: 2, title: "One Piece", imageUrl: "https://cdn.myanimelist.net/images/anime/6/73245.jpg" },
  { id: 3, title: "Fullmetal Alchemist: Brotherhood", imageUrl: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg" },
  { id: 4, title: "Demon Slayer", imageUrl: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg" },
  { id: 5, title: "My Hero Academia", imageUrl: "https://cdn.myanimelist.net/images/anime/10/78745.jpg" },
  { id: 6, title: "Jujutsu Kaisen", imageUrl: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg" },
  { id: 7, title: "Haikyuu!!", imageUrl: "https://cdn.myanimelist.net/images/anime/7/76014.jpg" },
  { id: 8, title: "Hunter x Hunter", imageUrl: "https://cdn.myanimelist.net/images/anime/11/39717.jpg" },
  { id: 9, title: "Code Geass", imageUrl: "https://cdn.myanimelist.net/images/anime/5/50331.jpg" },
  { id: 10, title: "Steins;Gate", imageUrl: "https://cdn.myanimelist.net/images/anime/5/73199.jpg" },
  { id: 11, title: "Death Note", imageUrl: "https://cdn.myanimelist.net/images/anime/9/9453.jpg" },
  { id: 12, title: "Mob Psycho 100", imageUrl: "https://cdn.myanimelist.net/images/anime/8/80356.jpg" },
  { id: 13, title: "Tokyo Revengers", imageUrl: "https://cdn.myanimelist.net/images/anime/1805/121534.jpg" },
  { id: 14, title: "Black Clover", imageUrl: "https://cdn.myanimelist.net/images/anime/2/88336.jpg" },
  { id: 15, title: "Blue Lock", imageUrl: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg" }
];

export const planToWatch = [
  { id: 16, title: "Naruto", imageUrl: "https://cdn.myanimelist.net/images/anime/13/17405.jpg" },
  { id: 17, title: "Boruto", imageUrl: "https://cdn.myanimelist.net/images/anime/1806/126220.jpg" },
  { id: 18, title: "One Punch Man", imageUrl: "https://cdn.myanimelist.net/images/anime/12/76049.jpg" },
  { id: 19, title: "Chainsaw Man", imageUrl: "https://cdn.myanimelist.net/images/anime/1806/126227.jpg" },
  { id: 20, title: "Overlord", imageUrl: "https://cdn.myanimelist.net/images/anime/1448/120036.jpg" },
  { id: 21, title: "Re:Zero", imageUrl: "https://cdn.myanimelist.net/images/anime/11/79410.jpg" },
  { id: 22, title: "No Game No Life", imageUrl: "https://cdn.myanimelist.net/images/anime/5/65187.jpg" },
  { id: 23, title: "Sword Art Online", imageUrl: "https://cdn.myanimelist.net/images/anime/11/39717.jpg" },
  { id: 24, title: "Vivy: Fluorite Eye's Song", imageUrl: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg" },
  { id: 25, title: "Great Teacher Onizuka", imageUrl: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg" },
  { id: 26, title: "Erased", imageUrl: "https://cdn.myanimelist.net/images/anime/8/77966.jpg" },
  { id: 27, title: "The Rising of the Shield Hero", imageUrl: "https://cdn.myanimelist.net/images/anime/1613/102576.jpg" },
  { id: 28, title: "Spy x Family", imageUrl: "https://cdn.myanimelist.net/images/anime/1806/126221.jpg" },
  { id: 29, title: "KonoSuba", imageUrl: "https://cdn.myanimelist.net/images/anime/8/77831.jpg" },
  { id: 30, title: "Your Lie in April", imageUrl: "https://cdn.myanimelist.net/images/anime/3/67177.jpg" }
];

export const onHold = [
  { id: 31, title: "Bleach", imageUrl: "https://cdn.myanimelist.net/images/anime/3/40451.jpg" },
  { id: 32, title: "Dr. Stone", imageUrl: "https://cdn.myanimelist.net/images/anime/1613/102576.jpg" },
  { id: 33, title: "Akame ga Kill!", imageUrl: "https://cdn.myanimelist.net/images/anime/1429/99084.jpg" },
  { id: 34, title: "Fairy Tail", imageUrl: "https://cdn.myanimelist.net/images/anime/5/18179.jpg" },
  { id: 35, title: "Noragami", imageUrl: "https://cdn.myanimelist.net/images/anime/5/67499.jpg" },
  { id: 36, title: "Seraph of the End", imageUrl: "https://cdn.myanimelist.net/images/anime/13/75815.jpg" },
  { id: 37, title: "Paranoia Agent", imageUrl: "https://cdn.myanimelist.net/images/anime/10/75283.jpg" },
  { id: 38, title: "Zankyou no Terror", imageUrl: "https://cdn.myanimelist.net/images/anime/8/64463.jpg" },
  { id: 39, title: "Anohana", imageUrl: "https://cdn.myanimelist.net/images/anime/5/79697.jpg" },
  { id: 40, title: "The Devil is a Part-Timer!", imageUrl: "https://cdn.myanimelist.net/images/anime/5/79697.jpg" },
  { id: 41, title: "Fate/Zero", imageUrl: "https://cdn.myanimelist.net/images/anime/8/73249.jpg" },
  { id: 42, title: "Fate/stay night", imageUrl: "https://cdn.myanimelist.net/images/anime/7/74317.jpg" },
  { id: 43, title: "Kaguya-sama: Love is War", imageUrl: "https://cdn.myanimelist.net/images/anime/1806/126226.jpg" },
  { id: 44, title: "Clannad", imageUrl: "https://cdn.myanimelist.net/images/anime/1806/126223.jpg" },
  { id: 45, title: "Angel Beats!", imageUrl: "https://cdn.myanimelist.net/images/anime/10/22057.jpg" }
];

export const allAnime = [
  ...watching.map(a => ({ ...a, status: "Watching", score: 9 })),
  ...planToWatch.map(a => ({ ...a, status: "Plan to Watch", score: 0 })),
  ...onHold.map(a => ({ ...a, status: "On Hold", score: 8 })),
  // Fill up to 50 with mixed data
  { id: 46, title: "Gintama", imageUrl: "https://cdn.myanimelist.net/images/anime/5/72057.jpg", status: "Watching", score: 10 },
  { id: 47, title: "Psycho-Pass", imageUrl: "https://cdn.myanimelist.net/images/anime/1806/126217.jpg", status: "Watching", score: 8 },
  { id: 48, title: "Hellsing Ultimate", imageUrl: "https://cdn.myanimelist.net/images/anime/1806/126218.jpg", status: "On Hold", score: 7 },
  { id: 49, title: "Made in Abyss", imageUrl: "https://cdn.myanimelist.net/images/anime/3/87233.jpg", status: "Plan to Watch", score: 0 },
  { id: 50, title: "The Promised Neverland", imageUrl: "https://cdn.myanimelist.net/images/anime/5/99604.jpg", status: "Watching", score: 9 }
];
