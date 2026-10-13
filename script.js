document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            mobileMenu.setAttribute('aria-expanded', String(isOpen));
            mobileMenu.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenu.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-label', 'Abrir menu');
            });
        });
    }
});
