const CACHE = 'example-cached-images';
const CACHED_RESOURCES = [
  './index.html',
  './style.css',
  './script.js',
  './img/4k_image.jpg',
  './img/4k_image_copy1.jpg',
  './img/4k_image_copy2.jpg',
  './img/4k_image_copy3.jpg',
  './img/4k_image_copy4.jpg',
  './img/4k_image_copy5.jpg',
  './img/4k_image_copy6.jpg',
  './img/4k_image_copy7.jpg',
  './img/4k_image_copy8.jpg',
  './img/4k_image_copy9.jpg',
  './img/4k_image_copy10.jpg',
  './img/4k_image_copy11.jpg',
];

self.addEventListener('install', function(event) {
  event.waitUntil(async function() {
    console.log('Caching resources!');
    const cache = await caches.open(CACHE);
    await cache.addAll(CACHED_RESOURCES);
  }());
});

self.addEventListener('activate', function(event) {
  console.log('activate-event called', event);
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(res => {
      if (res) {
        console.log('cached resource: ', res);
        return res;
      }

      return caches.open(CACHE).then(cache => {
        return fetch(event.request).then(res => {
          console.log('get from network: ', res);
          return cache.put(event.request, res.clone()).then(() => {
            return res;
          })
        })
      })
    }));
})