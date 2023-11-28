window.onload = function () {
    const body = document.body;
    body.style.visibility = 'visible'; // Показываем контент после полной загрузки

    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    function checkAllImagesLoaded() {
        loadedImages++;
        if (loadedImages === images.length) {
            body.style.visibility = 'visible'; // Показываем контент после загрузки всех изображений
        }
    }

    images.forEach((image) => {
        if (image.complete) {
            checkAllImagesLoaded();
        } else {
            image.addEventListener('load', checkAllImagesLoaded);
        }
    });
    const containers = document.querySelectorAll('.container');

    containers.forEach((element, index) => {
        anime({
            targets: element,
            opacity: 1,
            duration: 1500,
            easing: 'easeInOutQuad',
            delay: index * 200,
        });
    });
};

document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    showSlide(currentSlide);
  
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
  });
  