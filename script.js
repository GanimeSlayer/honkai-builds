// Función para mostrar la página principal
function mostrarInicio() {
    // Mostrar la sección principal
    document.getElementById('pagina-principal').style.display = 'block';

    // Ocultar las secciones de personajes y guías
    document.getElementById('personajes-juego').style.display = 'none';
    document.getElementById('guia-personaje').style.display = 'none';

    // Limpiar el contenido previo de la guía
    document.getElementById('contenido-guia').innerHTML = '';
}

// Función para mostrar los personajes según el juego seleccionado
function mostrarJuego(juego) {
    // Ocultar la página principal y la guía de personajes
    document.getElementById('pagina-principal').style.display = 'none';
    document.getElementById('guia-personaje').style.display = 'none';

    // Limpiar el contenido previo de la guía
    document.getElementById('contenido-guia').innerHTML = '';

    // Mostrar la sección de personajes y limpiar la lista
    document.getElementById('personajes-juego').style.display = 'block';
    document.getElementById('lista-personajes').innerHTML = '';

    // Cargar personajes del juego seleccionado
    let personajes = [];
    switch (juego) {
        case 'HonkaiStarRail':
            personajes = ['Kafka', 'Bronya', 'Seele'];
            break;
        case 'ZenlessZoneZero':
            personajes = ['Personaje 1', 'Personaje 2'];
            break;
        case 'WutheringWaves':
            personajes = ['Personaje 1', 'Personaje 2'];
            break;
        default:
            break;
    }

    // Mostrar los personajes en la lista
    personajes.forEach(function(personaje) {
        let li = document.createElement('li');
        li.innerHTML = `<a href="#" onclick="mostrarGuia('${personaje}', '${juego}')">${personaje}</a>`;
        document.getElementById('lista-personajes').appendChild(li);
    });
}

// Función para mostrar la guía del personaje seleccionado
function mostrarGuia(personaje, juego) {
    // Ocultar la lista de personajes y mostrar la guía
    document.getElementById('personajes-juego').style.display = 'none';
    document.getElementById('guia-personaje').style.display = 'block';

    // Crear el contenido de la guía dependiendo del personaje
    let guiaHTML = '';
    if (juego === 'HonkaiStarRail') {
        switch (personaje) {
            case 'Kafka':
                guiaHTML = `
                    <h2>Guía de Kafka (Honkai Star Rail)</h2>
                    <p><strong>Mejores Armas:</strong> Arma 1, Arma 2</p>
                    <p><strong>Mejores Artefactos:</strong> Artefacto A, Artefacto B</p>
                    <p><strong>Mejor Equipo:</strong> Compañero 1, Compañero 2</p>
                    <p><strong>Materiales de Mejora:</strong> Material X, Material Y</p>
                    <p><strong>Guía en Video:</strong> <a href="#">Ver Video</a></p>
                `;
                break;
            case 'Bronya':
                guiaHTML = `<h2>Guía de Bronya (Honkai Star Rail)</h2><p>Contenido en construcción.</p>`;
                break;
            case 'Seele':
                guiaHTML = `<h2>Guía de Seele (Honkai Star Rail)</h2><p>Contenido en construcción.</p>`;
                break;
            default:
                guiaHTML = `<p>Guía no disponible para este personaje.</p>`;
        }
    } else if (juego === 'ZenlessZoneZero') {
        switch (personaje) {
            case 'Personaje 1':
                guiaHTML = `<h2>Guía de Personaje 1 (Zenless Zone Zero)</h2><p>Contenido en construcción.</p>`;
                break;
            case 'Personaje 2':
                guiaHTML = `<h2>Guía de Personaje 2 (Zenless Zone Zero)</h2><p>Contenido en construcción.</p>`;
                break;
            default:
                guiaHTML = `<p>Guía no disponible para este personaje.</p>`;
        }
    } else if (juego === 'WutheringWaves') {
        switch (personaje) {
            case 'Personaje 1':
                guiaHTML = `<h2>Guía de Personaje 1 (Wuthering Waves)</h2><p>Contenido en construcción.</p>`;
                break;
            case 'Personaje 2':
                guiaHTML = `<h2>Guía de Personaje 2 (Wuthering Waves)</h2><p>Contenido en construcción.</p>`;
                break;
            default:
                guiaHTML = `<p>Guía no disponible para este personaje.</p>`;
        }
    }

    // Mostrar la guía en la sección
    document.getElementById('contenido-guia').innerHTML = guiaHTML;
}
