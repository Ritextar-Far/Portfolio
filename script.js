document.addEventListener('DOMContentLoaded', () => {
    // Création de l'observateur pour déclencher les animations quand l'élément est visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optionnel : observer.unobserve(entry.target) si tu veux que l'animation ne se joue qu'une fois
            }
        });
    }, {
        threshold: 0.1, // Déclenche quand 10% de l'élément est visible
        rootMargin: "0px 0px -50px 0px"
    });

    // Cibler tous les éléments avec la classe .reveal
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
});
