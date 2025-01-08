const CACHE_NAME = 'self-cache-v1';
const URLS_TO_CACHE = [
  'index.html', // Cache the index.html
  '404.html', // Cache 404.html
  'Apps.html', // Cache Apps.html
  'Games.html', // Cache Games.html
  'Home.html', // Cache Home.html
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/particles.js', // Cache particles.js (assuming it's a JS file)
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Lasar.js', // Cache particles.js (assuming it's a JS file)
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/TrackingEyes.js', // Cache particles.js (assuming it's a JS file)
  'Settings.html', // Cache Settings.html
  'termsofservice.html', // Cache terms of service HTML
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Logo.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/profilepic.jpg',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Ai.png',
  'Games/AI/index.html',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/youtube.png',
  'Games/Youtube/index.html',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/kahootbot.png',
  'Games/Kahootbot/index.html',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/basketballstars.png',
  'Games/Badpiggies/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Badpiggies.png',
'Games/Breaklock/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Breaklock.png',
'Games/crossyroad/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/crossyroad.png',
'Games/Cubefield/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/cubefield.png',
'Games/choppyorc/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/choppyorc.png',
'Games/csgoclicker/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/csgoclicker.png',
'Games/coreball/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/coreball.png',
'Games/Cellmachine/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Cellmachine.png',
'Games/Chromedino/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Chromedino.png',
'Games/deepestsword/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/deepestsword.png',
'Games/driftboss/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/driftboss.png',
'Games/drivemad/drivemad.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/drivemad.png',
'Games/fireboywatergirl/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/fireboy&watergirl.png',
'Games/gunmayhem/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/gunmayhem.png',
'Games/getawayshootout/getawayshootout.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/getawayshootout.png',
'Games/gladihopper/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/gladihopper.png',
'Games/GeoGuesser/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/GeoGuesser.png',
'Games/Gunspin/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/gunspin.png',
'Games/houseofhazards/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/houseofhazards.png',
'Games/idlebreakout/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/idlebreakout.png',
'Games/littlealchemy/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/littlealchemy.png',
'Games/LevelDevil/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/leveldevil.png',
'Games/minecraft/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/minecraft.png',
'Games/monkeymart/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/monkeymart.png',
'Games/Pickpocketsimulator/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/pickpocketsimulator.png',
'Games/Polytrack2/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Polytrack.png',
'Games/paper.io/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/paper.io.png',
'Games/paperyplane/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/paperyplane.png',
'Games/rocketpult/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/rocketpult.png',
'Games/Ragdollarchers/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Ragdollarchers.png',
'Games/rooftopsniper/rooftopsniper.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/rooftopsniper.png',
'Games/scalethedepths/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/scalethedepths.png',
'Games/superhot/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/superhot.png',
'Games/slope/slope.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/slope.png',
'Games/Soccerrandom/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Soccerrandom.png',
'Games/stack/stack.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/stack.png',
'Games/suikagame/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/suikagame.png',
'Games/Sortthecourt/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/sortthecourt.png',
'Games/stickmanhook/stickmanhook.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/stickmanhook.png',
'Games/tanukisunset/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/tanukisunset.png',
'Games/templerun2/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/templerun2.png',
'Games/Tinygenesis/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/tinygenesis.png',
'Games/Tetris/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/tetris.png',
'Games/tosstheturtle/tosstheturtle.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/tosstheturtle.png',
'Games/thereisnogame/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/thereisnogame.png',
'Games/tombofthemask/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/tombofthemask.png',
'Games/theimpossiblequiz/theimpossiblequiz.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/theimpossiblequiz.png',
'Games/tunnelrush/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/tunnelrush.png',
'Games/Wbwwb/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/webecomewhatwebehold.png',
'Games/2048/index.html',
'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/2048.png',

];

// Install event - Caches all necessary resources
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      // Add resources to cache with error handling
      return Promise.all(
        URLS_TO_CACHE.map(url => {
          return fetch(url).then(response => {
            if (!response.ok) {
              throw new Error(`Failed to fetch ${url}`);
            }
            return cache.put(url, response);
          }).catch(error => {
            console.error(`Error caching ${url}:`, error);
          });
        })
      );
    })
  );
});

// Fetch event - Responds with cached content if available
self.addEventListener('fetch', event => {
  console.log('Service Worker: Fetching...');
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Activate event - Cleans up old caches if there are any
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


