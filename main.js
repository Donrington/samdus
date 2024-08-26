
// Change Navbar Style on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Intersection Observer for Animations
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.1 }); // Trigger animation when 10% of the element is visible

    // Observe each element
    document.querySelectorAll('.slide-up, .fade-in, .bounce-in').forEach(element => {
        observer.observe(element);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    
    sliderTrack.addEventListener('mouseenter', () => {
        sliderTrack.style.animationPlayState = 'paused'; // Pause animation on hover
    });

    sliderTrack.addEventListener('mouseleave', () => {
        sliderTrack.style.animationPlayState = 'running'; // Resume animation on mouse leave
    });
});
