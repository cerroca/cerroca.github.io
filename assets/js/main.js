/* =============================================
   LANGUAGE SYSTEM ES / EN + UI behavior
============================================= */

const translations = {
    es: {
        about_link: "Sobre mí",
        projects_link: "Proyectos",
        contact_link: "Contacto",

        hero_title: "Carlos Cerro Miñana",
        hero_subtitle: "Ingeniero de Firmware y Sistemas de Control",
        hero_tagline: "Diseño FPGA · Sistemas en Tiempo Real · Software · Control y Simulación · Electrónica",

        btn_projects: "Mis proyectos",
        btn_cv: "Descargar CV",

        about_title: "Sobre mí",
        about_text:
            "Ingeniero Electronico de Telecomunicaciones con experiencia en FPGA, sistemas de control, modelado y arquitecturas en tiempo real, como validacion de systemas. " +
            "He trabajado en el desarrollo de firmware FPGA para ITER, lógica de seguridad y sistemas de adquisición de alta velocidad, con demostraciones de producto.",

        timeline_title: "Trayectoria",
        timeline_content1: "Ingeniero de Sistemas Embedded – Fusion for Energy",
        timeline_content2:
            "Actualidad - 10/2024 : Desarrollo de firmware FPGA (HotRIO, HVPPS, ADCs), comunicación a 1Gbps, lógica FSM y diagnóstico.",
        timeline_content3: "Ingeniero en sistemas de vehículos eléctricos - Capgemini",
        timeline_content4:
            "10/2023 - 10/2024 : Trabajando con prototipos de vehiculos electricos en testeo de software para Cupra",
        timeline_content5: "Diseño de una Voltage Contoled Delay Line con Tecnológica CMOS de 65 nm - Cern",
        timeline_content6:
            "2023 : Proyecto CERN del departamento de microelectrónica de la UPC que fue mi tesis final de licenciatura.",
        timeline_content7: "Grado en Ingeniería Electrónica de Telecomunicaciones - UPC",
        timeline_content8:
            "2018 - 2023 :Fundamentos de control, electrónica y sistemas embebidos.",

        projects_title: "Proyectos",
        project1_detail:
            "Firmware FPGA para adquisición de datos SFP y ADC, decodificación de paquetes y sincronización.",
        project2_detail:
            "Lógica de seguridad para el Disruption Mitigation System con votación 1oo2, FSM avanzada y diagnóstico.",
        project3_detail:
            "Logica master slave de sistema de comunicacion persoalizado para fibra optica con nodos variables",
        project4_detail:
            "Proyecto de la UPC, la UB y el CERN para actualizar el LHCb. Estudio y diseño de líneas de retardo autorreguladas para la sincronización de relojes.",
        project5_detail:
            "Diseño e implementacion de una despensa inteligente con sensores de peso y aplicacion movil para le hogar.",
        skills_title: "Competencias",
        contact_title: "Contacto"
    },

    en: {
        about_link: "About me",
        projects_link: "Projects",
        contact_link: "Contact",

        hero_title: "Carlos Cerro Miñana",
        hero_subtitle: "Firmware and Control Systems Engineer",
        hero_tagline: "FPGA Design · Real-Time Systems · Software · Control & Simulation · Electronics",

        btn_projects: "My projects",
        btn_cv: "Download CV",

        about_title: "About me",
        about_text:
            "Telecommunications Electronic Engineer with experience in FPGA design, control systems, modelling, " +
            "real-time architectures, and system validation. I have worked on FPGA firmware development for ITER, " +
            "safety logic, and high-speed data acquisition systems, including product demonstrations.",

        timeline_title: "Career",
        timeline_content1: "Embedded Systems Engineer – Fusion for Energy",
        timeline_content2:
            "FPGA firmware development (HotRIO, HVPPS, ADCs), 1Gbps communication, FSM logic and diagnostics.",
        timeline_content3: "Electric Vehicle Systems Engineer – Capgemini",
        timeline_content4:
            "Working with electric vehicle prototypes, performing software testing for CUPRA.",
        timeline_content5: "Design of a Voltage Controlled Delay Line in 65 nm CMOS Technology – CERN",
        timeline_content6:
            "CERN project within the UPC Microelectronics Department, developed as my final bachelor thesis.",
        timeline_content7: "Bachelor’s Degree in Telecommunications Electronic Engineering – UPC",
        timeline_content8:
            "Fundamentals of control, electronics and embedded systems.",

        projects_title: "Projects",
        project1_detail:
            "FPGA firmware for SFP and ADC data acquisition, packet decoding and synchronization.",
        project2_detail:
            "Safety logic for the Disruption Mitigation System with 1oo2 voting, advanced FSM and diagnostics.",
        project3_detail:
            "Master-slave logic for a custom fiber-optic communication system with scalable nodes.",
        project4_detail:
            "UPC, UB and CERN project to update the LHCb. Study and design of self-regulated delay lines for clock synchronization.",
        project5_detail:
            "Design and implementation of a smart pantry with weight sensors and a mobile application for home use.",
        skills_title: "Skills",
        contact_title: "Contact"
    }
};

