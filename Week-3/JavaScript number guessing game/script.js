var obj ={
    totalGuesses:0,
    flag:false
 };
function play(answer,allowedGuess){
 var guesses_num =[];
 //var totalGuesses=0;
 let msg;
 
 
   user_guess = prompt("Please enter a number between 1 and 100:");
  if (user_guess < 1 || user_guess > 100 || isNaN(user_guess)) {
      alert("Please Enter a number Between 1 to 100 :");
  } else {
      guesses_num.push(user_guess);
      obj.totalGuesses += 1;
      if (user_guess < answer) {
          msg ="Your Guess is Too low.No. Of Guesses : " + obj.lGuesses + "Guessed Number Are: " + guesses_num;
          console.log(msg);
          flag=false;
         
      } else if (user_guess > answer) {
          msg ="Your Guess is Too high.No. Of Guesses : " + obj.totalGuesses + "Guessed Number Are: " + guesses_num;
          console.log(msg);
          flag=false;
      } else if (user_guess == answer) {
         msg = "Yahhhh You won It!!"+"the Number was " + user_guess + " You guessd it in " + obj.totalGuesses + "Guesses";
         console.log(msg);
         flag=true;
      }
  }

  return obj;
 
}

function playGuessingGame(answer,allowedGuess){
let result = play(answer,allowedGuess);
while (result.totalGuesses < allowedGuess &&!result.flag)
result=play(answer,allowedGuess);
}
playGuessingGame(2,4);