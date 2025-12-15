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

    document.querySelector(".card-body2 .card-text").textContent = citationAleatoire;
});




