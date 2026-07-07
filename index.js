
// ==========================================
// 1. MODO OSCURO / LIGHT THEME
// =========================================
const botonTema = document.getElementById('theme_btn');

if (localStorage.getItem('temaGuardado') === 'oscuro') {
    document.body.classList.add('dark-theme');
    if (botonTema) botonTema.textContent = "too much dark?";
}

if (botonTema) {
    botonTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const estaOscuro = document.body.classList.contains('dark-theme');

        if (estaOscuro) {
            botonTema.textContent = "too much dark?";
            localStorage.setItem('temaGuardado', 'oscuro');
        } else {
            botonTema.textContent = "too much light?";
            localStorage.setItem('temaGuardado', 'claro');
        }
    });
}

// ==========================================
// 2. SISTEMA DE TRADUCCIÓN (i18n)
// ==========================================
const traducciones = {
    en: {
        name_nav: "tomas zamorano",
        nav_link_home: "Home",
        nav_link_work: "Work",
        nav_link_about: "About",
        nav_link_contact: "Contact",
        theme_btn: "too much light?",
        open_to_line: "open to freelance and full time work",
        main_title: '<span class="font-ppGstaadERI">Technical</span><br>Product<br>Design',
        main_description: 'Designing structural systems & interfaces<br> for <span class="font-ppGstaadB">signal </span>& <span class="font-ppGstaadB">sense</span>.',
        skill_title_01: "SYSTEMS & UX RESEARCH",
        skill_title_02: "INTERFACE FRONTEND & CSS",
        skill_title_03: "3D, WEBGL & MOTION R3F",
        skill_title_04: "HARDWARE & INDUSTRIAL PROTOTYPING",
        works_container: "works"
    },
    es: {
        name_nav: "tomas zamorano",
        nav_link_home: "Inicio",
        nav_link_work: "Trabajos",
        nav_link_about: "Sobre Mí",
        nav_link_contact: "Contacto",
        theme_btn: "¿mucha luz?",
        open_to_line: "disponible para proyectos freelance y full time",
        main_title: '<span class="font-ppGstaadERI">Diseño de</span><br>Producto & UX/UI',
        main_description: 'Diseñando sistemas e interfaces estructurales<br> para <span class="font-ppGstaadB">señal </span>y <span class="font-ppGstaadB">sentido</span>.',main_description: 'Diseñando sistemas estructurales<br> para <span class="font-ppGstaadB">señal </span>y <span class="font-ppGstaadB">sentido</span>.',
        skill_title_01: "SISTEMAS & INVESTIGACIÓN UX",
        skill_title_02: "INTERFACES FRONTEND & CSS",
        skill_title_03: "3D, WEBGL & MOTION R3F",
        skill_title_04: "PROTOTIPADO INDUSTRIAL & HARDWARE",
        works_container: "trabajos"
    }
};

const btnEn = document.getElementById('btn_en');
const btnEs = document.getElementById('btn_es');

function cambiarIdioma(idiomaElegido) {
    const elementosATraducir = document.querySelectorAll('[data-i18n]');

    elementosATraducir.forEach(elemento => {
        const clave = elemento.getAttribute('data-i18n');

        // CORREGIDO: Ahora busca dentro de 'traducciones'
        if (traducciones[idiomaElegido] && traducciones[idiomaElegido][clave]) {
            elemento.innerHTML = traducciones[idiomaElegido][clave];
        }
    });

    // Cambiar estilos visuales del botón activo
    if (idiomaElegido === 'en') {
        if (btnEn) btnEn.className = 'nav_link_active';
        if (btnEs) btnEs.className = 'nav_link';
    } else {
        if (btnEn) btnEn.className = 'nav_link';
        if (btnEs) btnEs.className = 'nav_link_active';
    }

    localStorage.setItem('idiomaGuardado', idiomaElegido);
}

// Revisar preferencia guardada al abrir la web
const idiomaGuardado = localStorage.getItem('idiomaGuardado');
if (idiomaGuardado === 'es') {
    cambiarIdioma('es');
}

// Conectar clics a los botones
if (btnEn && btnEs) {
    btnEn.addEventListener('click', () => cambiarIdioma('en'));
    btnEs.addEventListener('click', () => cambiarIdioma('es'));
}
