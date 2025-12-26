const nameInput = document.getElementById("name");
const authorInput = document.getElementById("author");
const genreSelect = document.getElementById("genre");
const booksContainer = document.getElementById("booksContainer");

// modal elements
const modalOverlay = document.getElementById("bookModal");
const closeBtn = modalOverlay.querySelector(".modal-close");

const mTitle = document.getElementById("mTitle");
const mAuthor = document.getElementById("mAuthor");
const mCover = document.getElementById("mCover");
const mSynopsis = document.getElementById("mSynopsis");
const mPrequels = document.getElementById("mPrequels");
const mSequels = document.getElementById("mSequels");
const mReviews = document.getElementById("mReviews");

const books = [
  {
    id: "1984",
    title: "1984",
    author: "George Orwell",
    genre: "dystopian",
    length: "medium",
    pages: 328,
    cover: "../../Assets/Images/1984.jpeg",
    synopsis:
      "A man struggles against a totalitarian regime that controls truth and thought.",
    series: {
      prequels: [],
      sequels: [],
    },
    reviews: [
      {
        source: "Readers",
        rating: 4.7,
        comment: "Chilling and relevant.",
      },
      {
        source: "Critics",
        rating: 4.8,
        comment: "A powerful political warning.",
      },
    ],
  },
  {
    id: "got-storm-of-swords",
    title: "A Storm of Swords",
    author: "George R.R. Martin",
    genre: "fantasy",
    length: "very long",
    pages: 973,
    cover: "../../Assets/Images/A Storm of Swords.jpeg",
    synopsis:
      "Wars rage across Westeros as shocking betrayals and legendary battles reshape the Seven Kingdoms.",
    series: {
      prequels: ["a clash of kings"],
      sequels: ["a feast for crows"],
    },
    reviews: [
      {
        source: "Readers",
        rating: 4.9,
        comment: "The peak of the series.",
      },
      {
        source: "Critics",
        rating: 4.8,
        comment: "Bold, brutal, and unforgettable.",
      },
    ],
  },
  {
    id: "game-of-thrones",
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    genre: "fantasy",
    length: "long",
    pages: 694,
    cover: "../../Assets/Images/A Game of Thrones.jpeg",
    synopsis:
      "Noble families vie for control of the Iron Throne in a brutal medieval world.",
    series: {
      prequels: [],
      sequels: ["a clash of kings"],
    },
    reviews: [
      {
        source: "Readers",
        rating: 4.7,
        comment: "Dark, complex, and gripping.",
      },
      {
        source: "Critics",
        rating: 4.5,
        comment: "Epic storytelling at its finest.",
      },
    ],
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "self help",
    length: "medium",
    pages: 320,
    cover: "../../Assets/Images/Atomic Habits.jpeg",
    synopsis:
      "A practical guide to building good habits and breaking bad ones.",
    series: {
      prequels: [],
      sequels: [],
    },
    reviews: [
      {
        source: "Readers",
        rating: 4.8,
        comment: "Life-changing advice.",
      },
      {
        source: "Critics",
        rating: 4.6,
        comment: "Clear and actionable.",
      },
    ],
  },
  {
    id: "dune",
    title: "Dune",
    author: "Frank Herbert",
    genre: "science fiction",
    length: "long",
    pages: 412,
    cover: "../../Assets/Images/Dune.jpeg",
    synopsis:
      "A young nobleman becomes entangled in politics, prophecy, and war on a desert planet.",
    series: {
      prequels: [],
      sequels: ["dune messiah"],
    },
    reviews: [
      {
        source: "Readers",
        rating: 4.6,
        comment: "Deep and thought-provoking.",
      },
      {
        source: "Critics",
        rating: 4.4,
        comment: "A landmark in sci-fi literature.",
      },
    ],
  },
  {
    id: "harry-potter-6",
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    genre: "fantasy",
    length: "long",
    pages: 607,
    cover: "../../Assets/Images/Harry Potter and the Half-Blood Prince.jpeg",
    synopsis:
      "Harry learns about Voldemort’s past while dark forces tighten their grip on the wizarding world.",
    series: {
      prequels: ["harry potter 5"],
      sequels: ["harry potter 7"],
    },
    reviews: [
      {
        source: "Readers",
        rating: 4.8,
        comment: "Dark, emotional, and revealing.",
      },
      {
        source: "Critics",
        rating: 4.6,
        comment: "A powerful buildup to the finale.",
      },
    ],
  },
  {
    id: "the-alchemist",
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "philosophical",
    length: "short",
    pages: 208,
    cover: "../../Assets/Images/The Alchemist.jpeg",
    synopsis: "A shepherd follows his dreams in search of personal destiny.",
    series: {
      prequels: [],
      sequels: [],
    },
    reviews: [
      {
        source: "Readers",
        rating: 4.4,
        comment: "Inspirational and simple.",
      },
      {
        source: "Critics",
        rating: 4.1,
        comment: "A spiritual journey.",
      },
    ],
  },
  {
    id: "the-martian",
    title: "The Martian",
    author: "Andy Weir",
    genre: "science fiction",
    length: "medium",
    pages: 369,
    cover: "../../Assets/Images/the martian.jpg",
    synopsis:
      "An astronaut must survive alone on Mars using science and ingenuity.",
    series: {
      prequels: [],
      sequels: [],
    },
    reviews: [
      {
        source: "Readers",
        rating: 4.7,
        comment: "Smart and entertaining.",
      },
      {
        source: "Critics",
        rating: 4.5,
        comment: "Science-driven survival done right.",
      },
    ],
  },
  {
    id: "to-kill-a-mockingbird",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "classic",
    length: "medium",
    pages: 281,
    cover: "../../Assets/Images/to kill a mockingbird.jpg",
    synopsis: "A young girl observes racial injustice in the American South.",
    series: {
      prequels: [],
      sequels: [],
    },
    reviews: [
      {
        source: "Readers",
        rating: 4.8,
        comment: "Heartfelt and moving.",
      },
      {
        source: "Critics",
        rating: 4.9,
        comment: "A timeless moral novel.",
      },
    ],
  },
  {
    id: "sherlock-holmes",
    title: "The Hound of the Baskervilles",
    author: "Arthur Conan Doyle",
    genre: "mystery",
    length: "short",
    pages: 256,
    cover: "../../Assets/Images/The Hound of the Baskervilles.jpeg",
    synopsis:
      "Sherlock Holmes investigates a legendary curse on the English moors.",
    series: {
      prequels: [],
      sequels: [],
    },
    reviews: [
      {
        source: "Readers",
        rating: 4.5,
        comment: "Classic detective brilliance.",
      },
      {
        source: "Critics",
        rating: 4.6,
        comment: "One of Holmes' best cases.",
      },
    ],
  },
];

