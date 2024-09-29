let score = JSON.parse(localStorage.getItem('Points')) || {
    win:0,
    lose:0,
    tie:0
};

updateScore();

// let score = {
//     win:0,
//     lose:0,
//     tie:0
// };
function playGame(playerMove) {
    const computerMove = pickComputer();

    console.log("computer move:" + computerMove);

    let result = '';

    if (playerMove === 'rock'){
        if (computerMove === 'rock'){
            result = 'tie';
        }else if (computerMove === 'paper'){
            result = 'you lose';
        }else if (computerMove === 'scissors'){
            result = 'you win';
        }
    }

    if (playerMove === 'paper') {
        if (computerMove === 'paper') {
            result = 'tie';
        }else if (computerMove === 'scissors') {
            result = 'you lose';
        }else if (computerMove === 'rock') {
            result = 'you win';
        }  
    }

    if (playerMove === 'scissors') {
        if (computerMove === 'scissors') {
            result = 'tie';
        }else if (computerMove === 'rock') {
            result = 'you lose';
        }else if (computerMove === 'paper') {
            result = 'you win'
        }
    }
    console.log('your result:' + result);


    if (result === 'you win'){
        score.win += 1;
    }else if (result === 'you lose') {
        score.lose += 1;
    }else if (result === 'tie') {
        score.tie += 1;
    }


    localStorage.setItem('Points',JSON.stringify(score));

    document.querySelector('.js-moves')
     .innerHTML = `YOU <img src="${playerMove}-emoji.png"    class="move-icon">
     <img src="${computerMove}-emoji.png" class="move-icon">
     COMPUTER`;

    updateScore();

    document.querySelector('.js-result')
      .innerHTML = result;
}



function pickComputer() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber<1 / 3){
        computerMove = 'rock';
    }else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computerMove = 'paper';
    }else if (randomNumber >= 2 / 3 && randomNumber <1) {
        computerMove = 'scissors';
    }
    return computerMove;
}


function updateScore () {
    document.querySelector('.js-score')
     .innerHTML = `Win:${score.win} Lose:${score.lose} Tie:${score.tie}`;
}