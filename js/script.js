AOS.init({ duration: 800, once: false });

const themeToggleButtons = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
const body = document.body;
const sunIconClass = 'fa-sun';
const moonIconClass = 'fa-moon';
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const scrollToTopBtn = document.getElementById('scroll-to-top');

function applyTheme(theme) {
    const isLight = theme === 'light';
    body.classList.toggle('light-mode', isLight);
    themeToggleButtons.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.toggle(sunIconClass, !isLight);
        icon.classList.toggle(moonIconClass, isLight);
    });
    localStorage.setItem('theme', theme);
}

themeToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        applyTheme(body.classList.contains('light-mode') ? 'dark' : 'light');
    });
});

const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
applyTheme(savedTheme);

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

window.onscroll = function () {
    const isScrolled = window.scrollY > 50;
    navbar.classList.toggle('nav-default-bg', !isScrolled);
    navbar.classList.toggle('nav-scrolled-bg', isScrolled);

    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
};

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const videoModal = document.getElementById('videoModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');

function openModal(videoId, title, description, imageUrl) {
    if (!videoModal || !modalTitle || !modalDescription || !modalImage) return;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imageUrl;
    modalImage.onerror = () => {
        modalImage.src = `https://placehold.co/1280x720/${body.classList.contains('light-mode') ? 'E2E8F0' : '1F2937'}/FFFFFF?text=Error+Al+Cargar+Video`;
    };
    videoModal.classList.remove('hidden');
    setTimeout(() => {
        videoModal.classList.remove('opacity-0');
        videoModal.querySelector('.transform').classList.remove('scale-95');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!videoModal) return;
    videoModal.classList.add('opacity-0');
    videoModal.querySelector('.transform').classList.add('scale-95');
    setTimeout(() => videoModal.classList.add('hidden'), 300);
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', e => e.key === 'Escape' && !videoModal.classList.contains('hidden') && closeModal());
videoModal.addEventListener('click', e => e.target === videoModal && closeModal());
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Función para cargar correctamente los embeds de Instagram
function loadInstagramEmbeds() {
    // Esperar a que se cargue el script de Instagram
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    } else {
        // Intentar de nuevo en 500ms si el script de Instagram aún no está cargado
        setTimeout(loadInstagramEmbeds, 500);
    }
}

// Función para cargar correctamente los embeds de TikTok
function loadTikTokEmbeds() {
    if (window.TikTokEmbed) {
        // Si el objeto TikTokEmbed existe, intenta cargar los embeds
        try {
            window.TikTokEmbed.revalidate();
        } catch (e) {
            console.log("TikTok embed revalidation error:", e);
        }
    } else if (document.querySelector('.tiktok-embed')) {
        // Si el script aún no está completamente cargado pero el elemento existe
        setTimeout(loadTikTokEmbeds, 1000);
    }
}

// Función para verificar si los embeds de TikTok están cargados
function checkTikTokEmbeds() {
    const tiktokEmbeds = document.querySelectorAll('.tiktok-embed');

    if (tiktokEmbeds.length > 0) {
        // Verificar si los embeds están vacíos (sin contenido generado por TikTok)
        let allEmpty = true;
        tiktokEmbeds.forEach(embed => {
            // Si el embed tiene contenido más allá del mínimo original, no está vacío
            if (embed.children.length > 1 || embed.innerHTML.includes('iframe')) {
                allEmpty = false;
            }
        });

        // Si todos los embeds están vacíos, recargar el script de TikTok
        if (allEmpty) {
            const oldScript = document.querySelector('script[src*="tiktok.com/embed.js"]');
            if (oldScript) oldScript.remove();

            const newScript = document.createElement('script');
            newScript.async = true;
            newScript.src = 'https://www.tiktok.com/embed.js';
            document.body.appendChild(newScript);

            // Intentar de nuevo en un momento
            setTimeout(loadTikTokEmbeds, 1500);
        }
    }
}

// Cargar los embeds cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    loadInstagramEmbeds();
    loadTikTokEmbeds();

    // Verificar después de 3 segundos si los embeds de TikTok se cargaron correctamente
    setTimeout(checkTikTokEmbeds, 3000);
});

// También cargar los embeds cuando la ventana haya cargado por completo
window.addEventListener('load', function () {
    loadInstagramEmbeds();
    loadTikTokEmbeds();

    // Verificar después de 2 segundos si los embeds de TikTok se cargaron correctamente
    setTimeout(checkTikTokEmbeds, 2000);
});