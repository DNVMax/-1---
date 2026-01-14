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

    

});