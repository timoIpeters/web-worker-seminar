if ('serviceWorker'in  navigator) {
  navigator.serviceWorker.register('./serviceWorker.js')
  .then(function (registration) {
      console.log("registered", registration);
  })
  .catch(function (err) {
    console.log("err", err);
  })
}