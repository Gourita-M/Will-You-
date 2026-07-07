
const box = document.getElementById("box");

let width = 170;
let height = 70;

function moveBox() {
    const maxX = window.innerWidth - box.offsetWidth;
    const maxY = window.innerHeight - box.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
}

// Runs away when the mouse enters
box.addEventListener("mouseenter", moveBox);

// If the player actually clicks "No"
box.addEventListener("click", (e) => {
    e.preventDefault();

    // Make it smaller (minimum size)
    width = Math.max(60, width - 20);
    height = Math.max(30, height - 8);

    box.style.width = width + "px";
    box.style.height = height + "px";

    // Immediately escape again
    moveBox();
});

// Yes button
document.getElementById("box2").addEventListener("click", () => {
    let rain = setInterval(() => {

        const banana = document.createElement("div");

        banana.classList.add("banana");
        banana.textContent = "🍌";

        banana.style.left = Math.random() * window.innerWidth + "px";
        banana.style.animationDuration = (Math.random() * 2 + 2) + "s";
        banana.style.fontSize = (Math.random() * 25 + 25) + "px";

        document.body.appendChild(banana);

        banana.addEventListener("animationend", () => banana.remove());

    }, 100);

    // Stop after 10 seconds
    setTimeout(() => clearInterval(rain), 10000);
});