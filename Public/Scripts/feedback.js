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

const btn = document.querySelector(".btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const msgInput = document.getElementById("message");
const feedbackMsg = document.getElementById("feedbackMsg");

function show(text, type) {
  feedbackMsg.textContent = text;
  feedbackMsg.className = type;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const message = msgInput.value.trim();

  if (name.length < 2) {
    return show("Please enter your name (min 2 letters).", "error");
  }
  if (!email.includes("@") || !email.includes(".") || email.length < 6) {
    return show("Please enter a valid email.", "error");
  }
  if (message.length < 5) {
    return show("Please write a message (min 5 characters).", "error");
  }

  const feedback = {
    name,
    email,
    message,
    date: new Date().toISOString(),
  };

  const key = "feedbacks";
  const list = JSON.parse(localStorage.getItem(key)) || [];
  list.push(feedback);
  localStorage.setItem(key, JSON.stringify(list));

  show(`Thanks ${name} (${email})! Feedback saved.`, "success");
});
