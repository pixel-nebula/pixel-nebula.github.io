const CACHE_NAME = 'dynamic-cache-v1';

// Install event - No pre-caching required
self.addEventListener('install', event => {
  console.log('Service Worker: Installed');
});

// Fetch event - Cache resources dynamically
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Serve from cache if available
        console.log(`Service Worker: Serving from cache: ${event.request.url}`);
        return cachedResponse;
      }
      
      // If not in cache, fetch from the network
      return fetch(event.request)
        .then(networkResponse => {
          // Only cache successful responses (status 200)
          if (!networkResponse || !networkResponse.ok) {
            console.error(`Service Worker: Failed to fetch: ${event.request.url}`);
            return networkResponse;
          }

          // Cache the newly fetched resource
          return caches.open(CACHE_NAME).then(cache => {
            console.log(`Service Worker: Caching new resource: ${event.request.url}`);
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(error => {
          console.error(`Service Worker: Fetch error: ${event.request.url}`, error);
        });
    })
  );
});

// Activate event - Clean up old caches
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
