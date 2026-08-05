// Local Development URL rewriter
(function () {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (isLocal) {
        document.addEventListener('DOMContentLoaded', () => {
            const domainMap = {
                'upiziva.com': 'http://localhost:5175',
                'laundryziva.com': 'http://localhost:5174',
                'allziva.com': 'http://localhost:5173'
            };

            document.querySelectorAll('a[href]').forEach(anchor => {
                try {
                    const href = anchor.getAttribute('href');
                    if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
                        const url = new URL(href);
                        for (const [prodDomain, localUrl] of Object.entries(domainMap)) {
                            if (url.hostname === prodDomain || url.hostname === `www.${prodDomain}`) {
                                anchor.href = localUrl + url.pathname + url.search + url.hash;
                            }
                        }
                    }
                } catch (e) {
                    // Ignore mailto, tel, etc.
                }
            });
        });
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }



    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .stagger-children, .deployment-wrapper, .steps-container');
    animatedElements.forEach(el => observer.observe(el));
});
