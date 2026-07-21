const translations = {
    es: {
        subtitle: "Venta, soporte, mantenimiento y proyectos",
        nav_services: "Servicios",
        nav_about: "Nosotros",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        badge: "Atención residencial y empresarial",
        hero_title: "Especialistas en aire acondicionado, soporte técnico y proyectos integrales",
        hero_text: "Ofrecemos soluciones completas en venta, instalación, soporte técnico, mantenimiento preventivo y correctivo para hogares y empresas.",
        quote_button: "Solicitar cotización",
        projects_button: "Ver proyectos",
        card_title: "Soluciones a tu medida",
        service1: "Equipos de Aire Acondicionado",
        service1_text: "Venta de equipos para cualquier espacio.",
        service2: "Soporte Técnico",
        service2_text: "Diagnóstico profesional y mantenimiento.",
        service3: "Proyectos Integrales",
        service3_text: "Diseño e implementación para empresas.",
        services: "Servicios",
        services_title: "Todo lo que necesitas en climatización",
        venta: "Venta de Equipos",
        instalacion: "Instalación Profesional",
        soporte: "Soporte Técnico",
        preventivo: "Mantenimiento Preventivo",
        correctivo: "Mantenimiento Correctivo",
        proyectos2: "Proyectos Empresariales",
        click_more: "Haz clic para ver más información",
        gallery: "Galería",
        gallery_title: "Nuestros Proyectos",
        gallery_text: "Fotos y videos de instalaciones realizadas por nuestro equipo.",
        about: "Nosotros",
        about_title: "Experiencia, confianza y servicio integral",
        about_text: "Ofrecemos soluciones prácticas y eficientes en climatización para hogares, oficinas y empresas.",
        video_title: "Video Destacado",
        location_title: "Encuéntranos fácilmente",
        contact_title: "Solicita una cotización",
        contact_text: "Contáctanos y con gusto te ayudaremos."
    },
    en: {
        subtitle: "Sales, support, maintenance and projects",
        nav_services: "Services",
        nav_about: "About Us",
        nav_projects: "Projects",
        nav_contact: "Contact",
        badge: "Residential and business service",
        hero_title: "Specialists in air conditioning, technical support and complete projects",
        hero_text: "We offer complete solutions in sales, installation, technical support, preventive and corrective maintenance for homes and businesses.",
        quote_button: "Request a quote",
        projects_button: "View projects",
        card_title: "Solutions tailored to your needs",
        service1: "Air Conditioning Equipment",
        service1_text: "Equipment sales for any space.",
        service2: "Technical Support",
        service2_text: "Professional diagnosis and maintenance.",
        service3: "Complete Projects",
        service3_text: "Design and implementation for businesses.",
        services: "Services",
        services_title: "Everything you need in climate control",
        venta: "Equipment Sales",
        instalacion: "Professional Installation",
        soporte: "Technical Support",
        preventivo: "Preventive Maintenance",
        correctivo: "Corrective Maintenance",
        proyectos2: "Business Projects",
        click_more: "Click to see more information",
        gallery: "Gallery",
        gallery_title: "Our Projects",
        gallery_text: "Photos and videos of installations completed by our team.",
        about: "About Us",
        about_title: "Experience, trust and complete service",
        about_text: "We provide practical and efficient climate solutions for homes, offices and businesses.",
        video_title: "Featured Video",
        location_title: "Find us easily",
        contact_title: "Request a quote",
        contact_text: "Contact us and we will gladly help you."
    }
};

