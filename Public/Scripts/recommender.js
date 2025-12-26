let books = [];

fetch("../../Assets/reco.json")
  .then((res) => res.json())
  .then((data) => {
    books = data;
  })
  .catch(() => console.log("Failed to load reco.json"));

const genreSel = document.getElementById("genre");
const lengthSel = document.getElementById("length");

const pickBtn = document.getElementById("pickBtn");
const saveBtn = document.getElementById("saveBtn");

const recoMsg  = document.getElementById("recoMsg");
const card = document.getElementById("recoCard");
const titleEl = document.getElementById("recoTitle");
const authorEl = document.getElementById("recoAuthor");

let currentBook = null;

function showMsg(text, type) {
  recoMsg .textContent = text;
  recoMsg .className = type; // "success" or "error"
}

function pickRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function recommend() {
  const genre = genreSel.value;
  const length = lengthSel.value;

  const filtered = [];
  for (let i = 0; i < books.length; i++) {
    const b = books[i];

    const genreOk = genre === "" || b.genre === genre;
    const lengthOk = length === "" || b.length === length;

    if (genreOk && lengthOk) {
      filtered.push(b);
    }
  }

  if (filtered.length === 0) {
    card.classList.add("hidden");
    currentBook = null;
    showMsg("No books match. Try different options.", "error");
    return;
  }

  currentBook = pickRandom(filtered);

  titleEl.textContent = currentBook.title;
  authorEl.textContent = currentBook.author;
  card.classList.remove("hidden");
  showMsg("Recommended book picked", "success");
}

function isAlreadySaved(list, bookId) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === bookId) return true;
  }
  return false;
}

pickBtn.addEventListener("click", () => {
  recommend();
  pickBtn.textContent = "Pick Again";
});

saveBtn.addEventListener("click", () => {
  if (!currentBook) {
    showMsg("Pick a book first.", "error");
    return;
  }

  const key = "readingList";
  const list = JSON.parse(localStorage.getItem(key)) || [];

  if (isAlreadySaved(list, currentBook.id)) {
    showMsg("Already in your reading list.", "error");
    return;
  }

  list.push(currentBook);
  localStorage.setItem(key, JSON.stringify(list));
  showMsg("Saved to reading list", "success");
});
