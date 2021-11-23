const body = document.querySelector("body");
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
  console.log("Fetching the needed data!");
  setTimeout(() => {
    calculate()
  }, 5000);
});

async function calculate() {
  body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--clr-blocking");
  await sleep(20);
  console.log("Starting the big calculation!");
  let x = 0;

  for(let i = 0; i < 1000000000; i++) {
    x += i * i;
  }

  result.innerHTML = x;
  console.log("Finished big calculation");
  body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--clr-ready");
}

function sleep(time) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}