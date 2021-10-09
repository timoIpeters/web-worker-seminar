const button = document.querySelector("#button");
const waitButton = document.querySelector("#waitButton");
const result = document.querySelector("#result");
const waitResult = document.querySelector("#waitResult");
const note = document.querySelector("#note");

waitButton.addEventListener("click", () => {
  if (waitResult.innerHTML) {
    waitResult.innerHTML = "";
  } else {
    waitResult.innerHTML = "Hello while you wait";
  }
})

button.addEventListener("click", () => {
  console.log("Before the calculation starts");
  setTimeout(() => {
    calculate()
  }, 10000);
  console.log("After the  calculation started!");
});

function calculate() {
  console.log("Starting the big calculation!");
  let x = 0;

  for(let i = 0; i < 1000000000; i++) {
    x += i * i;
  }

  result.innerHTML = x;
  console.log("Finished big calculation");
}