console.log("Página de guías de personajes cargada.");


// Mostrar las publicaciones recientes en la página principal
function mostrarPublicacionesRecientes() {
    document.getElementById('publicaciones-recientes').style.display = 'block';
    document.getElementById('eleccion-juego').style.display = 'block';
}

// Mostrar los personajes según el juego seleccionado
function mostrarPersonajes(juego) {
    // Ocultar todas las secciones de personajes
    const secciones = document.querySelectorAll('.personajes');
    secciones.forEach(function(section) {
        section.style.display = 'none';
    });

    // Mostrar la sección del juego seleccionado
    document.getElementById(juego).style.display = 'block';
    
    // Limpiar la guía actual
    document.getElementById('guiaPersonaje').innerHTML = '';
}

// Mostrar la guía del personaje seleccionado
function mostrarGuia(personaje) {
    let guiaHTML = '';

    switch (personaje) {
        case 'Kafka':
            guiaHTML = `
                <h2>Guía de Kafka (Honkai Star Rail)</h2>
                <p><strong>Mejores Armas:</strong> Arma 1, Arma 2</p>
                <p><strong>Mejores Artefactos:</strong> Artefacto A, Artefacto B</p>
                <p><strong>Mejor Equipo:</strong> Compañero 1, Compañero 2</p>
                <p><strong>Materiales de Mejora:</strong> Material X, Material Y</p>
            `;
            break;
        case 'Bronya':
            guiaHTML = `
                <h2>Guía de Bronya (Honkai Star Rail)</h2>
                <p><strong>Mejores Armas:</strong> Arma 3, Arma 4</p>
                <p><strong>Mejores Artefactos:</strong> Artefacto C, Artefacto D</p>
                <p><strong>Mejor Equipo:</strong> Compañero 3, Compañero 4</p>
                <p><strong>Materiales de Mejora:</strong> Material Z, Material W</p>
            `;
            break;
        // Agregar más casos para otros personajes

        default:
            guiaHTML = `<p>Guía no disponible para este personaje.</p>`;
    }

    // Mostrar la guía en la sección correspondiente
    document.getElementById('guiaPersonaje').innerHTML = guiaHTML;
}

// Mostrar las publicaciones recientes al cargar la página
mostrarPublicacionesRecientes();
