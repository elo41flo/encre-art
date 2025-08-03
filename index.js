    // Gestion de l'affichage du menu
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menu.style.display = isExpanded ? 'none' : 'block';
        menuButton.setAttribute('aria-expanded', !isExpanded);
    });

  const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

function visibleCount() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) return 3;
  if (screenWidth >= 768) return 2;
  return 1; // mobile
}

function updateCarousel() {
  const imageWidth = carouselImages.clientWidth / visibleCount();
  carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
  if (currentIndex < images.length - visibleCount()) {
    currentIndex++;
    updateCarousel();
  }
});

document.querySelector('.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener('resize', () => {
  updateCarousel();
});

window.addEventListener('load', updateCarousel);




        document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggle-dark-mode');
  if (!button) {
    console.error('Bouton non trouvé');
    return;
  }

  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
