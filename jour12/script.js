// HORLOGE ANALOGIQUE ET DIGITALE TEMPS RÉEL
function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // Calcul des angles
    const hourAngle = ((hour % 12) + minute / 60) * 30; // 360/12
    const minuteAngle = (minute + second / 60) * 6; // 360/60
    const secondAngle = second * 6; // 360/60

    // Sélection des aiguilles
    let handHour = document.getElementById('hand-hour');
    let handMinute = document.getElementById('hand-minute');
    let handSecond = document.getElementById('hand-second');

    if (handHour) handHour.style.transform = `translate(-50%, 0) rotate(${hourAngle}deg)`;
    if (handMinute) handMinute.style.transform = `translate(-50%, 0) rotate(${minuteAngle}deg)`;
    if (handSecond) handSecond.style.transform = `translate(-50%, 0) rotate(${secondAngle}deg)`;

    // Affichage digital
    let digital = document.getElementById('digital');
    if (digital) {
        digital.textContent = formatNumber(hour) + ':' + formatNumber(minute) + ':' + formatNumber(second);
    }
}
setInterval(updateClock, 1000);
updateClock();


// Ajouter un zéro devant les nombres < 10
function formatNumber(num) {
    return num < 10 ? "0" + num : num;
}
formatNumber(5);  // "05"
formatNumber(15); // "15"

// Exécuter toutes les secondes (1000ms)
const intervalId = setInterval(function () {
    console.log("Tick");
}, 1000);
// Arrêter l'interval
clearInterval(intervalId);

// Exécuter après 3 secondes
const timeoutId = setTimeout(function () {
    alert("Temps écoulé !");
}, 3000);
// Annuler le timeout
clearTimeout(timeoutId);

// Sélectionner UN élément
let element = document.getElementById("monId");
if (!element) element = document.querySelector("#monId");
if (!element) element = document.querySelector(".maClasse");
// Sélectionner PLUSIEURS éléments
let elements = document.querySelectorAll(".maClasse");
if (!elements.length) elements = document.getElementsByClassName("maClasse");

// Modifier le texte
if (element) element.textContent = "Nouveau texte";
// Modifier le HTML
if (element) element.innerHTML = "<b>Texte en gras</b>";

// Ajouter une classe
if (element) element.classList.add("active");
// Supprimer une classe
if (element) element.classList.remove("active");
// Toggle (ajouter si absent, retirer si présent)
if (element) element.classList.toggle("active");
// Vérifier si une classe existe
if (element && element.classList.contains("active")) {
    console.log("La classe active est présente");
}

// Modifier un style directement
if (element) {
    element.style.color = "red";
    element.style.fontSize = "20px";
    element.style.display = "none";
}

// Méthode moderne (recommandée)
let bouton = document.getElementById("monBouton");
if (bouton) {
    bouton.addEventListener("click", function () {
        console.log("Bouton cliqué !");
    });
    // Avec une fonction nommée
    function handleClick() {
        console.log("Bouton cliqué !");
    }
    bouton.addEventListener("click", handleClick);
}

// Détecter la touche Entrée
let input = document.getElementById("monInput");
if (input) {
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            console.log("Entrée pressée");
        }
    });

    // Récupérer la valeur
    let valeur = input.value;
    // Modifier la valeur
    input.value = "Nouvelle valeur";
    // Vider un input
    input.value = "";
}

// Désactiver un bouton
if (bouton) bouton.disabled = true;
// Activer un bouton
if (bouton) bouton.disabled = false;
// Toggle
if (bouton) bouton.disabled = !bouton.disabled;

//MINUTEUR
let tempsRestant = 0; // Valeur par défaut (0 min)
let intervalIdMinuteur = null;
let minuteurEnCours = false;

function afficherTempsMinuteur(secondes) {
    const minutes = Math.floor(secondes / 60);
    const secs = secondes % 60;
    const affichage = formatNumber(minutes) + ":" + formatNumber(secs);
    let aff = document.getElementById("affichageMinuteur");
    if (aff) aff.textContent = affichage;
}

function demarrerMinuteur() {
    if (minuteurEnCours) return;
    minuteurEnCours = true;
    let btn = document.getElementById("btn-minuteur");
    if (btn) btn.textContent = "Stopper";
    intervalIdMinuteur = setInterval(function () {
        tempsRestant--;
        afficherTempsMinuteur(tempsRestant);
        if (tempsRestant <= 0) {
            arreterMinuteur();
            alert("Temps écoulé !");
        }
    }, 1000);
}

function arreterMinuteur() {
    minuteurEnCours = false;
    clearInterval(intervalIdMinuteur);
    let btn = document.getElementById("btn-minuteur");
    if (btn) btn.textContent = "Démarrer";
}

