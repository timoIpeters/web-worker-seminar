self.addEventListener('sync', event => {
  console.log('sync event called!');
  if (event.tag == 'mySync') {
    event.waitUntil(doSomething());
  }
});

async function doSomething() {
  console.log('something');
  return new Promise((resolve, reject) => {
    resolve('resolved!');
  });
}