document.addEventListener('DOMContentLoaded', function() {
    
    // Cible la barre de navigation
    const header = document.querySelector('header');

    // Ajoute un écouteur d'événement pour le défilement (scroll)
    window.addEventListener('scroll', function() {
        // Si l'utilisateur a défilé de plus de 50 pixels vers le bas
        if (window.scrollY > 50) {
            // Ajoute la classe 'scrolled' au header
            header.classList.add('scrolled');
        } else {
            // Sinon, retire la classe 'scrolled'
            header.classList.remove('scrolled');
        }
    });

});
