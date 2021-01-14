const favBands = ["avenged", "rammstein", "tool", "mudvayne", "primus", "slipknot"]

var arrayOfAnswers =[];
var answer = prompt('What are some of my favorite bands?');
let newAnswer= answer.toLowerCase();
  for (let i = 0; i < favBands.length; i++) {
    if(favBands[i] === newAnswer){
   alert ('Good stuff');
    }
    else 
   alert ('Nein');
   break;
}
console.log(newAnswer);




