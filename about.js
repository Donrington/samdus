
   // Wait until the document is fully loaded
   document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Initialize AOS animations (Animate On Scroll)
    AOS.init({
        duration: 1000,  // Animation duration
        easing: 'ease-in-out',  // Smooth easing
        once: true,  // Whether animation should happen only once
        mirror: false,  // Whether elements should animate out while scrolling past them
    });
    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.addEventListener('click', function() {
        window.scrollTo({
            top: document.querySelector('.content-section').offsetTop,
            behavior: 'smooth'
        });
    });
    // Scroll indicator (for hero section)

    const heroSection = document.querySelector(".hero-section");

    // Hide the scroll indicator when scrolled past the hero section
    window.addEventListener("scroll", function () {
        if (window.scrollY > heroSection.clientHeight) {
            scrollIndicator.style.opacity = "0";
        } else {
            scrollIndicator.style.opacity = "1";
        }
    });

    // Sticky navigation bar effect (optional, based on preference)
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    // Back-to-top button functionality
    const backToTopBtn = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 600) {
            backToTopBtn.style.opacity = "1";
            backToTopBtn.style.visibility = "visible";
        } else {
            backToTopBtn.style.opacity = "0";
            backToTopBtn.style.visibility = "hidden";
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Lazy loading for images
    const lazyImages = document.querySelectorAll("img[data-src]");

    const lazyLoad = (target) => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute("data-src");

                    if (src) {
                        img.src = src;
                        img.removeAttribute("data-src");
                    }

                    observer.unobserve(img);
                }
            });
        });

        observer.observe(target);
    };

    lazyImages.forEach(lazyLoad);

    // Hero section text fade-in effect
    const heroTitle = document.querySelector(".hero-title");
    const heroSubtitle = document.querySelector(".hero-subtitle");
    const heroDescription = document.querySelector(".hero-description");

    // Add fade-in effect when page loads
    window.addEventListener("load", function () {
        setTimeout(function () {
            heroSubtitle.classList.add("fade-in");
        }, 300);

        setTimeout(function () {
            heroTitle.classList.add("fade-in");
        }, 600);

        setTimeout(function () {
            heroDescription.classList.add("fade-in");
        }, 900);
    });

    // Testimonials slider (optional if you add one)
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (testimonialsSlider) {
        const slider = new Swiper('.testimonials-slider', {
            loop: true,
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
});

// Change Navbar Style on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
