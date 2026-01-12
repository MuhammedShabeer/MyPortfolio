// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');
const body = document.body;
const navbar = document.querySelector('.navbar');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    if (theme === 'light') {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
        themeToggle.classList.remove('text-white');
        themeToggle.classList.add('text-dark');

        // Update navbar toggler icon color for visibility
        document.querySelector('.navbar-toggler-icon').style.filter = 'invert(0)';
    } else {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
        themeToggle.classList.remove('text-dark');
        themeToggle.classList.add('text-white');

        // Return navbar toggler icon to white
        document.querySelector('.navbar-toggler-icon').style.filter = 'invert(1)';
    }
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

console.log("Portfolio loaded with Theme Support.");
