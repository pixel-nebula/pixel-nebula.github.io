const CACHE_NAME = 'self-cache-v1';
const URLS_TO_CACHE = [
  '/', // Cache the root URL (index.html)
  'index.html', // Cache the index.html
  '404.html', // Cache 404.html
  'Apps.html', // Cache Apps.html
  'Games.html', // Cache Games.html
  'Home.html', // Cache Home.html
  'particles.js', // Cache particles.js (assuming it's a JS file)
  'Settings.html', // Cache Settings.html
  'termsofservice.html', // Cache terms of service HTML
];

// Install event - Caches all necessary resources
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Fetch event - Responds with cached content if available
self.addEventListener('fetch', event => {
  console.log('Service Worker: Fetching...');
  event.respondWith(
    caches.match(event.request).then(response => {
      // If the request is for an HTML page
      if (event.request.headers.get('accept').includes('text/html')) {
        // Serve the HTML page from the cache
        return response || fetch(event.request);
      }
      // Otherwise, serve the request from the cache if available
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
