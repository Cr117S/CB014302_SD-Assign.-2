const form = document.querySelector(".Myform");
const totalInput = document.getElementById("total");
const readInput = document.getElementById("read");
const speedInput = document.getElementById("speed");
const saveBtn = document.getElementById("saveBtn2");

const fill = document.getElementById("progressFill");
const percentEl = document.getElementById("progressPercent");
const pagesEl = document.getElementById("progressPages");
const daysEl = document.getElementById("progressDays");

// load saved progress on page load
const saved = JSON.parse(localStorage.getItem("readingProgress"));
if (saved) {
  totalInput.value = saved.total;
  readInput.value = saved.read;
  speedInput.value = saved.speed;
  updateUI(saved);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const progress = calculate();
  if (!progress) return;
  updateUI(progress);
});

saveBtn.addEventListener("click", () => {
  const progress = calculate();
  if (!progress) return;
  localStorage.setItem("readingProgress", JSON.stringify(progress));
});

function calculate() {
  const total = Number(totalInput.value);
  const read = Number(readInput.value);
  const speed = Number(speedInput.value);

  if (total <= 0) return null;
  if (read < 0 || read > total) return null;
  if (speed <= 0) return null;

  const percent = Math.round((read / total) * 100);
  const daysLeft = Math.ceil((total - read) / speed);

  return {
    total,
    read,
    speed,
    percent,
    daysLeft,
    updatedAt: new Date().toISOString(),
  };
}

function updateUI(p) {
  fill.style.width = p.percent + "%";
  percentEl.textContent = p.percent + "%";
  pagesEl.textContent = `${p.read} / ${p.total} pages`;
  daysEl.textContent = `${p.daysLeft} day(s) left`;
}
