const btn = document.getElementById('btn');

btn.addEventListener('click', event => {
  event.stopPropagation();
  if ('serviceWorker' in navigator) {
    fetch('/api/key').then(res => {
      res.json().then(data => {
        registerForPush(data.key);
      });
    });
  }
});

function registerForPush(pubKey) {
  navigator.serviceWorker.register('serviceWorker.js');
  navigator.serviceWorker.ready.then(reg => {
    console.log('Service Worker Registered');
    if ('PushManager' in window) {
      return reg.pushManager.getSubscription()
      .then(sub => {
        if (sub) {
          return sub;
        }

        return reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(pubKey)
        })
      })
      .then(sub => {
        return fetch('/api/save-subscription', {
          method: 'post',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ subscription: sub })
        });
      });
    }
  });
}

function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i)  {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}