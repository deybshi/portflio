const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const celebration = document.getElementById("celebration");

let width = 30;
let height = 6;

noBtn.addEventListener("click", () => {
  // move No button to random position
  const x = Math.random() * 70;
  const y = Math.random() * 70;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "vw";
  noBtn.style.top = y + "vh";
});

yesBtn.addEventListener("click", () => {
  celebration.classList.remove("hidden");
  createHearts();
});

function createHearts() {
  for (let i = 0; i < 150; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}
