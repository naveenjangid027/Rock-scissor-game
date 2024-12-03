let userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice =() =>{
    //rock paper Scissor
    const options =["rock", "paper","scissor"];
   // Math.random();

   const randIdx =Math.floor(Math.random()*3);
   return options[randIdx];
}; 

const drawGame = ()  => {
    console.log("game was draw.");
};
const showWinner = (userWin) =>{
    if (userWin){
        console.log("you are win");
        msg.innnerText = "YouWin!";

    }
    else {
        console.log("you are lose");
        msg.innerText = "YouLose.";
    }

};


 const playGame = (userChoice) => {
    console.log("userchoice =",userChoice);
    //Generate Computer choice 
    const compChoice = genCompChoice();
    console.log("compchoice =", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userwin = true;
        if (userChoice ==="rock"){
            //scissor ,paper
            userWin = compChoice === "paper" ? false:true;
        }
        else if (userChoice ==="paper"){
            // rock, scissor 
            userwin = compChoice === "scissor"? false :true;
        }
        else {
            //rock ,paper
             iserWin  = compChoice === "rock" ? false :true;
      
            }
            showWinner(userWin);
    }

};
 choices.forEach((choice) =>{ 

   // console.log(choice);
choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id");
        //onsole.log("choice was clicked", userChoice);
        playGame(userChoice);


    });

});