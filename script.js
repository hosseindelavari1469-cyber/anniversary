// ایجاد قلب‌های شناور
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let y = -30;

    const timer = setInterval(() => {

        y += 3;

        heart.style.top = y + "px";

        if (y > window.innerHeight) {
            clearInterval(timer);
            heart.remove();
        }

    }, 20);
}

setInterval(createHeart, 400);

// پیام عاشقانه
function love(){

    alert("💖 محدثه جان، سالگرد ازدواجمان مبارک. دوستت دارم تا همیشه... ❤️");

}
