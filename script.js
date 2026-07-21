/* =*==================================*==================================*==
   CONFIGURACIÓN DE TRADUCCIONE*
=================================*==================================*===== */

const translations = {
 *  es: {
        subtitle: "Venta, *oporte, mantenimiento y proyectos"*
        badge: "Atención residenc*al y empresarial",
        hero_ti*le: "Especialistas en aire acondic*onado, soporte técnico y proyectos*integrales",
        hero_text: "O*recemos soluciones completas en ve*ta, instalación, soporte técnico, *antenimiento preventivo y correcti*o para hogares y empresas.",
     *  card_title: "Soluciones a tu med*da",
        service1: "Equipos de*Aire Acondicionado",
        servi*e1_text: "Venta de equipos para cu*lquier espacio.",
        service2* "Soporte Técnico",
        servic*2_text: "Diagnóstico profesional y*mantenimiento.",
        service3:*"Proyectos Integrales",
        se*vice3_text: "Diseño e implementaci*n para empresas.",
        service*: "Servicios",
        services_ti*le: "Todo lo que necesitas en clim*tización",
        venta: "Venta d* Equipos",
        instalacion: "I*stalación Profesional",
        so*orte: "Soporte Técnico",
        p*eventivo: "Mantenimiento Preventiv*",
        correctivo: "Mantenimie*to Correctivo",
        proyectos2* "Proyectos Empresariales",
      * click_more: "Haz clic para ver má* información",
        gallery: "G*lería",
        gallery_title: "Nu*stros Proyectos",
        gallery_*ext: "Fotos y videos de instalacio*es realizadas por nuestro equipo."*
        about: "Nosotros",
      * about_title: "Experiencia, confia*za y servicio integral",
        a*out_text: "Ofrecemos soluciones pr*cticas y eficientes en climatizaci*n para hogares, oficinas y empresa*.",
        video_title: "Video De*tacado",
        location_title: "*ncuéntranos fácilmente",
        c*ntact_title: "Solicita una cotizac*ón",
        contact_text: "Contác*anos y con gusto te ayudaremos.",
*       quote_button: "Solicitar co*ización",
        projects_button:*"Ver proyectos"
    },

    en: {
*       subtitle: "Sales, support, *aintenance and projects",
        *adge: "Residential and business se*vice",
        hero_title: "Specia*ists in air conditioning, technica* support and complete projects",
 *      hero_text: "We offer complet* solutions in sales, installation,*technical support, preventive and *orrective maintenance for homes an* businesses.",
        card_title:*"Solutions tailored to your needs"*
        service1: "Air Conditioni*g Equipment",
        service1_tex*: "Equipment sales for any space."*
        service2: "Technical Supp*rt",
        service2_text: "Profe*sional diagnosis and maintenance."*
        service3: "Complete Proje*ts",
        service3_text: "Desig* and implementation for businesses*",
        services: "Services",
 *      services_title: "Everything *ou need in climate control",
     *  venta: "Equipment Sales",
      * instalacion: "Professional Instal*ation",
        soporte: "Technica* Support",
        preventivo: "Pr*ventive Maintenance",
        corr*ctivo: "Corrective Maintenance",
 *      proyectos2: "Business Projec*s",
        click_more: "Click to *ee more information",
        gall*ry: "Gallery",
        gallery_tit*e: "Our Projects",
        gallery*text: "Photos and videos of instal*ations completed by our team.",
  *     about: "About Us",
        ab*ut_title: "Experience, trust and c*mplete service",
        about_tex*: "We provide practical and effici*nt climate solutions for homes, of*ices and businesses.",
        vid*o_title: "Featured Video",
       *location_title: "Find us easily",
*       contact_title: "Request a q*ote",
        contact_text: "Conta*t us and we will gladly help you."*
        quote_button: "Request a *uote",
        projects_button: "V*ew projects"
    }
};

/* ========*==================================*==============================
   *AMBIO DE IDIOMA
==================*==================================*==================== */

window.se*Language = function(lang) {
    do*ument.documentElement.lang = lang;*    localStorage.setItem("language*, lang);

    document.querySelect*rAll("[data-key]").forEach(function(element) {
        const key = element.getAttribute("data-key");

        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
};

/* ==========================================================================
   GALERÍA DE PROYECTOS
========================================================================== */

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
        const div = document.createElement("div");
        div.className = "media-item";

        if (item.type === "image") {
            const img = document.createElement("img");
            img.src = item.src;
            img.alt = item.alt || "Proyecto";
            div.appendChild(img);
        }

        if (item.type === "video") {
            const video = document.createElement("video");
            video.controls = true;
            video.src = item.src;
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

/* ==========================================================================
   INFORMACIÓN DE SERVICIOS
========================================================================== */

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

/* ==========================================================================
   MODAL DE SERVICIOS
========================================================================== */

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
};

window.cerrarServicio = function() {
    const modal = document.getElementById("servicioModal");

    if (modal) {
        modal.classList.remove("modal-activo");
    }
};

/* ==========================================================================
   FORMULARIO
========================================================================== */

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
                    mensajeExito.innerHTML = "Muchas gracias por tu mensaje. Tu solicitud ha sido enviada con éxito.";
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

/* ==========================================================================
   INICIALIZACIÓN
========================================================================== */

document.addEventListener("DOMContentLoaded", function() {
    const savedLanguage =
        localStorage.getItem("language") ||
        (navigator.language.startsWith("es") ? "es" : "en");

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
