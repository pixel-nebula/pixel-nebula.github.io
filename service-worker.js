const CACHE_NAME = 'my-site-cache-v1';
const OFFLINE_PAGE = 'offline.html'; // Add this to your pre-cached files

// Pre-caching resources during install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
        OFFLINE_PAGE, // Ensure the offline fallback page is cached
      ]);
    })
  );
  self.skipWaiting(); // Activate the service worker immediately
});

// Clean up old caches during activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control of clients immediately
});

// Fetch handler optimized for offline speed
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse; // Serve directly from cache
      }
      return fetch(event.request)
        .then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone()); // Cache the response
            return networkResponse;
          });
        })
        .catch(() => {
          // Serve offline page for navigation requests if offline
          if (event.request.mode === 'navigate') {
            return caches.match(OFFLINE_PAGE);
          }
        });
    })
  );
});
