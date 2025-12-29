// slider
const track = document.getElementById("track");
const slides = track.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}, 3500);

// author selector
const authors = [
  "James Clear",
  "George Orwell",
  "J.K. Rowling",
  "Haruki Murakami",
  "Agatha Christie",
  "Stephen King",
  "Jane Austen",

  // Classics
  "Charles Dickens",
  "Leo Tolstoy",
  "Fyodor Dostoevsky",
  "Mark Twain",
  "Herman Melville",
  "Oscar Wilde",
  "Virginia Woolf",
  "Emily Brontë",
  "George Eliot",

  // Modern fiction
  "J.R.R. Tolkien",
  "George R.R. Martin",
  "Neil Gaiman",
  "Kazuo Ishiguro",
  "Margaret Atwood",
  "Paulo Coelho",
  "Dan Brown",
  "Khaled Hosseini",

  // Mystery / Thriller
  "Arthur Conan Doyle",
  "Gillian Flynn",
  "Stieg Larsson",

  // Non-fiction / Self-development
  "Yuval Noah Harari",
  "Malcolm Gladwell",
  "Dale Carnegie",
  "Cal Newport",
  "Robert Greene",

  // Sci-Fi
  "Isaac Asimov",
  "Frank Herbert",
  "Philip K. Dick",
];

// Make a stable "day number" (changes daily)
const today = new Date();
const dayNumber = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));

// Pick author for today
const i = dayNumber % authors.length;
document.getElementById("authorName").textContent = authors[i];
