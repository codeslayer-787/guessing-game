const favBands = ["korn", "rammstein", "tool", "mudvayne", "primus", "jinjer"]

var arrayOfAnswers =[];

let numberOfGuesses = 6      //Bucket example
for (let i = 0; i < numberOfGuesses; i++) {
  var answer = prompt('Can you name some of my favorite bands?');
  let newAnswer= answer.toLowerCase();
  if (favBands.includes(newAnswer)){
    alert('That\'s right!');
  }
 
}

alert('Good work!  My favorite bands are Avenged Sevenfold, Rammstein, Tool, Mudvayne, Primus, and Jinjer');

//console.log(pets.includes('cat')); <---Example on how to check if a value is contained within my array
