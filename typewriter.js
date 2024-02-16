const sentence = "Kasha is a cat, Mia is a cat, and Caitlyn is a very pretty cat!";

function typeWriter(input) {
  // use this to increment the delay by ms
  let delay = 0;

  // using this loop to get the index of each letter
  for (let i = 0; i < input.length; i++) {
    setTimeout(() => {
      process.stdout.write(input[i]);
    }, delay += 50);

  }

  // our newline at the end of the loop once delay is no longer incremented
  setTimeout(() => {
    console.log("");
  }, delay);

}

typeWriter(sentence);











