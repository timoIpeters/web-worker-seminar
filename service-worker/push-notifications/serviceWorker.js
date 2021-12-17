self.addEventListener('push', event => {
  console.log('Received push event!', event);
  event.waitUntil(
    registration.showNotification('TEST')
  );
  console.log('FERTIG')
});

self.addEventListener('notificationclick', event => {
    console.log('Notification clicked!');
    event.notification.close();
    event.waitUntil(clients.openWindow('notification-home'));
});

self.addEventListener('notificationclose', event => {
  event.notification.close();
  console.log("Have fun")
  fetch('/api/notification-closed').then(res => console.log(res)).catch(err => console.error(err));
})