function setLanguage(lang) {
    try {
        localStorage.setItem("lang", lang);
        console.log('setLanguage()', lang);

        document.querySelectorAll("[data-lang-key]").forEach(el => {
            const key = el.getAttribute("data-lang-key");
            const value = translations[lang] && translations[lang][key];
            el.innerHTML = value !== undefined ? value : '';
        });

        const elEs = document.getElementById("lang-es");
        const elEn = document.getElementById("lang-en");
        if (elEs) elEs.classList.remove("lang-active");
        if (elEn) elEn.classList.remove("lang-active");
        const langEl = document.getElementById("lang-" + lang);
        if (langEl) langEl.classList.add("lang-active");
    } catch (err) {
        console.error('Error in setLanguage:', err);
    }
}

// Apply saved/default language on load (safe for defer/normal script)
function applyInitialLanguage() {
    const lang = localStorage.getItem("lang") || "es";
    setLanguage(lang);
}

document.addEventListener("DOMContentLoaded", applyInitialLanguage);
if (document.readyState !== 'loading') applyInitialLanguage();

/* ===============================================
   PARTICLES BACKGROUND (if available)
================================================ */
if (typeof particlesJS !== 'undefined') {
    try {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 50, "density": { "enable": true, "value_area": 1000 } },
                "color": { "value": "#14B8A6" },
                "shape": { "type": "polygon", "stroke": { "width": 1, "color": "#0A2540" }, "polygon": { "nb_sides": 6 } },
                "opacity": { "value": 0.4, "random": false, "anim": { "enable": false } },
                "size": { "value": 2, "random": false, "anim": { "enable": false } },
                "line_linked": { "enable": true, "distance": 140, "color": "#14B8A6", "opacity": 0.6, "width": 2 },
                "move": { "enable": true, "speed": 0.3, "direction": "none", "out_mode": "out", "random": false, "straight": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "bubble" } },
                "modes": { "repulse": { "distance": 50, "duration": 0.4 }, "bubble": { "distance": 120, "size": 3, "duration": 2, "opacity": 0.8 } }
            },
            "retina_detect": true
        });
    } catch (err) {
        console.warn('particlesJS init failed', err);
    }
}

/* =============================
   PROJECT MODALS
============================= */
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalExtra = document.getElementById("modal-extra");
const modalClose = document.querySelector(".modal-close");

function openProjectModal(title, description, extraHTML) {
    if (!modal) return;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalExtra.innerHTML = extraHTML || '';
    modal.style.display = "flex";
}

if (modalClose) modalClose.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

/* Scroll reveal */
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const element = reveals[i];
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 80) element.classList.add("active");
    }
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* Smooth scrolling for anchor links */
document.addEventListener('click', function (e) {
    const el = e.target.closest("a[href^='#']");
    if (!el) return;
    const href = el.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 40, behavior: 'smooth' });
    }
});

/* Expose openProjectModal globally for inline onclick in projects.html */
window.openProjectModal = openProjectModal;
