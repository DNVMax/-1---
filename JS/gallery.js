document.addEventListener("DOMContentLoaded", () => {
     const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем класс active у всех кнопок и добавляем его к выбранной
            filterButtons.forEach(btn => btn.classList.remove('active'));
            

            const category = button.getAttribute('data-category');

            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (category === 'all' || category === itemCategory) {
                    gsap.to(item, { opacity: 1, duration: 0.3, y: 0 });
                    item.style.display = 'block';
                } else {
                    gsap.to(item, { opacity: 0, duration: 0.3, y: 50 });
                    item.style.display = 'none';
                }
            });
        });
    });

    // Изначальная анимация для всех элементов при загрузке страницы
    gsap.from(galleryItems, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out'
    });
});