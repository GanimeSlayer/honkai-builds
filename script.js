// Cargar la guía del personaje desde el JSON
const characterData = {
    "kafka": {
        "name": "Kafka",
        "rarity": 5,
        "element": "Rayo",
        "path": "Erudición",
        "info": "Kafka es un personaje de... (descripción aquí)",
        "ascension": [
            {
                level: 1,
                materials: "Materiales para nivel 1",
                stats: { HP: 100, ATK: 10, DEF: 5, SPD: 10 }
            },
            {
                level: 20,
                materials: "Materiales para nivel 20",
                stats: { HP: 200, ATK: 20, DEF: 10, SPD: 15 }
            },
            {
                level: 40,
                materials: "Materiales para nivel 40",
                stats: { HP: 400, ATK: 40, DEF: 20, SPD: 20 }
            },
            {
                level: 60,
                materials: "Materiales para nivel 60",
                stats: { HP: 600, ATK: 60, DEF: 30, SPD: 25 }
            },
            {
                level: 80,
                materials: "Materiales para nivel 80",
                stats: { HP: 800, ATK: 80, DEF: 40, SPD: 30 }
            }
        ],
        "skills": [
            {
                level: 1,
                description: "Habilidad básica: daño inicial."
            },
            {
                level: 5,
                description: "Habilidad mejorada: daño aumentado."
            },
            {
                level: 10,
                description: "Habilidad máxima: daño máximo."
            }
        ],
        "eidolons": [
            { level: 1, effect: "Efecto del primer dupe" },
            { level: 2, effect: "Efecto del segundo dupe" },
            { level: 3, effect: "Efecto del tercer dupe" }
        ],
        "builds": {
            weapons: [
                { name: "Arma 1", info: "Información del arma 1" },
                { name: "Arma 2", info: "Información del arma 2" }
            ],
            artifacts: [
                { name: "Artefacto 1", info: "Información del artefacto 1" },
                { name: "Artefacto 2", info: "Información del artefacto 2" }
            ]
        },
        "teams": "Equipos recomendados: ...",
        "videos": "Enlace a videos: ...",
    }
};

// Esta función carga los datos del personaje en la página
function loadCharacterData(character) {
    document.getElementById("character-name").textContent = characterData[character].name;
    document.getElementById("character-rarity").textContent = "Rareza: ★".repeat(characterData[character].rarity);
    document.getElementById("character-element").textContent = "Elemento: " + characterData[character].element;
    document.getElementById("character-path").textContent = "Vía: " + characterData[character].path;
    document.getElementById("info").textContent = characterData[character].info;

    // Cargar Ascensión
    loadAscensionData(character);

    // Cargar Habilidades
    loadSkillsData(character);

    // Cargar Eidolones
    loadEidolonsData(character);

    // Cargar Builds
    loadBuildsData(character);

    document.getElementById("teams").textContent = characterData[character].teams;
    document.getElementById("videos").textContent = characterData[character].videos;
}

// Cargar los datos de Ascensión
function loadAscensionData(character) {
    const ascensionContent = document.getElementById("ascension");
    ascensionContent.innerHTML = "";
    
    const ascensionData = characterData[character].ascension;
    ascensionData.forEach(item => {
        const ascensionItem = document.createElement('div');
        ascensionItem.innerHTML = `
            <h4>Nivel ${item.level}</h4>
            <p>${item.materials}</p>
            <p>PV: ${item.stats.HP}, ATK: ${item.stats.ATK}, DEF: ${item.stats.DEF}, SPD: ${item.stats.SPD}</p>
        `;
        ascensionContent.appendChild(ascensionItem);
    });
}

// Cargar los datos de habilidades
function loadSkillsData(character) {
    const skillsContent = document.getElementById("skills");
    skillsContent.innerHTML = "";
    
    const skillsData = characterData[character].skills;
    skillsData.forEach(item => {
        const skillItem = document.createElement('div');
        skillItem.innerHTML = `
            <h4>Habilidad Nivel ${item.level}</h4>
            <p>${item.description}</p>
        `;
        skillsContent.appendChild(skillItem);
    });
}

// Cargar los datos de Eidolones
function loadEidolonsData(character) {
    const eidolonsContent = document.getElementById("eidolons");
    eidolonsContent.innerHTML = "";
    
    const eidolonsData = characterData[character].eidolons;
    eidolonsData.forEach(item => {
        const eidolonItem = document.createElement('div');
        eidolonItem.innerHTML = `
            <h4>Eidolón Nivel ${item.level}</h4>
            <p>${item.effect}</p>
        `;
        eidolonsContent.appendChild(eidolonItem);
    });
}

// Cargar las builds de armas y artefactos
function loadBuildsData(character) {
    const buildsContent = document.getElementById("builds");
    buildsContent.innerHTML = "";
    
    const weaponsData = characterData[character].builds.weapons;
    const artifactsData = characterData[character].builds.artifacts;

    let weaponsHtml = "<h3>Mejores Armas</h3>";
    weaponsData.forEach(item => {
        weaponsHtml += `
            <div class="build-item">
                <p>${item.name}</p>
                <p class="info-on-hover">${item.info}</p>
            </div>
        `;
    });

    let artifactsHtml = "<h3>Mejores Artefactos</h3>";
    artifactsData.forEach(item => {
        artifactsHtml += `
            <div class="build-item">
                <p>${item.name}</p>
                <p class="info-on-hover">${item.info}</p>
            </div>
        `;
    });

    buildsContent.innerHTML = weaponsHtml + artifactsHtml;
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
