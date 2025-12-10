document.addEventListener("DOMContentLoaded", async function () {
    const form = document.getElementById("filterForm");
    const idInput = form.elements["id"];
    const nomInput = form.elements["nom"];
    const typeSelect = form.elements["type"];
    const filterBtn = form.elements["filtrer"];
    const resultDiv = document.getElementById("results");

    //Récupère tous les Pokémons
    let pokemons = [];
    try {
        const response = await fetch("pokemon.json");
        pokemons = await response.json();
    } catch (e) {
        resultsDiv.textContent = "Erreur de chargement du fichier pokemon.json";
        return;
    }

    //Rempli le select avec les types
    const allTypes = Array.from(new Set(pokemons.flatMap(p => p.type))).sort();
    allTypes.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        typeSelect.appenChild(option);
    })
})