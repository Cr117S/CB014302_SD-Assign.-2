const questions = document.querySelectorAll(".faq-q");

questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector(".icon");

    // toggle open/close
    const isOpen = answer.style.display === "block";

    answer.style.display = isOpen ? "none" : "block";
    btn.classList.toggle("active", !isOpen);
    icon.textContent = isOpen ? "+" : "−";
  });
});
