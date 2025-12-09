const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

// --- Gestion du Thème (Code précédent) ---
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
        toggleButton.textContent = '🌙';
    }
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        toggleButton.textContent = '🌙';
        localStorage.setItem('theme', 'light-mode');
    } else {
        toggleButton.textContent = '☀️';
        localStorage.removeItem('theme');
    }
});

// --- Gestion du Menu Hamburger ---

// Quand on clique sur le hamburger
hamburger.addEventListener("click", () => {
    // On active/désactive le menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Quand on clique sur un lien du menu, on ferme le menu
navLink.forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));