window.setLanguage = function(lang) {
    if (!translations[lang]) {
        lang = "es";
    }

    document.documentElement.lang = lang;
    localStorage.setItem("language", lang);

    document.querySelectorAll("[data-key]").forEach(function(element) {
        const key = element.getAttribute("data-key");

        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
};

const proyectos = [
    {
        type: "image",
        src: "proyectos/proyecto1.jpg",
        alt: "Proyecto residencial",
        titulo: "Instalación Residencial",
        descripcion: "Trabajo de instalación de equipo de aire acondicionado para espacio residencial."
    },
    {
        type: "image",
        src: "proyectos/proyecto2.jpg",
        alt: "Instalación técnica",
        titulo: "Instalación Profesional",
        descripcion: "Montaje de equipo de climatización realizado por personal técnico."
    },
    {
        type: "image",
        src: "proyectos/proyecto3.jpg",
        alt: "Mantenimiento técnico",
        titulo: "Mantenimiento Técnico",
        descripcion: "Servicio de revisión, limpieza y soporte para equipos de aire acondicionado."
    },
    {
        type: "video",
        src: "proyectos/video1.mp4",
        titulo: "Video de Proyecto",
        descripcion: "Muestra en video de trabajos y soluciones realizadas."
    }
];

function cargarGaleria() {
    const gallery = document.getElementById("galleryContainer");

    if (!gallery) {
        return;
    }

    gallery.innerHTML = "";

    proyectos.forEach(function(item) {
        const div = document.createElement("article");
        div.className = "media-item";

        if (item.type === "image") {
            const img = document.createElement("img");
            img.src = item.src;
            img.alt = item.alt || "Proyecto";
            img.loading = "lazy";
            div.appendChild(img);
        }

        if (item.type === "video") {
            const video = document.createElement("video");
            video.controls = true;
            video.preload = "metadata";

            const source = document.createElement("source");
            source.src = item.src;
            source.type = "video/mp4";

            video.appendChild(source);
            div.appendChild(video);
        }

        const content = document.createElement("div");
        content.className = "media-content";

        const titulo = document.createElement("h3");
        titulo.textContent = item.titulo || "";

        const descripcion = document.createElement("p");
        descripcion.textContent = item.descripcion || "";

        content.appendChild(titulo);
        content.appendChild(descripcion);
        div.appendChild(content);
        gallery.appendChild(div);
    });
}

const serviciosInfo = {
    venta: {
        titulo: "Venta de Equipos",
        imagen: "servicios/venta-equipos.jpg",
        descripcion: "Ofrecemos equipos de aire acondicionado para uso residencial, comercial y empresarial. Te ayudamos a elegir la capacidad adecuada según el tamaño del espacio, necesidad de enfriamiento y presupuesto disponible."
    },
    instalacion: {
        titulo: "Instalación Profesional",
        imagen: "servicios/instalacion.jpg",
        descripcion: "Realizamos instalación profesional de equipos de aire acondicionado, cuidando la ubicación, conexión eléctrica, drenaje, seguridad y correcto funcionamiento del sistema."
    },
    soporte: {
        titulo: "Soporte Técnico",
        imagen: "servicios/soporte-tecnico.jpg",
        descripcion: "Brindamos diagnóstico técnico, revisión de fallas, evaluación del sistema y orientación para solucionar problemas de funcionamiento en equipos de climatización."
    },
    preventivo: {
        titulo: "Mantenimiento Preventivo",
        imagen: "servicios/mantenimiento-preventivo.jpg",
        descripcion: "El mantenimiento preventivo ayuda a mejorar el rendimiento del equipo, reducir consumo eléctrico, prevenir fallas y extender la vida útil del sistema de aire acondicionado."
    },
    correctivo: {
        titulo: "Mantenimiento Correctivo",
        imagen: "servicios/mantenimiento-correctivo.jpg",
        descripcion: "Atendemos fallas y problemas técnicos para recuperar el funcionamiento del equipo. Revisamos componentes, conexiones, limpieza, refrigeración y estado general del sistema."
    },
    proyectos: {
        titulo: "Proyectos Empresariales",
        imagen: "servicios/proyectos-empresariales.jpg",
        descripcion: "Desarrollamos soluciones de climatización para oficinas, comercios, negocios y empresas. Evaluamos necesidades, espacios, capacidad requerida y planificación del proyecto."
    }
};

window.abrirServicio = function(servicio) {
    const info = serviciosInfo[servicio];

    if (!info) {
        return;
    }

    const modal = document.getElementById("servicioModal");
    const modalTitulo = document.getElementById("modalTitulo");
    const modalDescripcion = document.getElementById("modalDescripcion");
    const modalImagen = document.getElementById("modalImagen");

    if (!modal || !modalTitulo || !modalDescripcion || !modalImagen) {
        return;
    }

    modalTitulo.textContent = info.titulo;
    modalDescripcion.textContent = info.descripcion;
    modalImagen.src = info.imagen;
    modalImagen.alt = info.titulo;

    modal.classList.add("modal-activo");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
};

window.cerrarServicio = function() {
    const modal = document.getElementById("servicioModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("modal-activo");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
};

window.cardKeyOpen = function(event, servicio) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.abrirServicio(servicio);
    }
};

function configurarFormulario() {
    const form = document.querySelector(".contact-form");

    if (!form) {
        return;
    }

    form.addEventListener("submit", async function(e) {
        e.preventDefault();

        const data = new FormData(form);
        const mensajeExito = document.getElementById("mensaje-enviado");

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                if (mensajeExito) {
                    mensajeExito.textContent = "Muchas gracias por tu mensaje. Tu solicitud ha sido enviada con éxito.";
                    mensajeExito.style.display = "block";
                }

                form.reset();
            } else {
                alert("Hubo un error al enviar el formulario. Inténtalo nuevamente.");
            }
        } catch (error) {
            alert("Error de conexión. Inténtalo nuevamente.");
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const savedLanguage =
        localStorage.getItem("language") ||
        (navigator.language && navigator.language.startsWith("es") ? "es" : "en");

    window.setLanguage(savedLanguage);
    cargarGaleria();
    configurarFormulario();

    document.addEventListener("click", function(event) {
        const modal = document.getElementById("servicioModal");

        if (event.target === modal) {
            window.cerrarServicio();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            window.cerrarServicio();
        }
    });
});
