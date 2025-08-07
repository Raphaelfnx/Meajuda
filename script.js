function startGame() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game").style.display = "block";
  moveCan();
}

// Seletores
const hand = document.getElementById("hand");
const can = document.getElementById("can");

let gameWidth = window.innerWidth;
let gameHeight = window.innerHeight;

// Posicionar a lata em local aleatório
function moveCan() {
  const canSize = 80;
  const x = Math.random() * (gameWidth - canSize);
  const y = Math.random() * (gameHeight - canSize);
  can.style.left = `${x}px`;
  can.style.top = `${y}px`;
}

// Detecta proximidade e faz a lata fugir
function checkProximity(x, y) {
  const canRect = can.getBoundingClientRect();
  const distance = Math.hypot(
    x - (canRect.left + canRect.width / 2),
    y - (canRect.top + canRect.height / 2)
  );

  if (distance < 150) {
    moveCan();
  }
}

// Mouse
document.addEventListener("mousemove", (e) => {
  hand.style.left = `${e.clientX - 40}px`;
  hand.style.top = `${e.clientY - 40}px`;
  checkProximity(e.clientX, e.clientY);
});

// Touch
document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  hand.style.left = `${touch.clientX - 40}px`;
  hand.style.top = `${touch.clientY - 40}px`;
  checkProximity(touch.clientX, touch.clientY);
});

