const navbar = document.getElementById('navbar');
const heroHeight = window.innerHeight;

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > heroHeight * 0.8) {
        navbar.classList.add('nav-blur', 'shadow-md');
        navbar.style.background = 'rgba(15,23,42,0.94)';
        navbar.style.borderBottom = '1px solid rgba(255,255,255,0.06)';
    } else if (y > 60) {
        navbar.classList.add('nav-blur');
        navbar.classList.remove('shadow-md');
        navbar.style.background = 'rgba(10,14,39,0.75)';
        navbar.style.borderBottom = 'none';
    } else {
        navbar.classList.remove('nav-blur', 'shadow-md');
        navbar.style.background = 'transparent';
        navbar.style.borderBottom = 'none';
    }
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    const icon = hamburger.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.querySelectorAll('#hero .fade-in').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 200);
});
