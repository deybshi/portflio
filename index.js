const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const celebration = document.getElementById("celebration");

let width = 30;
let height = 6;

noBtn.addEventListener("click", () => {
  width += 5;
  height += 2;
  yesBtn.style.width = width + "%";
  yesBtn.style.height = height + "vh";
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
