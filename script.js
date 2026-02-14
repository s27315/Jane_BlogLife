// GLOBAL SCORE
let score = 0;

// DOM SELECTION
const scoreDisplay = document.querySelector("#score");
const likeButtons = document.querySelectorAll(".like-btn");
const searchInput = document.querySelector("#searchInput");
const posts = document.querySelectorAll(".post");
const tags = document.querySelectorAll(".tag");
const blogHeading = document.querySelector("#blogHeading");
const backToTop = document.querySelector("#backToTop");


// ---------------------------
// SCORE FUNCTION
// ---------------------------
function updateScore() {
  score++;
  scoreDisplay.innerText = score;

  if (score >= 10) {
    scoreDisplay.style.color = "gold";
  }
}

// Like Button Logic
likeButtons.forEach(button => {
  button.addEventListener("click", updateScore);
});


// ---------------------------
// SEARCH FUNCTIONALITY
// ---------------------------
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  posts.forEach(post => {
    const text = post.innerText.toLowerCase();

    if (text.includes(value)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
});


// ---------------------------
// TAG FILTERING
// ---------------------------
tags.forEach(tag => {
  tag.addEventListener("click", () => {

    const tagName = tag.innerText;

    blogHeading.innerText = `${tagName} Articles`;

    posts.forEach(post => {
      if (post.dataset.tag === tagName) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });

  });
});


// ---------------------------
// BACK TO TOP
// ---------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
