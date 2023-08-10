const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const playerScore = document.getElementById("player")
const computerScore = document.getElementById("computer")
let pScore =0;
let cScore =0;

buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        let computer = computerPlay();
        compare(computer,btn.id);
        console.log(btn.id , "comp" , computer);
    })
})
function computerPlay(){
    const choices=["rock","paper","scissor"];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}
function compare(comp,user){
    if(comp=== "rock" && user === "scissor"){
        console.log("Computer win!")
        console.log(user , "comp" , comp);
        result.textContent = `Computer Win ! User: ${user} and Computer: ${comp}`
        cScore++;
        playerScore.textContent = `${pScore}`
        computerScore.textContent = `${cScore}`
    }
    else if(comp === "rock" && user === "paper"){
        console.log("User win!")
        console.log(user , "comp" , comp);
        result.textContent = `User Win! User: ${user} and Computer: ${comp}`
        pScore++;
        playerScore.textContent = `${pScore}`
        computerScore.textContent = `${cScore}`
    }
    else if(comp === "paper" && user === "scissor"){
        console.log("User win!")
        console.log(user , "comp" , comp);
        result.textContent = `User Win! User: ${user} and Computer: ${comp}`
        pScore++;
        playerScore.textContent = `${pScore}`
        computerScore.textContent = `${cScore}`
    }
    else if(comp === "paper" && user === "rock"){
        console.log("Computer win!")
        console.log(user , "comp" , comp);
        result.textContent = `Computer Win! User: ${user} and Computer: ${comp}`
        cScore++;
        playerScore.textContent = `${pScore}`
        computerScore.textContent = `${cScore}`
    }
    else if(comp === "scissor" && user === "rock"){
        console.log("User win!")
        console.log(user , "comp" , comp);
        result.textContent = `User Win! User: ${user} and Computer: ${comp}`
        pScore++;
        playerScore.textContent = `${pScore}`
        computerScore.textContent = `${cScore}`
    }
    else if(comp === "scissor" && user === "paper"){
        console.log("Computer win!")
        console.log(user , "comp" , comp);
        result.textContent = `Computer Win! User: ${user} and Computer: ${comp}`
        cScore++;
        playerScore.textContent = `${pScore}`
        computerScore.textContent = `${cScore}`
    }else{
        console.log("Draw")
        console.log(user , "comp" , comp);
        result.textContent = `Draw! User: ${user} and Computer: ${comp}`
        playerScore.textContent = `${pScore}`
        computerScore.textContent = `${cScore}`
    }
}