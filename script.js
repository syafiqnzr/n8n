document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    const ctaButton = document.querySelector('.cta-button');

    // Animasi Header semasa Tatal (Scroll)
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(5px)';
        } else {
            header.style.backgroundColor = 'var(--card-background)';
            header.style.backdropFilter = 'none';
        }
    });

    // Kesan Hover Interaktif pada Butang CTA
    ctaButton.addEventListener('mouseenter', function() {
        ctaButton.style.boxShadow = '0 0 15px rgba(46, 98, 255, 0.5)'; // Cahaya biru
    });

    ctaButton.addEventListener('mouseleave', function() {
        ctaButton.style.boxShadow = 'none';
    });

    // Contoh Fungsi untuk Scroll Smooth ke Bahagian Ciri
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - header.offsetHeight, // Ambil kira ketinggian header
                    behavior: 'smooth'
                });
            }
        });
    });
});