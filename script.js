// Cargar la guía del personaje desde el JSON
const characterData = {
    "kafka": {
        "name": "Kafka",
        "rarity": 5,
        "element": "Rayo",
        "path": "Erudición",
        "info": "Kafka es un personaje de... (descripción aquí)",
        "ascension": "Materiales de ascensión: ...",
        "skills": "Habilidades: ...",
        "eidolons": "Eidolones: ...",
        "builds": "Mejor build: ...",
        "teams": "Equipos recomendados: ...",
        "videos": "Enlace a videos: ..."
    }
};

// Esta función carga los datos del personaje en la página
function loadCharacterData(character) {
    document.getElementById("character-name").textContent = characterData[character].name;
    document.getElementById("character-rarity").textContent = "Rareza: ★".repeat(characterData[character].rarity);
    document.getElementById("character-element").textContent = "Elemento: " + characterData[character].element;
    document.getElementById("character-path").textContent = "Vía: " + characterData[character].path;
    document.getElementById("info").textContent = characterData[character].info;
    document.getElementById("ascension").textContent = characterData[character].ascension;
    document.getElementById("skills").textContent = characterData[character].skills;
    document.getElementById("eidolons").textContent = characterData[character].eidolons;
    document.getElementById("builds").textContent = characterData[character].builds;
    document.getElementById("teams").textContent = characterData[character].teams;
    document.getElementById("videos").textContent = characterData[character].videos;
}

// Esta función muestra el contenido de la pestaña seleccionada
function showTab(tabName) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => {
        tab.style.display = "none"; // Ocultar todas las pestañas
    });
    document.getElementById(tabName).style.display = "block"; // Mostrar la pestaña seleccionada
}

// Inicializar la guía de Kafka cuando la página cargue
document.addEventListener("DOMContentLoaded", function() {
    loadCharacterData("kafka");
    showTab('info'); // Mostrar la pestaña de Información por defecto
});
