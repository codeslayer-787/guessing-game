const favBands = ["korn", "rammstein", "tool", "mudvayne", "primus", "jinjer"]

var arrayOfAnswers =[];
var answer = prompt('Can you name some of my favorite bands?');
let numberOfGuesses = 6
let newAnswer= answer.toLowerCase();
  for (let i = 0; i < favBands.length; i++) {
    if(favBands[i] === newAnswer){
   alert ('That\'s right!');
    }
    else 
   alert ('Nein!  My favorite bands are Avenged Sevenfold, Rammstein, Tool, Mudvayne, Primus, and Jinjer');
}
console.log(newAnswer);


// const favBands = ["avenged", "rammstein", "tool", "mudvayne", "primus", "jinjer"]

// var answer = prompt('Can you name one of my favorite bands?');
// let newAnswer= answer.toLowerCase();
//   for (let i = 0; i < favBands.length; i++) {
//     if(newAnswer === favBands[i]){
//    alert ('That\'s right! My favorite bands are Avenged Sevenfold, Rammstein, Tool, Mudvayne, Primus, and Jinjer');
//     }
//     else 
//    alert ('Nein!  My favorite bands are Avenged Sevenfold, Rammstein, Tool, Mudvayne, Primus, and Jinjer');
//    break;
// }
// console.log(newAnswer);






