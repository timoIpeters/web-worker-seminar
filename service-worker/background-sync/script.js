if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceWorker.js');
  navigator.serviceWorker.ready.then(reg => {
    if('SyncManager' in window) {
      reg.sync.register('mySync');
    } 
  });
}