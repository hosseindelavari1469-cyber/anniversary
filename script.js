// ===============================
// Love Story
// Hossein ❤️ Mohadeseh
// ===============================

// عناصر صفحه
const welcome = document.getElementById("welcome");
const heartButton = document.getElementById("heartButton");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

const typedText = document.getElementById("typedText");

const topButton = document.getElementById("topButton");

// تاریخ ازدواج
const weddingDate = new Date("2020-08-07T00:00:00");

// متن عاشقانه
const message = `

محدثه جان...

امروز فقط سالگرد ازدواجمان نیست...

امروز سالگرد شروع زیباترین اتفاق زندگی من است.

از روزی که کنارم آمدی،

خانه‌ام گرم‌تر شد،

قلبم آرام‌تر شد،

و زندگی برایم معنا پیدا کرد.

ممنونم که همیشه همراهم بودی...

در شادی‌ها...

در سختی‌ها...

در تمام لحظه‌های زندگی...

امیدوارم تا آخرین نفس،

دست در دست هم،

کنار هم،

با عشق زندگی کنیم...

سالگرد ازدواجمان مبارک ❤️

دوستت دارم...

تا همیشه...

❤️ حسین ❤️

`;

// ===============================
// ورود به سایت
// ===============================

heartButton.addEventListener("click", async () => {

    heartButton.style.pointerEvents = "none";

    welcome.classList.add("fadeOut");

    try{
        await music.play();
    }catch(e){
        console.log("Music blocked.");
    }

    setTimeout(()=>{

        welcome.style.display="none";

        mainContent.style.display="block";

        startTyping();

        startTimer();

        startHearts();

    },900);

});
// ===============================
// افکت تایپ شدن متن
// ===============================

let index = 0;
let typingStarted = false;

function startTyping() {

    if (typingStarted) return;

    typingStarted = true;

    typedText.innerHTML = "";

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
        "<br><br><h2 style='text-align:center;color:#ffd700;'>❤️ دوستت دارم تا همیشه ❤️</h2>";

    }

}

// ===============================
// شمارنده سالگرد
// ===============================

let timerStarted = false;

function startTimer() {

    if (timerStarted) return;

    timerStarted = true;

    updateTimer();

    setInterval(updateTimer, 1000);

}

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
        `${years} سال و ${remainDays} روز عاشقانه کنار هم ❤️`;

}

// ===============================
// کنترل موسیقی
// ===============================

playBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

});

music.addEventListener("play", () => {

    playBtn.textContent = "⏸ توقف موسیقی";

});

music.addEventListener("pause", () => {

    playBtn.textContent = "🎵 پخش موسیقی";

});
// ===============================
// قلب‌های شناور
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (16 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {

        heart.remove();

    });

}

function startHearts() {

    setInterval(createHeart, 700);

}

// ===============================
// دکمه بازگشت به بالا
// ===============================

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
// بزرگ شدن عکس
// ===============================

const photo = document.querySelector(".photo-box img");

photo.addEventListener("click", () => {

    photo.classList.toggle("zoom");

    if (photo.classList.contains("zoom")) {

        document.body.style.overflow = "hidden";

    } else {

        document.body.style.overflow = "auto";

    }

});

// ===============================
// نمایش آرام بخش‌ها
// ===============================

const sections = document.querySelectorAll(".glass,.footer-love");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold:0.15

});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "all .8s ease";

    observer.observe(section);

});
// ===============================
// مدیریت خطای موسیقی
// ===============================

music.addEventListener("error", () => {

    console.warn("music.mp3 پیدا نشد.");

});

// اگر کاربر از صفحه خارج شد، اسکرول برگردد
window.addEventListener("beforeunload", () => {

    window.scrollTo(0, 0);

});

// جلوگیری از انتخاب متن
document.addEventListener("selectstart", (e) => {

    e.preventDefault();

});

// جلوگیری از کشیدن عکس
if (photo) {

    photo.addEventListener("dragstart", (e) => {

        e.preventDefault();

    });

}

// وقتی موسیقی تمام شد از اول شروع شود
music.addEventListener("ended", () => {

    music.currentTime = 0;

    music.play();

});

// پیام کنسول
console.log("%c❤️ سالگرد ازدواج حسین و محدثه ❤️",
"color:#ff3366;font-size:22px;font-weight:bold;");

console.log("%cMade with Love",
"color:#ffd700;font-size:16px;");

// ===============================
// پایان پروژه
// ===============================
