const audio = document.getElementById("cozyAudio");
const btn = document.getElementById("soundToggle");

btn.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play(); // required user click
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
