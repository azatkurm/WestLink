document.addEventListener('DOMContentLoaded', function() {

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -150px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);


    const animatedElements = document.querySelectorAll(
        '.problem-item, .direct-route-card, .advantages-card, ' +
        '.problem__title, .problem__subtitle, ' +
        '.direct-route-title, .workflow__title, .workflow__subtitle, ' +
        '.video-section__title, .video-section__subtitle, ' +
        '.cta__title, .cta__subtitle, .cta-benefit, ' +
        '.roadmap__title, .roadmap__image, ' +
        '.video-wrapper, .cta__buttons, .cta__image, .direct-route-item-1-img, .direct-route-item-1-cards'
    );
    
    animatedElements.forEach((el) => {
    
        if (!el.closest('.header') && !el.closest('.hero')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'all 1s ease-out';
        }
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


    const advantageIcons = document.querySelectorAll('.advantages-card__icon img');
    advantageIcons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.animation = 'float 4s ease-in-out infinite';
            icon.style.animationDelay = `${index * 0.3}s`;
        }, 1000 + index * 100);
    });


    const languageBtn = document.querySelector('.language-btn');
    const languageSelector = document.querySelector('.language-selector');
    const languageOptions = document.querySelectorAll('.language-option');
    const languageText = document.querySelector('.language-text');

    if (languageBtn && languageSelector) {

        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageSelector.classList.toggle('active');
        });

      
        document.addEventListener('click', (e) => {
            if (!languageSelector.contains(e.target)) {
                languageSelector.classList.remove('active');
            }
        });

      
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLang = option.getAttribute('data-lang');
                const selectedText = option.textContent;
                
                
                languageText.textContent = selectedText;
       
                languageOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
        
                languageSelector.classList.remove('active');
                
    
                console.log('Selected language:', selectedLang);
            });
        });
    }


    const burgerMenu = document.querySelector('.burger-menu');
    const headerNav = document.querySelector('.header__nav');
    const body = document.body;

    if (burgerMenu && headerNav) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            headerNav.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        const navLinks = headerNav.querySelectorAll('.header__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                headerNav.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        document.addEventListener('click', (e) => {
            if (!headerNav.contains(e.target) && !burgerMenu.contains(e.target) && headerNav.classList.contains('active')) {
                burgerMenu.classList.remove('active');
                headerNav.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
});
