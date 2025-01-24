const sliders = document.querySelectorAll('.project-slider');

sliders.forEach((slider) => {
    const sliderImages = slider.querySelector('.slider-images');
    const images = slider.querySelectorAll('.slider-images img');
    const leftArrow = slider.querySelector('.arrow.left');
    const rightArrow = slider.querySelector('.arrow.right');
    let currentIndex = 0;

    function updateSlider() {
        sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function moveLeft() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateSlider();
    }

    function moveRight() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateSlider();
    }

    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);
});