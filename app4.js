
function q7(){
const favBands = ["korn", "rammstein", "tool", "mudvayne", "primus", "jinjer"]

var arrayOfAnswers =[];

let numberOfGuesses = 6      //Bucket example
for (let i = 0; i < numberOfGuesses; i++) {
  var answer = prompt('Can you name some of my favorite mainstream bands?');
  let newAnswer= answer.toLowerCase();
  if (favBands.includes(newAnswer)){
    alert('That\'s right!');
  }
}

alert('Good work!  Some of my favorite bands are Korn, Rammstein, Tool, Mudvayne, Primus, and Jinjer');
}

q7();
//console.log(pets.includes('cat')); <---Example on how to check if a value is contained within my array
