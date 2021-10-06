let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log('secretNumber', secretNumber);
let score = 20;
let highscore = 0;
//let audio = new Audio('sound.mp3');

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No number!';
        //when player wins
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You Lost the Game!';
        }
    }
    else if(guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You Lost the Game!';
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').value = 'Start Guessing...';
});