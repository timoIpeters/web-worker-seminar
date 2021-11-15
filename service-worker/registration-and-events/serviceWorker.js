self.addEventListener('install', function(e) {
  console.log('install-event called!');
});

self.addEventListener('activate', function(e) {
  console.log('activate-event called!');
})

self.addEventListener('fetch', function(e) {
  console.log('fetch-event called!', e);
})