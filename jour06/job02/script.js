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


