console.log("Página de guías de personajes cargada.");


// Función que oculta todas las secciones de personajes y muestra la sección correspondiente
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

    // Ocultar la sección de publicaciones
    document.getElementById('publicaciones-recientes').style.display = 'none';
    document.getElementById('eleccion-juego').style.display = 'none';
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
        case 'Personaje1Z':
            guiaHTML = `
                <h2>Guía de Personaje 1 (Zenless Zone Zero)</h2>
                <p><strong>Mejores Armas:</strong> Arma X, Arma Y</p>
                <p><strong>Mejores Artefactos:</strong> Artefacto E, Artefacto F</p>
                <p><strong>Mejor Equipo:</strong> Compañero 5, Compañero 6</p>
                <p><strong>Materiales de Mejora:</strong> Material A, Material B</p>
            `;
            break;
        case 'Personaje1W':
            guiaHTML = `
                <h2>Guía de Personaje 1 (Wuthering Waves)</h2>
                <p><strong>Mejores Armas:</strong> Arma Z, Arma W</p>
                <p><strong>Mejores Artefactos:</strong> Artefacto G, Artefacto H</p>
                <p><strong>Mejor Equipo:</strong> Compañero 7, Compañero 8</p>
                <p><strong>Materiales de Mejora:</strong> Material M, Material N</p>
            `;
            break;
        // Agregar más casos para otros personajes

        default:
            guiaHTML = `<p>Guía no disponible para este personaje.</p>`;
    }

    // Mostrar la guía en la sección correspondiente
    document.getElementById('guiaPersonaje').innerHTML = guiaHTML;
}

// Mostrar la primera selección de juego (por defecto, Honkai Star Rail)
mostrarPersonajes('HonkaiStarRail');
