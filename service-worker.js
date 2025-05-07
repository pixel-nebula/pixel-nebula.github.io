const CACHE_NAME = 'self-cache-v5';
const URLS_TO_CACHE = [
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/particles.js', 
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Logo.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/profilepic.jpg',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Ai.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/youtube.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/kahootbot.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/basketballstars.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Badpiggies.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Breaklock.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/crossyroad.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/cubefield.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/choppyorc.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/csgoclicker.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/coreball.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Cellmachine.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Chromedino.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/deepestsword.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/driftboss.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/drivemad.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/fireboy&watergirl.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/gunmayhem.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/getawayshootout.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/gladihopper.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/GeoGuesser.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/gunspin.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/houseofhazards.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/idlebreakout.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/littlealchemy.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/leveldevil.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/minecraft.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/monkeymart.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/pickpocketsimulator.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Polytrack.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/paper.io.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/paperyplane.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/rocketpult.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Ragdollarchers.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/rooftopsniper.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/scalethedepths.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/superhot.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/slope.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/Soccerrandom.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/stack.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/suikagame.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/sortthecourt.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/stickmanhook.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/tanukisunset.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/templerun2.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/tinygenesis.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/tetris.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/tosstheturtle.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/thereisnogame.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/tombofthemask.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/theimpossiblequiz.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/tunnelrush.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/webecomewhatwebehold.png',
  'https://cdn.jsdelivr.net/gh/pixel-nebula/pixel-nebula.github.io@master/Pictures/2048.png',
];


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

self.addEventListener('fetch', event => {
  const requestURL = new URL(event.request.url);

  // Skip matching or caching the homepage ("/") to ensure it's always fresh
  if (requestURL.pathname === '/') {
    console.log('Service Worker: Skipping fetch for homepage');
    return; // Let the browser handle it normally
  }

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
          if (cacheWhitelist.includes(cacheName)) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


