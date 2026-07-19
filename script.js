/* ==========================================================================
   CONFIGURACIÓN DE TRADUCCIONES
========================================================================== */

const translations = {
  es: {
    subtitle: "Venta, soporte, mantenimiento y proyectos",
    badge: "Atención residencial y empresarial",
    hero_title: "Especialistas en aire acondicionado, soporte técnico y proyectos integrales",
    hero_text: "Ofrecemos soluciones completas en venta, instalación, soporte técnico, mantenimiento preventivo y correctivo para hogares y empresas.",
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
    badge: "Residential and business service",
    hero_title: "Specialists in air conditioning, technical support and complete projects",
    hero_text: "We offer complete solutions in sales, installation, technical support, preventive and corrective maintenance for homes and businesses.",
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

/* ==========================================================================
   CAMBIO DE IDIOMA
========================================================================== */

window.setLanguage = function(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-key]").forEach(element => {
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

  if (!gallery) return;

  gallery.innerHTML = "";

  proyectos.forEach(item => {
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
   FORMULARIO
========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage =
    localStorage.getItem("language") ||
    (navigator.language.startsWith("es") ? "es" : "en");

  window.setLanguage(savedLanguage);
  cargarGaleria();

  const form = document.querySelector(".contact-form");

  if (form) {
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
            mensajeExito.innerHTML =
              "✅ ¡Muchas gracias por tu mensaje! Tu solicitud ha sido enviada con éxito.";
            mensajeExito.style.display = "block";
            mensajeExito.style.color = "#25d366";
            mensajeExito.style.fontWeight = "bold";
            mensajeExito.style.marginTop = "15px";
            mensajeExito.style.textAlign = "center";
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
});
