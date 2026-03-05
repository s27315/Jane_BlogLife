const subscribeBtn = document.querySelector(".subscribe-btn");
const modal = document.querySelector("#subscribeModal");
const closeBtn = document.querySelector(".close-btn");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const navLinks = document.querySelectorAll(".nav-link");
const postCards = document.querySelectorAll(".post-card");
const tags = document.querySelectorAll(".tag");
const likeButtons = document.querySelectorAll(".like-btn");
const scoreElement = document.querySelector("#engagementScore");
const heading = document.querySelector("#postHeading");
const noResults = document.querySelector("#noResults");
const backToTop = document.querySelector("#backToTop");

let score = 0;
let activeTag = "all";

function normalize(text) {
    return text.toLowerCase().trim();
}

function updateScore() {
    score += 1;
    scoreElement.innerText = score;

    if (score >= 10) {
        scoreElement.classList.add("gold");
    } else {
        scoreElement.classList.remove("gold");
    }
}

function updateHeading(tagValue) {
    if (tagValue === "all") {
        heading.innerText = "All Fashion Posts";
        document.title = "Jane Bloglife Clone";
        return;
    }

    const prettyTag = `${tagValue.charAt(0).toUpperCase()}${tagValue.slice(1)}`;
    heading.innerText = `${prettyTag} Posts`;
    document.title = `Jane Bloglife - ${prettyTag}`;
}

function filterPosts() {
    const query = normalize(searchInput.value);
    let visibleCount = 0;

    postCards.forEach((post) => {
        const textMatches = post.innerText.toLowerCase().includes(query);
        const tagList = normalize(post.dataset.tags || "");
        const tagMatches = activeTag === "all" || tagList.includes(activeTag);
        const isVisible = textMatches && tagMatches;

        post.classList.toggle("hidden", !isVisible);

        if (isVisible) {
            visibleCount += 1;
        }
    });

    noResults.classList.toggle("hidden", visibleCount > 0);
}

function setActiveTag(tagValue) {
    activeTag = normalize(tagValue);
    updateHeading(activeTag);
    filterPosts();

    tags.forEach((tag) => {
        tag.classList.toggle("active", tag.dataset.tag === activeTag);
    });
}

if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.classList.add("hidden");
    }

    if (event.key === "/" && document.activeElement !== searchInput) {
        event.preventDefault();
        searchInput.focus();
    }
});

searchInput.addEventListener("input", filterPosts);
searchBtn.addEventListener("click", () => searchInput.focus());

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        if (link.dataset.filter) {
            setActiveTag(link.dataset.filter);
        }
    });
});

tags.forEach((tag) => {
    tag.addEventListener("click", () => {
        setActiveTag(tag.dataset.tag);
    });
});

likeButtons.forEach((button) => {
    button.addEventListener("click", updateScore);
});

window.addEventListener("scroll", () => {
    backToTop.classList.toggle("hidden", window.scrollY <= 200);
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

setActiveTag("all");
filterPosts();
