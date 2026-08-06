// ===============================
// Love Story
// Hossein ❤️ Mohadeseh
// Version 2.0
// ===============================

const welcome = document.getElementById("welcome");

const mainContent = document.getElementById("mainContent");

const heartButton = document.getElementById("heartButton");

const music = document.getElementById("music");

const playBtn = document.getElementById("playBtn");

const typedText = document.getElementById("typedText");

const petals = document.getElementById("petals");

const weddingDate = new Date("2020-08-07T00:00:00");

// ===============================
// ورود به سایت
// ===============================

heartButton.addEventListener("click", () => {

    heartButton.style.transform = "scale(1.3)";

    setTimeout(() => {

        welcome.classList.add("fadeOut");

        music.play();

        setTimeout(() => {

            welcome.style.display = "none";

            mainContent.style.display = "block";

            startTyping();

            startPetals();

            startHearts();

        },1000);

    },300);

});
// ===============================
// کنترل موسیقی
// ===============================

playBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        playBtn.innerHTML = "⏸ توقف موسیقی";

    } else {

        music.pause();

        playBtn.innerHTML = "🎵 پخش موسیقی";

    }

});

// ===============================
// تایمر ازدواج
// ===============================

function updateTimer() {

    const now = new Date();

    const diff = now - weddingDate;

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const years = Math.floor(days / 365);

    const remainDays = days % 365;

    const hours = Math.floor((totalSeconds % 86400) / 3600);

    const minutes = Math.floor((totalSeconds % 3600) / 60);

    const seconds = totalSeconds % 60;

    document.getElementById("timer").innerHTML =
        `${days} روز ${hours} ساعت ${minutes} دقیقه ${seconds} ثانیه`;

    document.getElementById("loveCounter").innerHTML =
        `${years} سال و ${remainDays} روز کنار هم ❤️`;

}

setInterval(updateTimer, 1000);

updateTimer();
// ===============================
// متن تایپ شونده
// ===============================

const message = `

محدثه جان...

امروز فقط سالگرد ازدواجمان نیست...

سالگرد شروع زیباترین فصل زندگی من است.

از روزی که وارد زندگی من شدی،
هر روز دلیل تازه‌ای برای لبخند زدن پیدا کردم.

ممنونم که همیشه همراهم بودی...

در شادی‌ها...

در سختی‌ها...

و در تمام لحظه‌های زندگی...

امیدوارم تا آخرین نفس،
دست در دست هم،
کنار هم،
با عشق زندگی کنیم...

سالگرد ازدواجمان مبارک ❤️

دوستت دارم...
تا همیشه...

❤️ حسین ❤️

`;

let index = 0;

function startTyping() {

    typedText.innerHTML = "";

    index = 0;

    typeWriter();

}

function typeWriter() {

    if (index < message.length) {

        typedText.innerHTML += message.charAt(index);

        index++;

        typedText.scrollTop = typedText.scrollHeight;

        setTimeout(typeWriter, 45);

    } else {

        typedText.innerHTML +=
        "<br><br><h2 style='color:#ffd700'>💖 دوستت دارم 💖</h2>";

    }

}
// ===============================
// بارش گلبرگ رز
// ===============================

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize = (18 + Math.random() * 18) + "px";

    petal.style.animationDuration = (6 + Math.random() * 5) + "s";

    petal.style.opacity = 0.4 + Math.random() * 0.6;

    petals.appendChild(petal);

    petal.addEventListener("animationend", () => {

        petal.remove();

    });

}

function startPetals() {

    setInterval(createPetal, 700);

}

// ===============================
// قلب‌های شناور
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "-40px";

    heart.style.fontSize = (16 + Math.random() * 20) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.opacity = "0.85";

    document.body.appendChild(heart);

    let y = -40;

    const speed = 2 + Math.random() * 2;

    const move = setInterval(() => {

        y += speed;

        heart.style.top = y + "px";

        if (y > window.innerHeight + 50) {

            clearInterval(move);

            heart.remove();

        }

    }, 20);

}

