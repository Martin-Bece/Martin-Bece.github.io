let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Ocultar la imagen actual
    slides[currentIndex].classList.remove('active');

    // Calcular el nuevo índice
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // Mostrar la nueva imagen
    slides[currentIndex].classList.add('active');

    // Mover el carrusel
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
