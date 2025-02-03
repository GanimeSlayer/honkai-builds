// Función para mostrar los personajes según el juego seleccionado
function mostrarJuego(juego) {
    // Ocultar contenido anterior
    document.getElementById('pagina-principal').style.display = 'none';  // Ocultamos la página principal
    document.getElementById('personajes-juego').style.display = 'block';  // Mostramos la sección de personajes

    // Limpiar la lista de personajes
    document.getElementById('lista-personajes').innerHTML = '';

    // Cargar personajes del juego seleccionado
    let personajes = [];
    switch (juego) {
        case 'HonkaiStarRail':
            personajes = ['Kafka', 'Bronya', 'Seele'];  // Agregar los personajes de Honkai Star Rail
            break;
        case 'ZenlessZoneZero':
            personajes = ['Personaje 1', 'Personaje 2'];  // Agregar los personajes de Zenless Zone Zero
            break;
        case 'WutheringWaves':
            personajes = ['Personaje 1', 'Personaje 2'];  // Agregar los personajes de Wuthering Waves
            break;
        default:
            break;
    }

    // Mostrar los personajes en la lista
    personajes.forEach(function(personaje) {
        let li = document.createElement('li');
        li.innerHTML = `<a href="#" onclick="mostrarGuia('${personaje}')">${personaje}</a>`;
        document.getElementById('lista-personajes').appendChild(li);
    });  // Aquí se cierra correctamente la función forEach y la función mostrarJuego.
}

// Función para mostrar la guía del personaje seleccionado
function mostrarGuia(personaje) {
    // Ocultar la lista de personajes y mostrar la guía
    document.getElementById('personajes-juego').style.display = 'none';
    document.getElementById('guia-personaje').style.display = 'block';

    // Crear el contenido de la guía dependiendo del personaje
    let guiaHTML = '';
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
            guiaHTML = `
                <h2>Guía de Bronya (Honkai Star Rail)</h2>
                <p><strong>Mejores Armas:</strong> Arma 3, Arma 4</p>
                <p><strong>Mejores Artefactos:</strong> Artefacto C, Artefacto D</p>
                <p><strong>Mejor Equipo:</strong> Compañero 3, Compañero 4</p>
                <p><strong>Materiales de Mejora:</strong> Material Z, Material W</p>
                <p><strong>Guía en Video:</strong> <a href="#">Ver Video</a></p>
            `;
            break;
        case 'Personaje 1':
            guiaHTML = `
                <h2>Guía de Personaje 1 (Zenless Zone Zero)</h2>
                <p><strong>Mejores Armas:</strong> Arma X, Arma Y</p>
                <p><strong>Mejores Artefactos:</strong> Artefacto E, Artefacto F</p>
                <p><strong>Mejor Equipo:</strong> Compañero 5, Compañero 6</p>
                <p><strong>Materiales de Mejora:</strong> Material A, Material B</p>
                <p><strong>Guía en Video:</strong> <a href="#">Ver Video</a></p>
            `;
            break;
        case 'Personaje 2':
            guiaHTML = `
                <h2>Guía de Personaje 2 (Zenless Zone Zero)</h2>
                <p><strong>Mejores Armas:</strong> Arma Z, Arma W</p>
                <p><strong>Mejores Artefactos:</strong> Artefacto G, Artefacto H</p>
                <p><strong>Mejor Equipo:</strong> Compañero 7, Compañero 8</p>
                <p><strong>Materiales de Mejora:</strong> Material C, Material D</p>
                <p><strong>Guía en Video:</strong> <a href="#">Ver Video</a></p>
            `;
            break;
        // Agregar más personajes si es necesario
        default:
            guiaHTML = `<p>Guía no disponible para este personaje.</p>`;
    }

    // Mostrar la guía en la sección
    document.getElementById('contenido-guia').innerHTML = guiaHTML;
}
