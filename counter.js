/* ==========================================================================
   CONTADOR DE VISITAS - ALMACENAMIENTO LOCAL
========================================================================== */

function initVisitCounter() {
    const counterKey = 'clima-electricidad-visits';
    const lastVisitKey = 'clima-electricidad-last-visit';
    const today = new Date().toDateString();
    
    // Obtener visitas totales
    let totalVisits = parseInt(localStorage.getItem(counterKey)) || 0;
    
    // Obtener última visita
    const lastVisit = localStorage.getItem(lastVisitKey);
    
    // Si es un nuevo día, incrementar contador
    if (lastVisit !== today) {
        totalVisits++;
        localStorage.setItem(counterKey, totalVisits);
        localStorage.setItem(lastVisitKey, today);
    }
    
    // Mostrar el contador
    updateCounterDisplay(totalVisits);
}

function updateCounterDisplay(visits) {
    const counterElement = document.getElementById('visit-counter');
    if (counterElement) {
        counterElement.textContent = visits.toLocaleString('es-ES');
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initVisitCounter();
});
