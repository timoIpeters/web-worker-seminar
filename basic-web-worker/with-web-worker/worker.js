onmessage = function() {
  console.log("Starting the big calculation!");
  let x = 0;

  for(let i = 0; i < 1950000000; i++) {
    x += i * i;
  }

  postMessage(x);
  console.log("Finished big calculation");
}