
document.addEventListener('DOMContentLoaded', function() {

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

  
    const animatedElements = document.querySelectorAll('.problem-item, .direct-route-card, .problem__title, .problem__subtitle, .direct-route-title, .direct-route-subtitle');
    
    animatedElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });


    const heroImage = document.querySelector('.direct-route-item-1-img img');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroImage.style.transform = `translateY(${parallax}px)`;
        });
    }


    const titles = document.querySelectorAll('.problem__title, .direct-route-title');
    titles.forEach((title, index) => {
        title.classList.add('fade-in-up');
        title.style.animationDelay = `${0.8 + index * 0.2}s`;
    });


    const subtitles = document.querySelectorAll('.problem__subtitle, .direct-route-subtitle');
    subtitles.forEach((subtitle, index) => {
        subtitle.classList.add('fade-in-up');
        subtitle.style.animationDelay = `${1.0 + index * 0.2}s`;
    });

    const problemCards = document.querySelectorAll('.problem-card');
    problemCards.forEach((card, index) => {
        card.classList.add('scale-in');
        card.style.animationDelay = `${0.3 + index * 0.1}s`;
    });

    const directRouteCards = document.querySelectorAll('.direct-route-card');
    directRouteCards.forEach((card, index) => {
        card.style.animationDelay = `${2.0 + index * 0.2}s`;
    });

    const problemItems = document.querySelectorAll('.problem-item');
    problemItems.forEach((item, index) => {
        item.style.animationDelay = `${1.2 + index * 0.3}s`;
    });
 
    const buttons = document.querySelectorAll('.shipper, .carrier');
    buttons.forEach(button => {
        button.classList.add('fade-in-up');
        button.style.animationDelay = '0.5s';
    });

    const navLinks = document.querySelectorAll('.header__link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

  
    const cards = document.querySelectorAll('.problem-card, .direct-route-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });


    const images = document.querySelectorAll('.problem-item__img img, .direct-route-item-1-img img');
    images.forEach(img => {
        img.classList.add('float');
    });
});
