let randomNumber= Math.floor(Math.random()*10)+1;
let attempts=0

document.getElementById('submit').addEventListener("click",function(){
    const userGuess=Number(document.getElementById('Guess-in').value)
    attempts++;

    if(userGuess<1 || userGuess>10){
        msg("Enter a Valid Number")
    }
    else if(userGuess>randomNumber){
         msg("Too High! Try Again")
    }
    else if(userGuess<randomNumber){
        msg("Too Low! Try Again")
    }
    else if(userGuess!=randomNumber){
        document.getElementById('Guess-in').value = ""; 
    }   
    else{
        msg(`Congratulation! You Wow the Game by ${attempts}`);
        showRestartButton();
    }
});

document.getElementById("restart").addEventListener("click",function(){
    restartGame();
});                    
function msg(msg){           
    document.getElementById('msg').textContent=msg;
}               
function showRestartButton(){
    document.getElementById("restart").style.display = 'block';
    document.getElementById("submit").disabled=true;
}
function restartGame(){
    randomNumber=Math.floor(Math.random()*10)+1;
    attempts=0;
    document.getElementById('Guess.in').value="";
    document.getElementById('msg').textContent="";
    document.getElementById('restart').style.display = 'none'; 
    document.getElementById('submit').disabled=false;
}