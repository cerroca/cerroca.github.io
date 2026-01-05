/* =============================================
   LANGUAGE SYSTEM ES / EN
============================================= */
const es = document.getElementById("lang-es");
const en = document.getElementById("lang-en");

if (es && en) {
  es.classList.remove("lang-active");
  en.classList.remove("lang-active");
  document.getElementById("lang-" + lang).classList.add("lang-active");
}

const translations = {
    es: {
        about_link: "Sobre mí",
        projects_link: "Proyectos",
        contact_link: "Contacto",

        hero_title: "Carlos Cerro Miñana",
        hero_subtitle: "Ingeniero de Firmeware y Sistemas de Control",
        hero_tagline: "Diseño FPGA · Sistemas en Tiempo Real · Software · Control y Simulación · Electronica",

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
            "Colaboración entre la UPC, UB y CERN para el proyecto de reforma de LHCb. Estudio y diseño de una línea de retardos autorregulables proporcionando señales de reloj para los demás elementos.",
        project5_detail:
            "Diseño e implementacion de una despensa inteligente con sensores de peso y aplicacion movil para le hogar.",
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
            "Present – 10/2024: FPGA firmware development (HotRIO, HVPPS, ADCs), 1Gbps communication, FSM logic and diagnostics.",
        timeline_content3: "Electric Vehicle Systems Engineer – Capgemini",
        timeline_content4:
            "10/2023 – 10/2024: Working with electric vehicle prototypes, performing software testing for CUPRA.",
        timeline_content5: "Design of a Voltage Controlled Delay Line in 65 nm CMOS Technology – CERN",
        timeline_content6:
            "CERN project within the UPC Microelectronics Department, developed as my final bachelor thesis.",
        timeline_content7: "Bachelor’s Degree in Telecommunications Electronic Engineering – UPC",
        timeline_content8:
            "2018 – 2023: Fundamentals of control, electronics and embedded systems.",

        projects_title: "Projects",
        project1_detail:
            "FPGA firmware for SFP and ADC data acquisition, packet decoding and synchronization.",
        project2_detail:
            "Safety logic for the Disruption Mitigation System with 1oo2 voting, advanced FSM and diagnostics.",
        project3_detail:
            "Master-slave logic for a custom fiber-optic communication system with scalable nodes.",
        project4_detail:
            "Collaboration between UPC, UB and CERN for the LHCb upgrade project. Study and design of self-regulated delay lines providing clock signals to other system components.",
        project5_detail:
            "Design and implementation of a smart pantry with weight sensors and a mobile application for home use.",

        contact_title: "Contact"
    }
};

function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-lang-key]").forEach(el => {
        const key = el.getAttribute("data-lang-key");
        el.textContent = translations[lang][key];
    });

    document.getElementById("lang-es").classList.remove("lang-active");
    document.getElementById("lang-en").classList.remove("lang-active");
    document.getElementById("lang-" + lang).classList.add("lang-active");
}

document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "es";
    setLanguage(lang);
});
