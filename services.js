document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Run on page load
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// JavaScript for Fade-in Effect on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll('.testimonial-card');

    const observerOptions = {
        threshold: 0.2
    };

    const fadeInOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

    testimonials.forEach(testimonial => {
        observer.observe(testimonial);
        testimonial.classList.add('fade-in');
    });
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