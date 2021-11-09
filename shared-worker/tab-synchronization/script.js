const counter__text = document.querySelector("#counter__number");
const counter__increment = document.querySelector("#counter__increment");
const counter__decrement = document.querySelector("#counter__decrement");
const worker = new SharedWorker('./sharedWorker.js');

let count = 0;
// consistent counter on every tab when one of them reloads
worker.port.postMessage(count);

// increment counter
counter__increment.addEventListener("click", (e) => {
  worker.port.postMessage(++count);
})

// decrement counter
counter__decrement.addEventListener("click", (e) => {
  worker.port.postMessage(--count);
})

// port.start() implicitly called when using onmessage
worker.port.onmessage = (msg) => {
  count = msg.data;
  counter__text.innerHTML = count;
}