// initial render
renderBooks(books);

nameInput.addEventListener("input", updateUI);
authorInput.addEventListener("input", updateUI);
genreSelect.addEventListener("change", updateUI);

function updateUI() {
  const nameText = nameInput.value.trim().toLowerCase();
  const authorText = authorInput.value.trim().toLowerCase();
  const genre = genreSelect.value;

  const results = [];

  for (let i = 0; i < books.length; i++) {
    const b = books[i];

    const titleOk = nameText === "" || b.title.toLowerCase().includes(nameText);
    const authorOk =
      authorText === "" || b.author.toLowerCase().includes(authorText);
    const genreOk = genre === "" || b.genre === genre;

    if (titleOk && authorOk && genreOk) results.push(b);
  }

  renderBooks(results);
}

function renderBooks(list) {
  booksContainer.innerHTML = "";

  if (list.length === 0) {
    booksContainer.innerHTML = `<p style="text-align: center;">No books found.</p>`;
    return;
  }

  for (let i = 0; i < list.length; i++) {
    const b = list[i];

    const card = document.createElement("div");
    card.className = "book-card";
    card.dataset.id = b.id;

    card.innerHTML = `
                <img src="${b.cover}" alt="${b.title} cover">
                <div class="book-info">
                    <h3>${b.title}</h3>
                    <p>${b.author}</p>
                </div>
                `;

    card.addEventListener("click", () => openModal(b.id));
    booksContainer.appendChild(card);
  }
}

function openModal(bookId) {
  const book = findBookById(bookId);
  if (!book) return;

  mTitle.textContent = book.title;
  mAuthor.textContent = book.author;

  mCover.src = book.cover;
  mCover.alt = book.title + " cover";

  mSynopsis.textContent = book.synopsis;

  fillSeriesList(
    mPrequels,
    book.series && book.series.prequels ? book.series.prequels : []
  );
  fillSeriesList(
    mSequels,
    book.series && book.series.sequels ? book.series.sequels : []
  );

  fillReviews(mReviews, book.reviews || []);

  modalOverlay.classList.remove("hidden");
}

function findBookById(id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) return books[i];
  }
  return null;
}

function fillSeriesList(ul, arr) {
  ul.innerHTML = "";

  if (!arr || arr.length === 0) {
    ul.innerHTML = "<li>None</li>";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.textContent = arr[i];
    ul.appendChild(li);
  }
}

function fillReviews(tbody, reviews) {
  tbody.innerHTML = "";

  for (let i = 0; i < reviews.length; i++) {
    const r = reviews[i];
    const tr = document.createElement("tr");
    tr.innerHTML = `
                <td>${r.source}</td>
                <td>${r.rating}</td>
                <td>${r.comment}</td>
                `;
    tbody.appendChild(tr);
  }
}

// close modal
closeBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

// close when clicking background overlay
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.add("hidden");
});

document.querySelector(".Myform").addEventListener("submit", (e) => {
  e.preventDefault();
});
