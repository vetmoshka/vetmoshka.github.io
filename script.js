// live MSK time
const clock = document.getElementById("clock");

function updateClock() {
  const now = new Date();
  const msk = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Moscow" }));
  const hh = String(msk.getHours()).padStart(2, "0");
  const mm = String(msk.getMinutes()).padStart(2, "0");
  const ss = String(msk.getSeconds()).padStart(2, "0");
  clock.textContent = `${hh}:${mm}:${ss}`;
}

updateClock();
setInterval(updateClock, 1000);

// drifting sakura petals in the background
const petalLayer = document.getElementById("petals");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (petalLayer && !reduceMotion) {
  const total = 14;

  for (let i = 0; i < total; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";

    const size = 6 + Math.random() * 7;
    const left = Math.random() * 100;
    const duration = 9 + Math.random() * 10;
    const delay = Math.random() * -20;
    const drift = (Math.random() - 0.5) * 160;

    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${left}vw`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.setProperty("--drift", `${drift}px`);

    petalLayer.appendChild(petal);
  }
}