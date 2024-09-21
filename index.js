let player1=( Math.floor(Math.random()*3)+1);
addersplayer1="/images/image"+player1+".PNG";
document.querySelector(".img1").setAttribute("src",addersplayer1);

let player2=( Math.floor(Math.random()*3)+1);
addersplayer2="/images/image"+player2+".PNG";
document.querySelector(".img2").setAttribute("src",addersplayer2);

if (player1>player2) {
    let result="Player 1 is Winner"+player1;
    document.querySelector("h1").innerHTML=result;
    
} else if(player2>player1) {
    let result="Player 2 is Winner"+player2;
    document.querySelector("h1").innerHTML=result;
}
else{
    let result="Match is Draw!." ;
    document.querySelector("h1").innerHTML=result;
}
