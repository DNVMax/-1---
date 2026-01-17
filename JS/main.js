document.addEventListener("DOMContentLoaded", () => {

    const bth = document.querySelector(".bth");
    bth.addEventListener("mouseenter", () =>{
        gsap.to(bth, {
            scale: 1.05,
            duration: 0.3
        });

    });
    bth.addEventListener("mouseleave", () =>{
         gsap.to(bth, {
            scale: 1,
            duration: 0.3
        });
    });
   const h1 = document.querySelectorAll("h1")
   const h2 = document.querySelectorAll("h2")
   const stbth = document.querySelectorAll(".start-bth")
   const socseti = document.querySelectorAll(".soc-seti")
    gsap.from(h1, {
        opacity: 0,
        x: -90,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out'
    })
    gsap.from(h2, {
        opacity: 0,
        x: -100,
        stagger: 0.1,
        duration: 1.5,
        ease: 'power2.out'
    })
    gsap.from(stbth, {
        opacity: 0,
        x: -110,
        stagger: 0.1,
        duration: 2,
        ease: 'power2.out'
    })
    gsap.from(socseti, {
        opacity: 0,
        x: -130,
        stagger: 0.1,
        duration: 2.5,
        ease: 'power2.out'
    })


});