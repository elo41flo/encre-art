    // Gestion de l'affichage du menu
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menu.style.display = isExpanded ? 'none' : 'block';
        menuButton.setAttribute('aria-expanded', !isExpanded);
    });

    // Fonction pour déplacer les slides d'un carrousel spécifique
        function moveSlide(direction, carouselId) {
            const carousel = document.getElementById(carouselId);
            const images = carousel.querySelector('.carousel-images');
            const totalImages = images.children.length;
            const imagesToShow = 3; // Nombre d'images visibles
            const imageWidth = 310; // Largeur de l'image (300px + 10px de margin)

            let currentIndex = parseInt(carousel.getAttribute('data-current-index')) || 0;

            currentIndex += direction;

            // Limiter l'index
            if (currentIndex < 0) {
                currentIndex = totalImages - imagesToShow; // Revenir au début
            } else if (currentIndex > totalImages - imagesToShow) {
                currentIndex = 0; // Revenir à la première image
            }

            const translateX = -currentIndex * imageWidth; // Translation en pixels
            images.style.transform = `translateX(${translateX}px)`;

            // Mettre à jour l'index actuel
            carousel.setAttribute('data-current-index', currentIndex);
        }

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
