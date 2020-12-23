const game =()=>{
    let pScore = 0;
    let cScore = 0;

const startGame = ()=>{
 const playBtn = document.querySelector(".intro button")
 const introScreen = document.querySelector(".intro")
 const match = document.querySelector(".match")
    playBtn.addEventListener("click",()=>{
        introScreen.classList.add("fadeOut")
        match.classList.add("fadeIn")
    });
};

const playMatch = () =>{
const optins = document.querySelectorAll(".options button")
const playerHand = document.querySelector(".player-hand")
const computerHand = document.querySelector(".computer-hand")
const hands =document.querySelectorAll(".hands img");

hands.forEach(hand => {
    hand.addEventListener("animationend" , () =>{
        hand.style.animation="";
    });
});

const computerOptions = ["rock" , "paper","scissors"];
optins.forEach(Option => {
Option.addEventListener("click", () =>{
    playerHand.src='./assets/rock.png';
    computerHand.src='./assets/rock.png';
    const computerNumber = Math.floor(Math.random()*3);
    const computerChoic = computerOptions[computerNumber];
   
setTimeout(()=>{
    compareHands (Option.textContent,computerChoic);
    
    playerHand.src='./assets/'+Option.textContent+'.png';
    computerHand.src='./assets/'+computerChoic+'.png';
},2000)
   

    playerHand.style.animation = "shakePlayer 2s ease";
    computerHand.style.animation = "shakeComputer 2s ease";
});
});
};

const updateScore = ()=>{
const playerScore=document.querySelector('.player-score p')
const computerScore=document.querySelector('.computer-score p')
playerScore.textContent = pScore;
computerScore.textContent = cScore;
}

const compareHands = (playerChoice,computerChoice) =>{

const winner = document.querySelector(".winner");

if(playerChoice === computerChoice){
    winner.textContent = 'It is tie';
    return;
}
if(playerChoice ==='rock'){
    if(computerChoice === 'scissors'){
        winner.textContent = 'player wins';
        pScore++;
        updateScore();
        return;
    }else{
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
    }
}
if(playerChoice ==='paper'){
    if(computerChoice === 'scissors'){
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
    }else{
        winner.textContent = 'player wins';
        pScore++;
        updateScore();
        return;
    }
}
if(playerChoice ==='scissors'){
    if(computerChoice === 'rock'){
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
    }else{
        winner.textContent = 'player wins';
        pScore++;
        updateScore();
        return;
    }
   
}

}
startGame();
playMatch();
};
game();