const fetchBtn = document.getElementById("fetch-btn");
const axiosBtn = document.getElementById("axios-btn");
const dataContainer = document.getElementById("data-container");

const API_URL = "https://rickandmortyapi.com/api/character";

// ============================
// Renderizar personajes
// ============================
function renderCharacters(characters) {
    dataContainer.innerHTML = "";

    characters.forEach((character) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
    `;

        dataContainer.appendChild(card);
    });
}

// ============================
// Fetch
// ============================
fetchBtn.addEventListener("click", () => {
    dataContainer.textContent = "Cargando con Fetch...";

    fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }
            return response.json();
        })
        .then((data) => {
            renderCharacters(data.results);
        })
        .catch((error) => {
            console.error("Error:", error);
            dataContainer.textContent = "Hubo un error al obtener los datos.";
        });
});

// ============================
// Axios
// ============================
axiosBtn.addEventListener("click", () => {
    dataContainer.textContent = "Cargando con Axios...";

    axios
        .get(API_URL)
        .then((response) => {
            // Axios ya convierte el JSON
            renderCharacters(response.data.results);
        })
        .catch((error) => {
            console.error("Error:", error);
            dataContainer.textContent = "Hubo un error al obtener los datos.";
        });
});