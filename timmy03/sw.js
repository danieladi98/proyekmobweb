self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app').then(function(cache) {
      return cache.addAll([
          '/index.html',
          '/app.js',
          '/src/js/script.js',
          '/src/css/style.css',
          '/src/img/background.jpg',
          '/src/img/player1.png',
          '/src/img/logo.png',
          '/src/manifest.json',
          '/offline.html',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
      ]);
    })
  );
});
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     // Try the cache
//     caches.match(event.request).then(function(response) {
//       // Fall back to network
//       return response || fetch(event.request)|| caches.match('/offline.html');
//     })
//   );
// });

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      // Fall back to network
      console.log("catch");
      return response || fetch(event.request);

    }).catch(function() {
      // If both fail, show a generic fallback:
      console.log("offline html");
      return caches.match('/offline.html');
      // However, in reality you'd have many different
      // fallbacks, depending on URL & headers.
      // Eg, a fallback silhouette image for avatars.
    })
  );
});
