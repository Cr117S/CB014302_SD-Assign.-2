document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => btn.classList.add("hovered"));
  btn.addEventListener("mouseleave", () => btn.classList.remove("hovered"));
});