function startHearts() {

    setInterval(createHeart, 900);

}
// ===============================
// ظاهر شدن بخش‌ها هنگام اسکرول
// ===============================

const sections = document.querySelectorAll(
".message-card,.gallery,.count-love,.final-message,.photo-box,.counter"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="all 1s ease";

observer.observe(section);

});

// ===============================
// بزرگ شدن عکس
// ===============================

const photo=document.querySelector(".photo-box img");

photo.style.cursor="pointer";

photo.addEventListener("click",()=>{

if(photo.classList.contains("zoom")){

photo.classList.remove("zoom");

document.body.style.overflow="auto";

}else{

photo.classList.add("zoom");

document.body.style.overflow="hidden";

}

});

// ===============================
// تغییر متن دکمه موسیقی
// ===============================

music.addEventListener("ended",()=>{

playBtn.innerHTML="🎵 پخش دوباره موسیقی";

});

music.addEventListener("play",()=>{

playBtn.innerHTML="⏸ توقف موسیقی";

});

music.addEventListener("pause",()=>{

playBtn.innerHTML="🎵 پخش موسیقی";

});
// ===============================
// دکمه بازگشت به بالا
// ===============================

const topButton = document.createElement("button");

topButton.id = "topButton";

topButton.innerHTML = "⬆️";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.left = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#ff3366";
topButton.style.color = "#fff";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "99999";
topButton.style.boxShadow = "0 0 20px rgba(255,0,80,.5)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// درخشش آرام قلب صفحه اول
// ===============================

setInterval(() => {

    if (welcome.style.display !== "none") {

        heartButton.style.filter =
            "drop-shadow(0 0 15px red) drop-shadow(0 0 35px #ff3366)";

        setTimeout(() => {

            heartButton.style.filter =
                "drop-shadow(0 0 20px red)";

        }, 500);

    }

}, 2500);

// ===============================
// جلوگیری از انتخاب متن
// ===============================

document.addEventListener("selectstart", (e) => {

    e.preventDefault();

});
// ===============================
// افکت نور روی دکمه‌ها
// ===============================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.08)";

        button.style.boxShadow = "0 0 35px rgba(255,0,80,.9)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

        button.style.boxShadow = "0 0 20px rgba(255,0,80,.5)";

    });

});

// ===============================
// افکت حرکت آرام عکس
// ===============================

const photoBox = document.querySelector(".photo-box img");

let photoScale = 1;

setInterval(() => {

    if (!photoBox.classList.contains("zoom")) {

        photoScale = photoScale === 1 ? 1.02 : 1;

        photoBox.style.transform = `scale(${photoScale})`;

    }

}, 2500);

// ===============================
// نمایش آرام صفحه اصلی
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ===============================
// پیام کنسول ❤️
// ===============================

console.log("%c❤️ سالگرد ازدواج حسین و محدثه ❤️",
"color:#ff3366;font-size:22px;font-weight:bold;");

console.log("%cMade with Love",
"color:#ffd700;font-size:16px;");
// ===============================
// بهینه سازی نهایی
// ===============================

window.addEventListener("resize", () => {

    document.querySelectorAll(".petal").forEach(petal => {

        if (petal.getBoundingClientRect().top > window.innerHeight) {

            petal.remove();

        }

    });

});

// ===============================
// مدیریت خطای پخش موسیقی
// ===============================

music.addEventListener("error", () => {

    console.warn("music.mp3 پیدا نشد.");

});

// ===============================
// پایان انیمیشن تایپ
// ===============================

function finishAnimation() {

    typedText.style.textShadow = "0 0 20px rgba(255,255,255,.8)";

    setTimeout(() => {

        typedText.style.textShadow = "none";

    },1500);

}

const oldTypeWriter = typeWriter;

typeWriter = function(){

    if(index < message.length){

        oldTypeWriter();

    }else{

        finishAnimation();

    }

};

// ===============================
// نسخه پروژه
// ===============================

console.log("Love Story v2.0");
console.log("Created for Hossein ❤️ Mohadeseh");
