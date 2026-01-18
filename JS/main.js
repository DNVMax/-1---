document.addEventListener("DOMContentLoaded", () => {
    // Бургер-меню функциональность
    const hamburger = document.getElementById("hamburger");
    const navItems = document.getElementById("navItems");
    const navOverlay = document.getElementById("navOverlay");

    if (hamburger && navItems && navOverlay) {
        // Открыть/закрыть меню при клике на бургер
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navItems.classList.toggle("active");
            navOverlay.classList.toggle("active");
        });

        // Закрыть меню при клике на ссылку
        const navLinks = navItems.querySelectorAll(".navs");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navItems.classList.remove("active");
                navOverlay.classList.remove("active");
            });
        });

        // Закрыть меню при клике на overlay
        navOverlay.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navItems.classList.remove("active");
            navOverlay.classList.remove("active");
        });
    }

    const bth = document.querySelector(".bth");
    if (bth) {
        bth.addEventListener("mouseenter", () => {
            gsap.to(bth, {
                scale: 1.05,
                duration: 0.3
            });
        });
        bth.addEventListener("mouseleave", () => {
            gsap.to(bth, {
                scale: 1,
                duration: 0.3
            });
        });
    }

    const h1 = document.querySelectorAll("h1");
    const h2 = document.querySelectorAll("h2");
    const stbth = document.querySelectorAll(".start-bth");
    const socseti = document.querySelectorAll(".soc-seti");

    if (h1.length > 0) {
        gsap.from(h1, {
            opacity: 0,
            x: -90,
            stagger: 0.1,
            duration: 1,
            ease: 'power2.out'
        });
    }

    if (h2.length > 0) {
        gsap.from(h2, {
            opacity: 0,
            x: -100,
            stagger: 0.1,
            duration: 1.5,
            ease: 'power2.out'
        });
    }

    if (stbth.length > 0) {
        gsap.from(stbth, {
            opacity: 0,
            x: -110,
            stagger: 0.1,
            duration: 2,
            ease: 'power2.out'
        });
    }

    if (socseti.length > 0) {
        gsap.from(socseti, {
            opacity: 0,
            x: -130,
            stagger: 0.1,
            duration: 2.5,
            ease: 'power2.out'
        });
    }
});