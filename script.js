// self-typing nickname
const word = "1337";
const target = document.getElementById("nickname-text");

let i = 0;
let deleting = false;

function loop() {
  if (!deleting) {
    target.textContent = word.slice(0, i + 1);
    i++;
    if (i === word.length) {
      deleting = true;
      setTimeout(loop, 1400);
      return;
    }
  } else {
    target.textContent = word.slice(0, i - 1);
    i--;
    if (i === 0) {
      deleting = false;
      setTimeout(loop, 500);
      return;
    }
  }
  setTimeout(loop, deleting ? 90 : 140);
}

loop();

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
