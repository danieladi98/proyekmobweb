self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app').then(function(cache) {
      return cache.addAll([
          '/index.html',
          '/highscore.html',
          '/offline.html',
          '/src/js/app.js',
          '/manifest.json',
          '/src/images/asset_mobweb/deck_Page_01.png',
          '/src/images/asset_mobweb/deck_Page_02.png',
          '/src/images/asset_mobweb/deck_Page_03.png',
          '/src/images/asset_mobweb/deck_Page_04.png',
          '/src/images/asset_mobweb/deck_Page_05.png',
          '/src/images/asset_mobweb/deck_Page_06.png',
          '/src/images/asset_mobweb/deck_Page_07.png',
          '/src/images/asset_mobweb/deck_Page_08.png',
          '/src/images/asset_mobweb/deck_Page_09.png',
          '/src/images/asset_mobweb/deck_Page_10.png',
          '/src/images/asset_mobweb/deck_Page_11.png',
          '/src/images/asset_mobweb/deck_Page_12.png',
          '/src/images/asset_mobweb/deck_Page_13.png',
          '/src/images/asset_mobweb/deck_Page_14.png',
          '/src/images/asset_mobweb/deck_Page_15.png',
          '/src/images/asset_mobweb/deck_Page_16.png',
          '/src/images/asset_mobweb/deck_Page_17.png',
          '/src/images/asset_mobweb/deck_Page_18.png',
          '/src/images/asset_mobweb/deck_Page_19.png',
          '/src/images/asset_mobweb/deck_Page_20.png',
          '/src/images/asset_mobweb/deck_Page_21.png',
          '/src/images/asset_mobweb/deck_Page_22.png',
          '/src/images/asset_mobweb/deck_Page_23.png',
          '/src/images/asset_mobweb/deck_Page_24.png',
          '/src/images/asset_mobweb/deck_Page_25.png',
          '/src/images/asset_mobweb/deck_Page_26.png',
          '/src/images/asset_mobweb/deck_Page_27.png',
          '/src/images/asset_mobweb/deck_Page_28.png',
          '/src/images/asset_mobweb/deck_Page_29.png',
          '/src/images/asset_mobweb/deck_Page_30.png',
          '/src/images/asset_mobweb/deck_Page_31.png',
          '/src/images/asset_mobweb/deck_Page_32.png',
          '/src/images/asset_mobweb/deck_Page_33.png',
          '/src/images/asset_mobweb/deck_Page_34.png',
          '/src/images/asset_mobweb/deck_Page_35.png',
          '/src/images/asset_mobweb/deck_Page_36.png',
          '/src/images/asset_mobweb/deck_Page_37.png',
          '/src/images/asset_mobweb/deck_Page_38.png',
          '/src/images/asset_mobweb/deck_Page_39.png',
          '/src/images/asset_mobweb/deck_Page_40.png',
          '/src/images/asset_mobweb/deck_Page_41.png',
          '/src/images/asset_mobweb/deck_Page_42.png',
          '/src/images/asset_mobweb/deck_Page_43.png',
          '/src/images/asset_mobweb/deck_Page_44.png',
          '/src/images/asset_mobweb/deck_Page_45.png',
          '/src/images/asset_mobweb/deck_Page_46.png',
          '/src/images/asset_mobweb/deck_Page_47.png',
          '/src/images/asset_mobweb/deck_Page_48.png',
          '/src/images/asset_mobweb/deck_Page_49.png',
          '/src/images/asset_mobweb/deck_Page_50.png',
          '/src/images/asset_mobweb/deck_Page_51.png',
          '/src/images/asset_mobweb/deck_Page_52.png',
          '/src/images/asset_mobweb/deck_Page_53.png',
          '/src/images/asset_mobweb/deck_Page_54.png',
          '/src/images/asset_mobweb/deck_Page_55.png',
          '/src/images/icons-192.jpg',
          '/src/images/icons-512.png',
          '/src/images/asset_mobweb/bg.jpg',
          '/favicon.ico',
          'https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css',
          'https://code.jquery.com/jquery-1.11.1.min.js',
          'https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js'
          
        // etc
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
    }).catch(function() {
      // If both fail, show a generic fallback:
      return caches.match('/offline.html');
      // However, in reality you'd have many different
      // fallbacks, depending on URL & headers.
      // Eg, a fallback silhouette image for avatars.
    })
  );
});