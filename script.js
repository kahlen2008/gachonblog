document.addEventListener('DOMContentLoaded', () => {
    // Keep every photo visible for lazy loading
    document.querySelectorAll('img').forEach(image => {
        image.loading = 'lazy';
        image.decoding = 'async';
    });

    // Page Transition Animation (Fade Out)
    const navLinks = document.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Ignore links that don't have an href or are targeting a new tab
            if (!href || link.target === '_blank' || e.ctrlKey || e.metaKey) return;
            
            const isHashOnly = href.startsWith('#');
            const isSamePageHash = href.includes('.html#') && href.split('#')[0] === window.location.pathname.split('/').pop();
            const isExternal = href.startsWith('http');

            if (!isHashOnly && !isSamePageHash && !isExternal) {
                e.preventDefault();
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 400); // match CSS animation duration
            }
        });
    });

    // Scroll Animation for Photos Page
    const polaroids = document.querySelectorAll('.masonry-grid .polaroid');
    if (polaroids.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        polaroids.forEach((polaroid, index) => {
            // Add a slight stagger effect based on index to make it look nicer
            polaroid.style.transitionDelay = `${(index % 4) * 0.1}s`;
            observer.observe(polaroid);
        });
    }
});
