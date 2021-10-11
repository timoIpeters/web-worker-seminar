const button = document.querySelector("#button");
const waitButton = document.querySelector("#waitButton");
const result = document.querySelector("#result");
const waitResult = document.querySelector("#waitResult");

button.addEventListener("click", () => {
  console.log("Starting the big calculation!");
  let x = 0;

  for(let i = 0; i < 1950000000; i++) {
    x += i * i;
  }

  result.innerHTML = x;
  console.log("Finished big calculation")
});;

waitButton.addEventListener("click", () => {
  waitResult.innerHTML = "Hello while you wait";
})