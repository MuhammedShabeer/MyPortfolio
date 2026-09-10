/**
 * Executive Portfolio Scripts (2026 Light Theme Edition)
 * Muhammed Shabeer - Partner & CTO
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initPortfolioFilters();
    initContactForm();
    initDynamicYear();
});

/**
 * Navbar Glassmorphism Scroll State
 */
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
    handleScroll();
}

/**
 * Grid Filtering for 26 Architecture Systems
 */
function initPortfolioFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterTabs.length === 0 || portfolioItems.length === 0) return;

    filterTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            // Update ARIA tabs and active button styling
            filterTabs.forEach((t) => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });

            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            const selectedFilter = tab.getAttribute('data-filter');

            portfolioItems.forEach((item) => {
                if (selectedFilter === 'all' || item.classList.contains(selectedFilter)) {
                    item.classList.remove('is-hidden');
                    // Smooth animation frame transition
                    requestAnimationFrame(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    });
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(12px)';
                    item.classList.add('is-hidden');
                }
            });
        });
    });
}

/**
 * Contact Form Direct WhatsApp Integration
 */
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
            alert('Please provide your name and inquiry requirements.');
            return;
        }

        // WhatsApp direct URI payload
        const targetNumber = '97430530362';
        const formattedPayload = `*Executive Strategic Inquiry*\n*Name:* ${name}\n${email ? `*Corporate Email:* ${email}\n` : ''}*Scope / Requirements:* ${message}`;
        const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(formattedPayload)}`;

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
}

/**
 * Dynamic Copyright Year
 */
function initDynamicYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}