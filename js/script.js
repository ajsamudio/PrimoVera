document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the file selected by the user
        const fileInput = document.querySelector('#file-upload');
        const file = fileInput.files[0];

        // Use FileReader to read the file as a data URL
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileDataURL = e.target.result;

            // Create a new form data object
            const formData = new FormData(form);

            // Append the file data URL to the form data
            formData.append('attachment', fileDataURL);

            // Send the form data to FormSubmit using the Fetch API
            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Form submitted successfully!');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            });
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            // If no file is selected, still submit the form data
            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Form submitted successfully!');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            });
        }
    });
});

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

const sections = document.querySelectorAll('.fade-in-section');
const gridItems = document.querySelectorAll('.fade-in-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});

gridItems.forEach(item => {
  observer.observe(item);
});

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
