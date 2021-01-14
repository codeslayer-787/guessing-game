let correctAnswer = 3;

function guessNumber(){
    let userAnswer = prompt ('Guess a Number 1 - 10!');
    let intAnswer = parseInt(userAnswer)
    /*while (userAnswer < 2 || userAnswer > 10){
        userAnswer = prompt('Too What?  Please select a number 1 - 10');*/
    let numberOfGuesses = 4
    for(let i = 0; i <numberOfGuesses; i++){
        if (intAnswer == correctAnswer){
            alert('Great Job!  You got it right.');
            break;            
        } else if (intAnswer < correctAnswer){
            alert('Too Low.  Please select a number 1 - 10');
            userAnswer = prompt('Please select a number 1 - 10');
            intAnswer=parseInt(userAnswer);
        } else if (intAnswer > correctAnswer){
            alert('Too High!?');
            userAnswer = prompt('Please select a number 1 - 10');
            intAnswer = parseInt(userAnswer);
        }
          if (i == 3){
            alert('The Correct Number is 3')
            break;
          }
    }
  }
guessNumber();