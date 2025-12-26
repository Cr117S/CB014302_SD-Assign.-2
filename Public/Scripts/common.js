document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => btn.classList.add("hovered"));
  btn.addEventListener("mouseleave", () => btn.classList.remove("hovered"));
});

// footer

const form = document.getElementById("newsletter");
const emailInput = document.getElementById("newsEmail");
const msg = document.getElementById("newsMsg");

function showMsg(text, type) {
  msg.textContent = text;
  msg.className = type; // "success" or "error"
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim().toLowerCase();

  if (!email) return showMsg("Please enter your email.", "error");
  if (!email.includes("@") || !email.includes(".") || email.length < 6) {
    return showMsg("Please enter a valid email.", "error");
  }

  const key = "subscribers";
  const list = JSON.parse(localStorage.getItem(key)) || [];

  if (list.includes(email)) {
    return showMsg("This email is already subscribed.", "error");
  }

  list.push(email);
  localStorage.setItem(key, JSON.stringify(list));

  showMsg("Subscribed successfully!", "success");
  emailInput.value = "";
});
