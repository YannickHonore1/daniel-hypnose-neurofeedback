let slideIndex = 0;
let newIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index, direction) {
  if (index < 0) {
    slideIndex = slides.length-1;
  } else if (index > slides.length-1) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active', 'previous', 'next');
  }

  slides[slideIndex].classList.add('active', direction);

  if (direction == 'next') {
    newIndex = slideIndex-1;
    if (newIndex < 0) {
      newIndex = slides.length-1;
    }
  } else if (direction == 'previous') {
    newIndex = slideIndex+1;
    if (newIndex > slides.length-1) {
      newIndex = 0
    }
  }
  
  slides[newIndex].classList.add(direction);
}

function nextSlide() {
  showSlide(++slideIndex, 'next');
}

function prevSlide() {
  showSlide(--slideIndex, 'previous');
}

function startSlider() {
  setInterval(nextSlide, 7000); // 7000 milliseconds = 7 seconds
}

showSlide(slideIndex, null);
startSlider(); // Démarrer le minuteur