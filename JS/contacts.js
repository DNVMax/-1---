document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.contact-card ');
    gsap.from(items, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.1
    });
});