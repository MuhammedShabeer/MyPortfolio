/**
 * Executive Portfolio Scripts
 * Muhammed Shabeer - Partner & CTO
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initContactForm();
    initProjectFilters();
    initCurrentYear();
});

// Dynamic Navbar Background on Scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on load
}

// Contact Form & Direct WhatsApp Ingestion
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const messageInput = document.getElementById('contact-message');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';

        if (!name || !message) {
            alert('Please provide your name and project scope.');
            return;
        }

        // WhatsApp direct inquiry payload
        const phoneNumber = '97430530362';
        const formattedText = `*Executive Inquiry*\n*Name:* ${name}\n${email ? `*Email:* ${email}\n` : ''}*Message:* ${message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedText)}`;

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
}

// Accessible Project Filtering without Grid Breakdown
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterButtons.length === 0 || projectItems.length === 0) return;

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            // Update active state & ARIA tabs
            filterButtons.forEach((b) => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });

            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const targetFilter = btn.getAttribute('data-filter');

            projectItems.forEach((item) => {
                if (targetFilter === 'all' || item.classList.contains(targetFilter)) {
                    item.classList.remove('is-hidden');
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                } else {
                    item.classList.add('is-hidden');
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';
                }
            });
        });
    });
}

// Current Dynamic Footer Year
function initCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}