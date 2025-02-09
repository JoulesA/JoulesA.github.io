document.addEventListener("DOMContentLoaded", function () {
    const duplicates = document.querySelectorAll(".scroll-content");

    duplicates.forEach(content => {
        const clone = content.cloneNode(true);
        content.parentElement.appendChild(clone);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const phrases = ["Ingeniero Biónico", "Programador", "Consultor"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 100;
    const typingElement = document.querySelector(".typing-text");
    
    function typeEffect() {
        let currentPhrase = phrases[index];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex--);
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex++);
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            setTimeout(() => isDeleting = true, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % phrases.length;
        }
        
        setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    }
    
    typeEffect();
});

const serviceToggles = document.querySelectorAll('.service-toggle');

serviceToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const details = document.getElementById(toggle.getAttribute('aria-controls'));
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        // Cambia el estado de aria-expanded
        toggle.setAttribute('aria-expanded', !isExpanded);

        // Muestra u oculta el contenido
        details.hidden = isExpanded;

        //  No necesitas agregar/quitar clases CSS, el atributo "hidden" se encarga de eso

    });
});