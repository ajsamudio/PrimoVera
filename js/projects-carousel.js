document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container.projects-carousel');
    const carouselImages = document.querySelectorAll('.carousel-container.projects-carousel .carousel-img');
    const prevButton = document.querySelector('.carousel-container.projects-carousel .carousel-button.prev');
    const nextButton = document.querySelector('.carousel-container.projects-carousel .carousel-button.next');
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
});
