document.addEventListener('DOMContentLoaded', () => {
    // 1. ANIMAÇÃO DE CARREGAMENTO INICIAL DO HEADER
    const header = document.querySelector('header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        header.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100); 
    }
(sections e footer)
    const sectionsToAnimate = document.querySelectorAll('main section, footer');
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Otimização: para de observar após animar
                observer.unobserve(entry.target); 
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);
    sectionsToAnimate.forEach(section => {
        section.classList.add('scroll-reveal');
        scrollObserver.observe(section);
    });
});