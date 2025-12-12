//Navbar
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});



//Récupère les éléments des formulaires
const form = document.getElementById("formInscription");
const nomInput = document.getElementById("nom");
const prenomInput = document.getElementById("prenom");
const emailInput = document.getElementById("email");
const mdpInput = document.getElementById("mdp");
const adresseInput = document.getElementById("adresse");
const codepostalInput = document.getElementById("codepostal");

function attendre(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Validation du nom
async function validerNom() {
    const nom = nomInput.value.trim();
    const erreurNom = document.getElementById("erreur-nom");

    await attendre(300);

    if (nom === "") {
        erreurNom.textContent = "Vous devez entrer votre nom";
        erreurNom.classList.add("visible");
        nomInput.classList.add("erreur");
        nomInput.classList.remove("valide");
        return false;
    }

    if (nom.length < 2) {
        erreurNom.textContent = "Le nom doit contenir au moins 2 caractères";
        erreurNom.classList.add("visible");
        nomInput.classList.add("erreur");
        nomInput.classList.remove("valide");
        return false;
    }
}

//Validation du prénom
async function validerPrenom() {
    const prenom = prenomInput.value.trim();
    const erreurPrenom = document.getElementById("erreur-prenom");

    await attendre(300);

    if (prenom === "") {
        erreurPrenom.textContent = "Vous devez entrer votre prénom";
        erreurPrenom.classList.add("visible");
        erreurPrenom.classList.add("erreur");
        prenomInput.classList.remove("valide");
        return false;
    }

    if (prenom.length < 2) {
        erreurPrenom.textContent = "Le prénom doit contenir au moins 2 caractères";
        erreurPrenom.classList.add("visible");
        erreurPrenom.classList.add("erreur");
        prenomInput.classList.remove("valide");
        return false;
    }
}

//Validation Email
async function validerEmail() {
    const email = emailInput.value.trim();
    const erreurEmail = document.getElementById('erreur-email');

    await attendre(300);

    if (email === '') {
        erreurEmail.textContent = 'L\'email est obligatoire';
        erreurEmail.classList.add('visible');
        emailInput.classList.add('erreur');
        emailInput.classList.remove('valide');
        return false;
    }
}

//Validation mot de passe
async function validerMdp() {
    const mdp = mdpInput.value;
    const erreurMdp = document.getElementById("erreur-mdp");

    await attendre(300);

    if (mdp === "") {
        erreurMdp.textContent = "Vous devez entrer votre mot de passe";
        erreurMdp.classList.add("visible");
        mdpInput.classList.add("erreur");
        mdpInput.classList.remove("valide");
        return false;
    }

    if (mdp.length < 8) {
        erreurMdp.textContent = "Le mot de passe doit contenur au moins 8 caractères"
        erreurMdp.classList.add("visible");
        mdpInput.classList.add("erreur");
        mdpInput.classList.remove("valide");
        return false;
    }

    //Vérifie qu'il y a une maj, une min et un chiffre
    const regexMaj = /[A-Z]/;
    const regexMin = /[a-z]/;
    const regexChiffre = /[0-9]/;

    if (!regexMaj.test(mdp) || !regexMin.test(mdp) || !regexChiffre.test(mdp)) {
        erreurMdp.textContent = "Votre mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre";
        erreurMdp.classList.add("visible");
        mdpInput.classList.add("erreur");
        mdpInput.classList.remove("valide");
        return false;
    }

    erreurMdp.classList.remove("visible");
    mdpInput.classList.remove("erreur");
    mdpInput.classList.add("valide");
    return true;
}

//Validation de l'adresse
async function validerAdresse() {

}

