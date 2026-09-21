function changePage(id) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function openGift() {
    changePage("birthday");

    const music = document.getElementById("music");

    music.play().catch(() => {});

    startHearts();
}

function showMessage() {
    changePage("message");

    const text = `Happy Birthday to someone truly special! 🎂❤️

You are one of those people whose presence makes life a little more beautiful.

Thank you for every conversation, every laugh, every little moment and every memory we've shared.

I may not always have the perfect words, but I hope you know that you are genuinely important to me.

Whatever happens in life, I hope you always stay happy, keep smiling and keep being the amazing person you are.

Some people come into our lives and quietly become a beautiful part of our story.

You're one of those people. ❤️

Today, I just want you to know that you are appreciated, valued and cared for.

Happy Birthday once again, Jessy! 🎂✨`;

    typeText(text);
}

function typeText(text) {
    const element = document.getElementById("typing");

    element.innerHTML = "";

    let i = 0;
    const speed = 22;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;

            setTimeout(type, speed);
        }
    }

    type();
}

function showMemories() {
    changePage("memories");
    startHearts();
}

function showFinal() {
    changePage("final");
    startHearts();
}

let heartsStarted = false;

function startHearts() {

    if (heartsStarted) return;

    heartsStarted = true;

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "floatingHeart";

        const hearts = ["❤️", "💗", "💕", "💖", "✨"];

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (18 + Math.random() * 25) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 600);
}

function celebrate() {

    const items = [
        "🎉",
        "🎊",
        "✨",
        "💗",
        "❤️",
        "🌸",
        "⭐"
    ];

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.className = "confettiPiece";

        piece.innerHTML =
            items[Math.floor(Math.random() * items.length)];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.fontSize =
            (15 + Math.random() * 25) + "px";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5000);
    }
}
