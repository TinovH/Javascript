const computerChoice = document.getElementById("computer-choice")
const playerChoice = document.getElementById("player-choice")
const resultOutput = document.getElementById("result")

const possibleChoices = document.querySelectorAll('button')

let computer
let player
let result


possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    
    generateComputerChoice();
    getResult();
}))

const generateComputerChoice = function() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber == 1) {
        computer = 'rock';
    } else if (randomNumber == 2) {
        computer = 'paper';
    } else if (randomNumber == 3) {
        computer = 'scissors';
    } 
    
    computerChoice.innerHTML = computer;
    
}

const getResult = function() { 
    if(player === computer){
        result = 'gelijkspel!'
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            result = 'je hebt verloren!';
        }else{
            result = 'je hebt gewonnen!';
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            result = 'je hebt verloren!';
        }else{
            result = 'je hebt gewonnen!';
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            result = 'je hebt verloren!';
        }else{
            result = 'je hebt gewonnen!';
        }
    }
    resultOutput.innerHTML = result;
}
    

const random = function(){
    if(player == computer){
        result = 'gelijkspel!'
    } else if(computer == 'rock'){
        if(player == 'paper'){
            result = 'Je hebt gewonnen!';
        }
    } else if(computer == 'rock'){
        if(player == 'scissors'){
            result = 'je hebt verloren!';
        }
    } else if(computer == 'paper'){
        if(player = 'scissors'){
            result = 'je hebt gewonnen!';
        }
    } else if(computer == 'paper'){
        if(player = 'rock'){
            result = 'je hebt verloren!';
        }
    } else if(computer == 'scissorts'){
        if(player = 'rock'){
            result = 'je hebt gewonnen!';
        }
    } else if(computer == 'scissor'){
        if(player = 'paper'){
            result = 'je hebt verloren!';
        }
    }

    
} 

