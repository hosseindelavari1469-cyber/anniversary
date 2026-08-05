const music = document.getElementById("music");
const btn = document.getElementById("playBtn");
const timer = document.getElementById("timer");

btn.onclick = function () {
    music.play();

    btn.innerHTML = "❤️ دوستت دارم ❤️";

    startHearts();
};

const weddingDate = new Date("2020-08-07");

function updateTimer(){

    const now = new Date();

    const diff = now - weddingDate;

    const days = Math.floor(diff / (1000*60*60*24));

    timer.innerHTML =
    "💍 " + days + " روز عاشقانه کنار هم 💍";

}

setInterval(updateTimer,1000);

updateTimer();

function startHearts(){

setInterval(function(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-50px";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

document.body.appendChild(heart);

let y=-50;

const move=setInterval(function(){

y+=3;

heart.style.top=y+"px";

if(y>window.innerHeight){

clearInterval(move);

heart.remove();

}

},20);

},300);

}
