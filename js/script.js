<<<<<<< HEAD
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        heroSection.classList.add('scrolled');
    } else {
        heroSection.classList.remove('scrolled');
    }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'visible' class to service cards when they are in the viewport
function animateServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('visible');
        }
    });
}

// Initial check on page load
animateServiceCards();

// Check for animation on scroll
window.addEventListener('scroll', animateServiceCards);

// Function to add 'visible' class to the logo overlay on page load
function showLogoOverlay() {
    const logoOverlay = document.querySelector('.logo-overlay');
    if (logoOverlay) {
        logoOverlay.classList.add('visible');
    }
}

// Show the logo overlay when the page loads
window.addEventListener('load', showLogoOverlay);
=======
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
>>>>>>> 7394bda3b7a92bce6875b33f60ff7b0aa822cf16
