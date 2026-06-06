// MENU

const menuButton = document.getElementById("menu-button");
const sideMenu = document.getElementById("side-menu");
const closeMenu = document.getElementById("close-menu");
const overlay = document.getElementById("menu-overlay");

menuButton.addEventListener("click", () => {
    sideMenu.classList.add("open");
    overlay.classList.add("show");
});

closeMenu.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);

function closeDrawer() {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
}

// SCROLL ANIMATION

const cards = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach(card => {
    observer.observe(card);
});

