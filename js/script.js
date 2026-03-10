// --- Scroll-in Animations ---
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function animateOnScroll() {
    document.querySelectorAll('.service-card, .about-section, .placeholder-section, .grid-item, .contact-section').forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

animateOnScroll();

// --- Carousel ---
function initCarousel(containerSelector, dotsContainerId) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const images = container.querySelectorAll('.carousel-img');
    const prev = container.querySelector('.carousel-button.prev');
    const next = container.querySelector('.carousel-button.next');
    if (!images.length) return;

    let index = 0;
    let timer;

    const dotsContainer = dotsContainerId ? document.getElementById(dotsContainerId) : null;

    // Build dots if container provided
    if (dotsContainer && images.length) {
        images.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
            dot.addEventListener('click', () => { index = i; update(); clearInterval(timer); start(); });
            dotsContainer.appendChild(dot);
        });
    }

    function update() {
        images.forEach((img, i) => img.classList.toggle('active', i === index));
        if (dotsContainer) {
            dotsContainer.querySelectorAll('.carousel-dot')
                .forEach((dot, i) => dot.classList.toggle('active', i === index));
        }
    }

    function advance() {
        index = (index + 1) % images.length;
        update();
    }

    function back() {
        index = (index - 1 + images.length) % images.length;
        update();
    }

    function start() {
        timer = setInterval(advance, 3500);
    }

    if (prev) prev.addEventListener('click', () => { back(); clearInterval(timer); start(); });
    if (next) next.addEventListener('click', () => { advance(); clearInterval(timer); start(); });

    update();
    start();
}

// --- Mobile Navigation ---
document.addEventListener('DOMContentLoaded', function () {
    // Carousels — hero gets dots, projects carousel does not
    initCarousel('.hero .carousel-container', 'hero-dots');
    initCarousel('.carousel-container.projects-carousel');

    // Hamburger menu toggle
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', function () {
            document.body.classList.toggle('mobile-menu-open');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', function () {
            document.body.classList.remove('mobile-menu-open');
        });
    });

    // --- Image Modal ---
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeButton = document.querySelector('.close-button');

    document.querySelectorAll('.grid-container .grid-item').forEach(item => {
        item.addEventListener('click', function () {
            modal.classList.add('active');
            modalImage.src = this.querySelector('img').src;

            // Walk up to grid-container, then get preceding .image-grid sibling for metadata
            const gridContainer = this.closest('.grid-container');
            const imageGrid = gridContainer ? gridContainer.previousElementSibling : null;
            const projectTitle = imageGrid ? imageGrid.querySelector('.project-title') : null;
            const projectLoc = imageGrid ? imageGrid.querySelector('.project-location') : null;

            if (projectTitle) {
                const locText = projectLoc ? projectLoc.textContent.trim() : '';
                captionText.innerHTML = '<strong>' + projectTitle.textContent + '</strong>' +
                    (locText ? '<span>' + locText + '</span>' : '');
            } else {
                captionText.innerHTML = this.querySelector('img').alt || '';
            }
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', function () {
            modal.classList.remove('active');
        });
    }

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });

    // --- Project Filter ---
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            document.querySelectorAll('.project-block').forEach(block => {
                if (filter === 'all' || block.dataset.category === filter) {
                    block.classList.remove('hidden');
                } else {
                    block.classList.add('hidden');
                }
            });
        });
    });


    // --- Form Submission Feedback ---
    const contactForm = document.querySelector('.contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');
    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', function () {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            if (formStatus) {
                formStatus.className = 'form-status loading';
                formStatus.textContent = 'Submitting your inquiry...';
            }
            // Re-enable after 8s in case of network issue
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Inquiry';
                if (formStatus) formStatus.className = 'form-status';
            }, 8000);
        });
    }
});

// --- Unified Scroll Handler (header hide/show + FAB hide/show + animations) ---
const mainHeader = document.querySelector('header');
const fabContainer = document.querySelector('.floating-social-fab');
let lastScrollTop = 0;
let scrollDownCount = 0;

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isMobileView = window.getComputedStyle(document.querySelector('.mobile-nav')).display !== 'none';
    const desktopNav = document.querySelector('.desktop-nav');
    const headerLogo = document.querySelector('.header-logo-container');
    const mobileNav = document.querySelector('.mobile-nav');

    // Header hide/show
    if (scrollTop > lastScrollTop) {
        scrollDownCount++;
        if (scrollDownCount >= 2) {
            mainHeader.style.transform = 'translateY(-100%)';
            mainHeader.style.transition = 'transform 0.3s ease';

            const navEl = isMobileView ? mobileNav : desktopNav;
            navEl.style.opacity = '0';
            headerLogo.style.opacity = '0';
            setTimeout(() => {
                navEl.style.visibility = 'hidden';
                headerLogo.style.visibility = 'hidden';
            }, 300);
        }
    } else {
        scrollDownCount = 0;
        mainHeader.style.transform = 'translateY(0)';

        const navEl = isMobileView ? mobileNav : desktopNav;
        navEl.style.visibility = 'visible';
        headerLogo.style.visibility = 'visible';
        setTimeout(() => {
            navEl.style.opacity = '1';
            headerLogo.style.opacity = '1';
        }, 10);
    }

    // FAB hide/show
    if (fabContainer) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            fabContainer.style.transform = 'translateY(100px)';
            fabContainer.style.opacity = '0';
        } else {
            fabContainer.style.transform = 'translateY(0)';
            fabContainer.style.opacity = '1';
        }
    }


    // Scroll animations
    animateOnScroll();

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// --- Floating Social FAB toggle ---
document.addEventListener('DOMContentLoaded', function () {
    const fabButton = document.getElementById('fabButton');
    if (fabButton && fabContainer) {
        fabButton.addEventListener('click', function () {
            fabContainer.classList.toggle('active');
        });
    }
});
