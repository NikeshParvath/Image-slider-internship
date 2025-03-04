let index = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalSlides = images.length;

document.querySelector('.next').addEventListener('click', () => moveSlide(1));
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));

function moveSlide(step) {
    index = (index + step + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(() => moveSlide(1), 3000); // Auto-slide every 3 seconds
