// Navbar Scroll Effect and Scroll Animations

const navbar = document.querySelector('.navbar');

// Navbar transparency on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Select elements to animate
// Include everything that already has the class, plus common elements we want to animate automatically
const elementsToAnimate = document.querySelectorAll('.fade-up-element, .animate-on-scroll, .card, h2, h1, .btn');

elementsToAnimate.forEach((el) => {
    el.classList.add('fade-up-element'); // Ensure class is present
    observer.observe(el);
});

console.log("Premium Portfolio Loaded.");

// WhatsApp Form Logic
const btnSendWhatsapp = document.getElementById('btn-send-whatsapp');

if (btnSendWhatsapp) {
    btnSendWhatsapp.addEventListener('click', () => {
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();

        if (!name || !message) {
            alert('Please enter your Name and Message.');
            return;
        }

        // Construct the WhatsApp URL
        const phoneNumber = '97430530362';
        const text = `Hi, I am ${name}${email ? ` (${email})` : ''}. ${message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        // Open in new tab
        window.open(whatsappUrl, '_blank');
    });
}
