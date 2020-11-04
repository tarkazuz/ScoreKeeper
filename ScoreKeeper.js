//preparing all the variables
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const reset = document.querySelector("#reset");
const setGame = document.querySelector("#setGame");
const winner = document.createElement('h2');

//setting score of player 1
button1.addEventListener('click', function(){
    if(parseInt(player1.innerHTML)+1 == setGame.value && player2.innerHTML< setGame.value){
        player1.innerHTML = `${parseInt(player1.innerHTML) + 1}`;
        document.querySelector('#scoreBoard').style.backgroundColor = "rgb(45, 75, 15)";
        document.querySelector('#scoreBoard').style.color = "rgb(223, 211, 211)";
        winner.innerHTML = "!! The winner is Player 1 !!";
        document.body.appendChild(winner);
    } else if(player1.innerHTML< setGame.value && player2.innerHTML< setGame.value){
        player1.innerHTML = `${parseInt(player1.innerHTML) + 1}` 
}
}
);

//setting score of player 2
button2.addEventListener('click', function(){
    if (parseInt(player2.innerHTML) + 1  == setGame.value && player1.innerHTML < setGame.value){
        player2.innerHTML = `${parseInt(player2.innerHTML) + 1}`;
        document.querySelector('#scoreBoard').style.backgroundColor = "rgb(31, 31, 117)";
        document.querySelector('#scoreBoard').style.color = "rgb(223, 211, 211)";
        winner.innerHTML = "!! The winner is Player 2 !!";
        document.body.appendChild(winner);
    }else if(player1.innerHTML < setGame.value && player2.innerHTML < setGame.value){
        player2.innerHTML = `${parseInt(player2.innerHTML) + 1}`
 }
}
 );

 //reseting the score and restarting the counting
 reset.addEventListener('click', function(){
    player1.innerHTML = `0`;
    player2.innerHTML = `0`;
    document.querySelector('#scoreBoard').style.backgroundColor = "rgb(223, 211, 211)";
    document.querySelector('#scoreBoard').style.color = 'black'
    document.body.removeChild(winner);
 }
 );