// Gestion des flèches et input
window.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("minuteur-input");
    const arrowMinUp = document.getElementById("arrow-min-up");
    const arrowMinDown = document.getElementById("arrow-min-down");
    const arrowSecUp = document.getElementById("arrow-sec-up");
    const arrowSecDown = document.getElementById("arrow-sec-down");
    const btn = document.getElementById("btn-minuteur");

    function majInputEtAffichage(val) {
        tempsRestant = Math.max(1, Math.min(3599, val));
        if (input) input.value = tempsRestant;
        afficherTempsMinuteur(tempsRestant);
    }

    if (input) {
        input.addEventListener("input", function () {
            let val = parseInt(input.value, 10);
            if (isNaN(val) || val < 1) val = 1;
            if (val > 3599) val = 3599;
            majInputEtAffichage(val);
        });
    }
    if (arrowMinUp) {
        arrowMinUp.addEventListener("click", function () {
            majInputEtAffichage(tempsRestant + 60);
        });
    }
    if (arrowMinDown) {
        arrowMinDown.addEventListener("click", function () {
            majInputEtAffichage(tempsRestant - 60);
        });
    }
    if (arrowSecUp) {
        arrowSecUp.addEventListener("click", function () {
            majInputEtAffichage(tempsRestant + 1);
        });
    }
    if (arrowSecDown) {
        arrowSecDown.addEventListener("click", function () {
            majInputEtAffichage(tempsRestant - 1);
        });
    }
    if (btn) {
        btn.addEventListener("click", function () {
            if (!minuteurEnCours) {
                demarrerMinuteur();
            } else {
                arreterMinuteur();
            }
        });
    }
    // Initialisation affichage
    majInputEtAffichage(tempsRestant);
});

//CHRONOMETRE
let tempsEcoule = 0;
let intervalIdChrono = null;
let enMarche = false;
let tours = [];

function afficherTempsChrono(secondes) {
    let aff = document.getElementById("affichageChrono");
    if (aff) aff.textContent = secondesVersHMS(secondes);
}

function toggleChrono() {
    if (enMarche) {
        arreterChrono();
    } else {
        demarrerChrono();
    }
}

function demarrerChrono() {
    enMarche = true;
    intervalIdChrono = setInterval(function () {
        tempsEcoule++;
        afficherTempsChrono(tempsEcoule);
    }, 1000);
    let btn = document.getElementById("btnToggle");
    if (btn) btn.textContent = "Arrêter";
}

function arreterChrono() {
    enMarche = false;
    clearInterval(intervalIdChrono);
    let btn = document.getElementById("btnToggle");
    if (btn) btn.textContent = "Démarrer";
}

function enregistrerTour() {
    tours.push(tempsEcoule);
    afficherTours();
}

function afficherTours() {
    let liste = document.getElementById("listeTours");
    if (liste) {
        liste.innerHTML = tours.map((t, i) => `<li>Tour ${i + 1} : ${secondesVersHMS(t)}</li>`).join("");
    }
}

function resetChrono() {
    arreterChrono();
    tempsEcoule = 0;
    tours = [];
    afficherTempsChrono(tempsEcoule);
    afficherTours();
}

// Gestion des boutons du chrono
window.addEventListener("DOMContentLoaded", function () {
    let btnToggle = document.getElementById("btnToggle");
    let btnTour = document.getElementById("btnTour");
    let btnReset = document.getElementById("btnReset");
    afficherTempsChrono(tempsEcoule);
    afficherTours();
    if (btnToggle) {
        btnToggle.addEventListener("click", toggleChrono);
    }
    if (btnTour) {
        btnTour.addEventListener("click", enregistrerTour);
    }
    if (btnReset) {
        btnReset.addEventListener("click", resetChrono);
    }
});

//HORLOGE
function afficherHorloge() {
    const maintenant = new Date();
    const heures = formatNumber(maintenant.getHours());
    const minutes = formatNumber(maintenant.getMinutes());
    const secondes = formatNumber(maintenant.getSeconds());

    const affichage = heures + ":" + minutes + ":" + secondes;
    const horlogeElem = document.getElementById("horloge");
    if (horlogeElem) {
        horlogeElem.textContent = affichage;
    }
}
// Mettre à jour chaque seconde
setInterval(afficherHorloge, 1000);
// Afficher immédiatement au chargement
afficherHorloge();

//REVEIL
const alarmes = [
    {
        id: 1,
        heure: "15:30",
        message: "Réunion importante",
        declenchee: false
    },
    {
        id: 2,
        heure: "18:00",
        message: "Fin de journée",
        declenchee: false
    }
];

function verifierAlarmes() {
    const maintenant = new Date();
    const heureActuelle = formatNumber(maintenant.getHours()) + ":" +
        formatNumber(maintenant.getMinutes());

    alarmes.forEach(function (alarme) {
        if (alarme.heure === heureActuelle && !alarme.declenchee) {
            alert(alarme.message);
            alarme.declenchee = true;
        }
    });
}
// Vérifier chaque seconde
setInterval(verifierAlarmes, 1000);

// Secondes → Minutes:Secondes
function secondesVersMS(secondes) {
    const minutes = Math.floor(secondes / 60);
    const secs = secondes % 60;
    return formatNumber(minutes) + ":" + formatNumber(secs);
}
// Heures:Minutes:Secondes → Secondes totales
function HMSVersSecondes(heures, minutes, secondes) {
    return (heures * 3600) + (minutes * 60) + secondes;
}
// Secondes → Heures:Minutes:Secondes
function secondesVersHMS(secondes) {
    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor((secondes % 3600) / 60);
    const secs = secondes % 60;
    return formatNumber(heures) + ":" +
        formatNumber(minutes) + ":" +
        formatNumber(secs);
}

function calculerTempsRestant(heureAlarme) {
    const maintenant = new Date();
    const [heures, minutes] = heureAlarme.split(":");

    const alarme = new Date();
    alarme.setHours(parseInt(heures));
    alarme.setMinutes(parseInt(minutes));
    alarme.setSeconds(0);

    const diff = alarme - maintenant; // en millisecondes

    if (diff < 0) {
        return "Passée";
    }

    const heuresRestantes = Math.floor(diff / (1000 * 60 * 60));
    const minutesRestantes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return "Dans " + heuresRestantes + "h " + minutesRestantes + "min";
}

