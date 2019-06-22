self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app').then(function(cache) {
      return cache.addAll([
          '/index.html',
          '/src/js/app.js',
          '/src/js/script.js',
          '/src/css/style.css',
          '/src/img/background.jpg',
          '/src/img/player1.png',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
          'src/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      // Fall back to network
      return response || fetch(event.request);
    })
  );
});