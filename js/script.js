// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0 &&
        rect.left >= 0 &&
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

// Function to add 'visible' class to contact section when they are in the viewport
function animateContactSection() {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        if (isInViewport(contactSection)) {
            contactSection.classList.add('visible');
        }
    }
}

// Initial check on page load
animateContactSection();

// Check for animation on scroll
window.addEventListener('scroll', animateContactSection);

// Function to add 'visible' class to the logo overlay on page load
function showLogoOverlay() {
    const logoOverlay = document.querySelector('.logo-overlay');
    if (logoOverlay) {
        logoOverlay.classList.add('visible');
    }
}

// Show the logo overlay when the page loads
window.addEventListener('load', showLogoOverlay);

// --- Mobile Navigation JavaScript ---
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const body = document.body;

    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', function () {
            body.classList.toggle('mobile-menu-open');
        });
    }
});

// --- Desktop Navigation Hide/Show on Scroll ---
let lastScrollTop = 0;
let scrollDownCount = 0;
const desktopNav = document.querySelector('.desktop-nav');
const headerLogo = document.querySelector('.header-logo-container'); // Get header logo element
const mobileNav = document.querySelector('.mobile-nav'); // Get mobile nav element

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if in mobile view by checking if mobileNav is displayed
    const isMobileView = window.getComputedStyle(mobileNav).display !== 'none';

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        scrollDownCount++;
        // Edit the number '2' below to change the scroll amount needed to hide the elements
        if (scrollDownCount >= 2) { 
            if (!isMobileView) { // Apply to desktop nav and logo on desktop
                desktopNav.style.opacity = '0'; // Start fade out
                headerLogo.style.opacity = '0'; // Start fade out
                setTimeout(() => {
                    desktopNav.style.visibility = 'hidden'; // Hide after fade out
                    headerLogo.style.visibility = 'hidden'; // Hide after fade out
                }, 300); // Match CSS transition duration
            } else { // Apply to mobile nav and logo on mobile
                mobileNav.style.opacity = '0'; // Start fade out
                headerLogo.style.opacity = '0'; // Start fade out
                 setTimeout(() => {
                    mobileNav.style.visibility = 'hidden'; // Hide after fade out
                    headerLogo.style.visibility = 'hidden'; // Hide after fade out
                }, 300); // Match CSS transition duration
            }
        }
    } else {
        // Scrolling up
        scrollDownCount = 0; // Reset the counter
        if (!isMobileView) { // Apply to desktop nav and logo on desktop
            desktopNav.style.visibility = 'visible'; // Show before fade in
            headerLogo.style.visibility = 'visible'; // Show before fade in
            desktopNav.style.opacity = '1'; // Start fade in
            headerLogo.style.opacity = '1'; // Start fade in
        } else { // Apply to mobile nav and logo on mobile
            mobileNav.style.visibility = 'visible'; // Show before fade in
            headerLogo.style.visibility = 'visible'; // Show before fade in
            mobileNav.style.opacity = '1'; // Start fade in
            headerLogo.style.opacity = '1'; // Start fade in
        }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

// --- Image Carousel JavaScript ---
document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelectorAll('.carousel-img');
    let currentImageIndex = 0;

    function showImage(index) {
        carouselImages.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        showImage(currentImageIndex);
    }

    // Show the first image initially
    showImage(currentImageIndex);

    // Automatically switch images every 5 seconds (adjust as needed)
    let carouselInterval = setInterval(nextImage, 5000);

    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    function changeImage(direction) {
        clearInterval(carouselInterval); // Clear the automatic interval

        if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        } else if (direction === 'prev') {
            currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
        }

        showImage(currentImageIndex);

        // Restart the automatic interval after a delay (e.g., 10 seconds)
        carouselInterval = setInterval(nextImage, 10000);
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => changeImage('prev'));
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => changeImage('next'));
    }

});
