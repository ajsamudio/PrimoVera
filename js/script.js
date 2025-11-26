// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 &&
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'visible' class to service cards when they are in the viewport
function animateServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card, .placeholder-section');
    const gridItems = document.querySelectorAll('.grid-item');

    serviceCards.forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('visible');
        } else if (card.classList.contains('visible')) {
            card.classList.remove('visible');
        }
    });

    gridItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('visible');
        } else if (item.classList.contains('visible')) {
            item.classList.remove('visible');
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
            setTimeout(() => {
                desktopNav.style.opacity = '1'; // Start fade in
                headerLogo.style.opacity = '1'; // Start fade in
            }, 10); // Small delay to allow visibility to apply before opacity transition
        } else { // Apply to mobile nav and logo on mobile
            mobileNav.style.visibility = 'visible'; // Show before fade in
            headerLogo.style.visibility = 'visible'; // Show before fade in
            setTimeout(() => {
                mobileNav.style.opacity = '1'; // Start fade in
                headerLogo.style.opacity = '1'; // Start fade in
            }, 10); // Small delay to allow visibility to apply before opacity transition
        }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});


// --- Image Modal JavaScript ---
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeButton = document.getElementsByClassName('close-button')[0];

    // Get all grid items
    const gridItems = document.querySelectorAll('.image-grid .grid-item');

    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            modal.classList.add('active');
            modalImage.src = this.querySelector('img').src;
            captionText.innerHTML = this.querySelector('p').innerHTML;
        });
    });

    // When the user clicks on <span> (x), close the modal
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.classList.remove('active');
        });
    }

    // When the user clicks anywhere outside of the image, close it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.classList.remove('active');
        }
    });
});

// --- Carousel JavaScript ---
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselImages = document.querySelectorAll('.carousel-img');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;
    let intervalId;

    function updateCarousel() {
        carouselImages.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        updateCarousel();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
        updateCarousel();
    }

    // Button event listeners
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            prevImage();
            clearInterval(intervalId); // Stop auto-scroll on manual navigation
            startCarousel(); // Restart auto-scroll
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            nextImage();
            clearInterval(intervalId); // Stop auto-scroll on manual navigation
            startCarousel(); // Restart auto-scroll
        });
    }

    function startCarousel() {
        intervalId = setInterval(nextImage, 3500); // Change image every 3 seconds
    }

    // Start carousel on page load
    if (carouselImages.length > 0) {
        updateCarousel();
        startCarousel();
    }

    // Stop carousel when mouse is over
    // if (carouselContainer) {
    //     carouselContainer.addEventListener('mouseover', () => {
    //         clearInterval(intervalId);
    //     });

    //     carouselContainer.addEventListener('mouseout', () => {
    //         startCarousel();
    //     });
    // }
});
