const readline = require("readline");
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout
});

var total = 0;
var singTheSong = function(numberOfBottles) {

  switch (numberOfBottles) {
    case 2:
      console.log(`${numberOfBottles} bottle of beer on the wall, ${numberOfBottles} bottle of beer.`);
      console.log(`Take one down and pass it around, ${numberOfBottles - 1} bottle of beer on the wall.`);
      return singTheSong(numberOfBottles - 1);
      total++;
    case 1:
      console.log(`${numberOfBottles} bottle of beer on the wall, ${numberOfBottles} bottle of beer.`);
      console.log(`Take one down and pass it around, no more bottles of beer on the wall.`);
      return singTheSong(numberOfBottles - 1);
      total++;
    case 0:
      console.log("No more bottles of beer on the wall, no more bottles of beer.")
      if (numberOfBottles = 1) {
        console.log(`Go to the store and buy some more, ${numberOfBottles} bottle of beer on the wall.`)
        return 1;
      } else {
        console.log(`Go to the store and buy some more, ${total} bottles of beer on the wall.`)
        return 1;
      }
  
    default:
      console.log(`${numberOfBottles} bottles of beer on the wall, ${numberOfBottles} bottles of beer.`);
      console.log(`Take one down and pass it around, ${total} bottles of beer on the wall.`);
      total++;
      return singTheSong(numberOfBottles - 1);
  }
};

rl.question('How Many Bottles? ', (answer) => {
  
  singTheSong(answer);
  rl.close();
});