document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.querySelector('.slides');
    const slides = slidesContainer.querySelectorAll('img');
    const slidesText = slidesContainer.querySelectorAll('p');
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.opacity = 1;
            } else {
                slide.style.opacity = 0;
            }
        });
        
        slidesText.forEach((slide, i) => {
            if (i === index) {
                slide.style.opacity = 1;
            } else {
                slide.style.opacity = 0;
            }
        });

    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    setInterval(nextSlide, 10000);
})