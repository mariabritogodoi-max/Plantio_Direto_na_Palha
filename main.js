document.addEventListener('DOMContentLoaded', () => {
    // Scroll Suave para os links da navegação
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Compensação do Header fixo
                behavior: 'smooth'
            });
        });
    });

    // Animação de Fade-in ao rolar a página
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15, // O elemento aparece quando 15% dele estiver na tela
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para a animação acontecer apenas uma vez
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});