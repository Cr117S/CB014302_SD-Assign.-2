const track = document.getElementById("track");
const slides = track.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}, 3500);

const authors = [
  "James Clear",
  "George Orwell",
  "J.K. Rowling",
  "Haruki Murakami",
  "Agatha Christie",
  "Stephen King",
  "Jane Austen",
];

// Make a stable "day number" (changes daily)
const today = new Date();
const dayNumber = Math.floor(today.getTime() / (1000 * 60 * 60 * 24)); // days since 1970

// Pick author for today
const i = dayNumber % authors.length;
document.getElementById("authorName").textContent = authors[i];
