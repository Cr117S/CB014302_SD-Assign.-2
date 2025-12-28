function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => btn.classList.add("hovered"));
  btn.addEventListener("mouseleave", () => btn.classList.remove("hovered"));
});

// footer
const newsletterForm = document.getElementById("newsletterForm");
const emailI = document.getElementById("newsEmail");
const newsMsg = document.getElementById("newsMsg");

function showNewsMsg(text, type) {
  if (!newsMsg) return;
  newsMsg.textContent = text;
  newsMsg.className = type;
}

if (newsletterForm && emailI) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailI.value.trim().toLowerCase();

    if (!email) return showNewsMsg("Please enter your email.", "error");
    if (!email.includes("@") || !email.includes(".") || email.length < 6) {
      return showNewsMsg("Please enter a valid email.", "error");
    }

    const key = "subscribers";
    const list = JSON.parse(localStorage.getItem(key)) || [];

    if (list.includes(email)) {
      return showNewsMsg("This email is already subscribed.", "error");
    }

    list.push(email);
    localStorage.setItem(key, JSON.stringify(list));

    showNewsMsg("Subscribed successfully!", "success");
    emailI.value = "";
  });
}
