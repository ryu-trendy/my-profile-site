// ── Translations ──────────────────────────────────────────────
const translations = {
    ko: {
        'page-title':       'Trendy Ryu | 데이터플랫폼 아키텍트 · 히말라야 트레커',
        'nav-about':        '소개',
        'nav-skills':       '기술',
        'nav-projects':     '프로젝트',
        'nav-contact':      '연락처',
        'hero-subtitle':    '데이터플랫폼 아키텍트 &nbsp;·&nbsp; 히말라야 트레커',
        'hero-tagline':     '정상을 향한 집념으로 데이터를 설계하다.<br><span class="text-sky-300 font-medium">마차푸차레</span>의 장엄함처럼, 데이터 위에 새로운 시야를 열다.',
        'hero-btn-projects':'프로젝트 보기',
        'hero-btn-about':   '더 알아보기',
        'about-heading':    '소개',
        'about-stat-trek':  '히말라야<br>트레킹',
        'about-stat-mountain': '마차푸차레<br>(m)',
        'about-stat-passion':  '산을 향한<br>열정',
        'about-bio-1': '안녕하세요! 저는 <span class="text-slate-800 font-semibold">Trendy Ryu</span>입니다. 대규모 데이터 파이프라인과 ML 플랫폼을 설계·운영하는 데이터플랫폼 아키텍트이며, 동시에 열정적인 산악 트레커입니다.',
        'about-bio-2': '네팔 히말라야의 <span class="text-sky-600 font-semibold">마차푸차레(Machapuchare, 6,993m)</span>를 비롯한 안나푸르나 지역 트레킹에서 정상을 향한 집념과 자연의 장엄함을 통해 데이터 아키텍처의 영감을 얻습니다.',
        'about-bio-3': '대학에서 <span class="text-indigo-600 font-semibold">경제학</span>과 <span class="text-violet-600 font-semibold">회계학</span>을 전공하며 쌓은 비즈니스 인사이트로, 데이터가 실질적인 가치를 창출하도록 기술과 비즈니스를 연결합니다. 산을 오르듯, 하나씩 단계를 밟아 복잡한 문제를 해결해 나갑니다.',
        'about-tag-trek': '<i class="fas fa-mountain mr-1.5"></i>히말라야 트레커',
        'about-tag-econ': '경제학 전공',
        'about-tag-acc':  '회계학 전공',
        'skills-heading':   '기술 스택',
        'projects-heading': '프로젝트',
        'proj1-title': '실시간 데이터 파이프라인',
        'proj1-desc':  'Kafka와 Spark Streaming을 활용한 대규모 실시간 이벤트 수집·처리 파이프라인. 일 수억 건 처리 및 Databricks Delta Live Tables 기반 운영.',
        'proj2-title': 'ML 피처 스토어 플랫폼',
        'proj2-desc':  'Databricks Feature Store 기반 ML 피처 중앙화 플랫폼. 온·오프라인 피처 서빙 파이프라인 설계 및 MLflow 기반 모델 학습 자동화.',
        'proj3-title': '데이터 거버넌스 플랫폼',
        'proj3-desc':  'dbt와 Unity Catalog를 활용한 데이터 계보 추적 및 품질 관리 플랫폼. 데이터 메시 아키텍처 기반 도메인 거버넌스 체계 수립.',
        'contact-heading': '연락하기',
        'contact-desc':    '데이터 플랫폼 구축, 아키텍처 자문, 트레킹 동반자 모집,<br>또는 협업 제안이 있으시면 언제든지 연락 주세요.',
        'footer-copy': '© 2026 Trendy Ryu. 데이터 아키텍트 · 히말라야 트레커',
    },
    en: {
        'page-title':       'Trendy Ryu | Data Platform Architect · Himalayan Trekker',
        'nav-about':        'About',
        'nav-skills':       'Skills',
        'nav-projects':     'Projects',
        'nav-contact':      'Contact',
        'hero-subtitle':    'Data Platform Architect &nbsp;·&nbsp; Himalayan Trekker',
        'hero-tagline':     'Designing data with the determination to reach the summit.<br>Like the grandeur of <span class="text-sky-300 font-medium">Machapuchare</span>, opening new horizons on data.',
        'hero-btn-projects':'View Projects',
        'hero-btn-about':   'Learn More',
        'about-heading':    'About',
        'about-stat-trek':  'Himalayan<br>Treks',
        'about-stat-mountain': 'Machapuchare<br>(m)',
        'about-stat-passion':  'Passion for<br>Mountains',
        'about-bio-1': 'Hi, I\'m <span class="text-slate-800 font-semibold">Trendy Ryu</span>. I\'m a Data Platform Architect who designs and operates large-scale data pipelines and ML platforms — and an avid mountain trekker.',
        'about-bio-2': 'Trekking through the Annapurna region of Nepal — including <span class="text-sky-600 font-semibold">Machapuchare (6,993m)</span> — I draw inspiration for data architecture from the determination to reach the summit and the grandeur of nature.',
        'about-bio-3': 'With business insights built on a double major in <span class="text-indigo-600 font-semibold">Economics</span> and <span class="text-violet-600 font-semibold">Accounting</span>, I bridge technology and business so that data creates real value. Like climbing a mountain, I tackle complex problems one step at a time.',
        'about-tag-trek': '<i class="fas fa-mountain mr-1.5"></i>Himalayan Trekker',
        'about-tag-econ': 'Economics Major',
        'about-tag-acc':  'Accounting Major',
        'skills-heading':   'Tech Stack',
        'projects-heading': 'Projects',
        'proj1-title': 'Real-time Data Pipeline',
        'proj1-desc':  'A large-scale real-time event ingestion and processing pipeline using Kafka and Spark Streaming. Handles hundreds of millions of events per day on Databricks Delta Live Tables.',
        'proj2-title': 'ML Feature Store Platform',
        'proj2-desc':  'A centralized ML feature platform built on Databricks Feature Store. Designed online/offline feature serving pipelines and automated model training with MLflow.',
        'proj3-title': 'Data Governance Platform',
        'proj3-desc':  'A data lineage tracking and quality management platform using dbt and Unity Catalog. Established domain governance framework based on Data Mesh architecture.',
        'contact-heading': 'Get In Touch',
        'contact-desc':    'Have a project, architecture consultation, trekking partnership,<br>or collaboration in mind? Feel free to reach out anytime.',
        'footer-copy': '© 2026 Trendy Ryu. Data Architect · Himalayan Trekker',
    }
};

// ── Language switcher ──────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'ko';

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang][key];
        if (!text) return;
        if (el.tagName === 'TITLE') {
            el.textContent = text;
        } else {
            el.innerHTML = text;
        }
    });

    // Update both toggle buttons: show the OTHER language
    const label = lang === 'ko' ? 'EN' : 'KO';
    document.querySelectorAll('#lang-toggle, #lang-toggle-mobile').forEach(btn => {
        if (btn) btn.textContent = label;
    });
}

function toggleLang() {
    setLang(currentLang === 'ko' ? 'en' : 'ko');
}

// ── Navbar scroll ──────────────────────────────────────────────
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

// ── Mobile menu ────────────────────────────────────────────────
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

// ── Scroll animations ──────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.querySelectorAll('#hero .fade-in').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 200);
});

// ── Init language ──────────────────────────────────────────────
setLang(currentLang);
