'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 24;

//reacting to check
*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let Highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //condition start from here !!!
  //When input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';

    //When Wins
  } else if (guess == secretnumber) {
    document.querySelector('.message').textContent = 'Correct number'; //the message we entered shoul be the message in the selected class/id

    document.querySelector('.number').textContent = secretnumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > Highscore) {
      Highscore = score;

      document.querySelector('.highscore').textContent = Highscore;
    }

    //When score is High
  } else if (guess > secretnumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ';
    }

    //When score is low
  } else if (guess < secretnumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing.... ';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = ' ';

  document.querySelector('.score').textContent = 20;
});
