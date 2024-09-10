document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.addEventListener('click', function() {
        window.scrollTo({
            top: document.querySelector('.operational-section').offsetTop,
            behavior: 'smooth'
        });
    });

    const ctaButton = document.querySelector('.btn');
    ctaButton.addEventListener('click', function() {
        window.location.href = 'contact.html';
    });

    const contentBoxes = document.querySelectorAll('.content-box');
    contentBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'translateY(-5px)';
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'translateY(0)';
        });
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