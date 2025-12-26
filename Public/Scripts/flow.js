const audio = document.getElementById("cozyAudio");
const btn = document.getElementById("soundToggle");

btn.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play(); 
      audio.volume = 0.2;
      btn.textContent = "Stop";
    } catch (err) {
      alert("Browser blocked autoplay. Click again.");
    }
  } else {
    audio.pause();
    btn.textContent = "Start Reading";
  }
});

// completed books

const listEl = document.getElementById("completedList");
const emptyMsg = document.getElementById("emptyMsg");

const completed = JSON.parse(localStorage.getItem("completedBooks")) || [
  {
    title: "asd",
    author: "asd",
  },
  {
    title: "asd",
    author: "asd",
  },
  {
    title: "asd",
    author: "asd",
  },
];

if (completed.length === 0) {
  emptyMsg.textContent =
    "No completed books yet. Finish one and it will appear here.";
} else {
  emptyMsg.textContent = "";

  for (let i = 0; i < completed.length; i++) {
    const b = completed[i];

    const card = document.createElement("div");
    card.className = "completed-card";

    card.innerHTML = `
                <h3>${b.title}</h3>
                <p>${b.author}</p>
                `;

    listEl.appendChild(card);
  }
}
