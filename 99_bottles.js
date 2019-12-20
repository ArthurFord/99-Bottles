const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout
});

function bottleSong() {
  rl.question("How many Bottles?", function(numberOfBottles){
    let lastbottle = false;
    let line1 = "";
    let line2 = "";
    for (let i = numberOfBottles; i >= 0; i--) {
      let j = i - 1;
      let remainingBottles = (j == 0 ? "no more" : j);
      let startBottlePlural = ((numberOfBottles == 1) ? "bottle" : "bottles");
      let currentBottlePlural = ((i == 1) ? "bottle" : "bottles");
      let nextBottlePlural = ((j == 1) ? "bottle" : "bottles");
      
      if (lastbottle) {
        line1 = "No more bottles of beer on the wall, no more bottles of beer."
        line2 = `Go to the store and buy some more, ${numberOfBottles} ${startBottlePlural} of beer on the wall.`
        lastbottle = false;
      } else {
        line1 = `${i} ${currentBottlePlural} of beer on the wall, ${i} ${currentBottlePlural} of beer.`
        line2 = `Take one down and pass it around, ${remainingBottles} ${nextBottlePlural} of beer on the wall.`
        if (i == 1) {lastbottle = true}
    }
    console.log(line1)
    console.log(line2)
  }
  process.exit(0);
  })
  
};

bottleSong();
