// Modale modalePapillon
const modalePapillon = `
<div class="modal fade" id="modalePapillon" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Confirmation d'achat</h5>
      </div>
      <div class="modal-body">
        <p>Félicitations ! Vous avez acheté un papillon ! 🦋</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>
`;

document.body.insertAdjacentHTML("beforeend", modalePapillon);

//Clique sur le papillon
document.querySelector(".card .btn-primary").addEventListener("click", function (e) {
    e.preventDefault();

    // Affiche la modale
    const modale = document.getElementById("modalePapillon");
    modale.classList.add("show");
    modale.style.display = "block";
    document.body.classList.add("modal-open");

    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop fade show";
    document.body.appendChild(backdrop);

    //Ferme la modale
    modale.querySelector(".btn-secondary").addEventListener("click", function () {
        modale.classList.remove("show");
        modale.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.remove();
    });
});

//Boutin rebooter le monde
const bladeRunner = [
    "J'ai vu tant de choses que vous, humains, ne pourriez pas croire...",
    "Révéille-toi ! Il est temps de mourir.",
    "J'ai peur de mourir.",
    "Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie.",
    "C'est dommage qu'elle ne vive pas ! Mais qui vit éternellement ?"
];

document.querySelector(".btn-danger").addEventListener("click", function () {
    const citationAleatoire = bladeRunner[Math.floor(Math.random() * bladeRunner.length)];
    document.querySelector(".col-8 .lead").textContent = citationAleatoire;
});

//Pagination
const contenu = [
    "Fais-le ou ne le fais pas. Il n'y a pas d'essai. Yoda.",
    "La peur mène à la colère. La colère mène à la haine. La haine mène à la souffrance. Yoda.",
    "La taille importe peu. Regarde-moi. Est-ce à cause de ma taille que tu me juge ? Yoda."
];


const pagination = document.querySelectorAll(".pagination .page-item a.page-link");

pagination.forEach(function (lien) {
    lien.addEventListener("click", function (e) {
        e.preventDefault();
        const texte = lien.textContent.trim();
        if (texte === "1" || texte === "2" || texte === "3") {
            const indexContenu = parseInt(texte) - 1;
            document.querySelector(".col-8 .lead").textContent = contenu[indexContenu];
        }
    });
});


//Liste groupée
const liste = document.querySelectorAll(".list-group-item");

liste.forEach(function (element) {
    element.addEventListener("click", function () {
        liste.forEach(l => l.classList.remove("active"));

        element.classList.add("active")
    });
});