const button = document.querySelector("#button");
const result = document.querySelector("#result");
const waitButton = document.querySelector("#waitButton");
const waitResult = document.querySelector("#waitResult");

// Dedicated Worker
if(window.Worker) {
  const myWorker = new Worker("worker.js");

  button.addEventListener('click', () => {
    console.log("Posting message to the Dedicated Worker!");
    myWorker.postMessage("start working");
  });

  myWorker.onmessage = function(msg) {
    document.querySelector("#result").innerHTML = msg.data;
  }
}

waitButton.addEventListener("click", () => {
  waitResult.innerHTML = "Hello while you wait";
});