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
            afficherAlerteMinuteur("Temps écoulé !");
            SilentHillAlert("Temps écoulé !");
        }
    }, 1000);
    function afficherAlerteMinuteur(message) {
        const alerte = document.getElementById("alerte-minuteur");
        const msg = document.getElementById("message-minuteur");
        if (alerte && msg) {
            msg.textContent = message;
            alerte.classList.remove("hidden");
            // Ajoute la vibration uniquement à l'horloge
            const horloge = document.getElementById('horloge-cadre');
            if (horloge) horloge.classList.add('vibration-horloge');
            // Suppression du setTimeout pour laisser l'alerte visible jusqu'à l'action utilisateur
        }
    }
}

function arreterMinuteur() {
    minuteurEnCours = false;
    clearInterval(intervalIdMinuteur);
    let btn = document.getElementById("btn-minuteur");
    if (btn) btn.textContent = "Démarrer";
}

// Gestion des flèches et input
window.addEventListener("DOMContentLoaded", function () {
    const inputHour = document.getElementById("minuteur-hour");
    const inputMinute = document.getElementById("minuteur-minute");
    const inputSecond = document.getElementById("minuteur-second");
    const arrowMinUp = document.getElementById("arrow-min-up");
    const arrowMinDown = document.getElementById("arrow-min-down");
    const arrowSecUp = document.getElementById("arrow-sec-up");
    const arrowSecDown = document.getElementById("arrow-sec-down");
    const btn = document.getElementById("btn-minuteur");

    function getTotalSeconds() {
        const h = parseInt(inputHour.value, 10) || 0;
        const m = parseInt(inputMinute.value, 10) || 0;
        const s = parseInt(inputSecond.value, 10) || 0;
        return Math.max(1, Math.min(23 * 3600 + 59 * 60 + 59, h * 3600 + m * 60 + s));
    }

    function setInputsFromSeconds(total) {
        const h = Math.floor(total / 3600);
        const m = Math.floor((total % 3600) / 60);
        const s = total % 60;
        inputHour.value = h;
        inputMinute.value = m;
        inputSecond.value = s;
    }

    function majInputEtAffichage(val) {
        tempsRestant = Math.max(1, Math.min(23 * 3600 + 59 * 60 + 59, val));
        setInputsFromSeconds(tempsRestant);
        afficherTempsMinuteur(tempsRestant);
    }

    [inputHour, inputMinute, inputSecond].forEach(function (input) {
        if (input) {
            input.addEventListener("input", function () {
                let total = getTotalSeconds();
                majInputEtAffichage(total);
            });
        }
    });

    if (arrowMinUp) {
        arrowMinUp.addEventListener("click", function () {
            majInputEtAffichage(getTotalSeconds() + 60);
        });
    }
    if (arrowMinDown) {
        arrowMinDown.addEventListener("click", function () {
            majInputEtAffichage(getTotalSeconds() - 60);
        });
    }
    if (arrowSecUp) {
        arrowSecUp.addEventListener("click", function () {
            majInputEtAffichage(getTotalSeconds() + 1);
        });
    }
    if (arrowSecDown) {
        arrowSecDown.addEventListener("click", function () {
            majInputEtAffichage(getTotalSeconds() - 1);
        });
    }
    if (btn) {
        btn.addEventListener("click", function () {
            if (!minuteurEnCours) {
                tempsRestant = getTotalSeconds();
                demarrerMinuteur();
            } else {
                arreterMinuteur();
            }
        });
    }
    // Initialisation affichage
    majInputEtAffichage(getTotalSeconds());
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
let alarmes = [];
let historiqueAlarmes = [];

function afficherAlarmes() {
    const liste = document.getElementById("liste-alarmes");
    if (!liste) return;
    liste.innerHTML = alarmes.map((a, i) => {
        let etat = "";
        let actions = "";
        if (a.declenchee) {
            etat = '<span class="ml-2 text-[#ff3b3b]">passée</span>';
        } else {
            etat = '<span class="ml-2 text-[#a78bfa]">' + calculerTempsRestant(a.heure) + '</span>';
            actions = `<button class='modif-alarme-btn bg-[#7c5fe6] text-white px-2 py-1 rounded ml-2' data-index='${i}'>Modifier</button><button class='suppr-alarme-btn bg-[#ff3b3b] text-white px-2 py-1 rounded ml-2' data-index='${i}'>Supprimer</button>`;
        }
        return `<li><b>${a.heure}</b> : ${a.message} ${etat} ${actions}</li>`;
    }).join("");
    afficherHistoriqueAlarmes();
}

function afficherHistoriqueAlarmes() {
    const liste = document.getElementById("historique-alarmes");
    const btnEffacer = document.getElementById("btn-effacer-alarmes");
    if (!liste) return;
    if (historiqueAlarmes.length === 0) {
        liste.innerHTML = '<li class="text-gray-400">Aucune alarme enregistrée</li>';
        if (btnEffacer) btnEffacer.style.display = "none";
        return;
    }
    liste.innerHTML = historiqueAlarmes.map((a, i) => {
        return `<li><b>${a.heure}</b> : ${a.message}</li>`;
    }).join("");
    if (btnEffacer) btnEffacer.style.display = "block";
}

function verifierAlarmes() {
    const maintenant = new Date();
    const heureActuelle = formatNumber(maintenant.getHours()) + ":" + formatNumber(maintenant.getMinutes());
    alarmes.forEach(function (alarme) {
        if (alarme.heure === heureActuelle && !alarme.declenchee) {
            afficherAlerteAlarme(alarme.message);
            alarme.declenchee = true;
            historiqueAlarmes.push({ heure: alarme.heure, message: alarme.message });
        }
    });
    afficherAlarmes();
}

function afficherAlerteAlarme(message) {
    const alerte = document.getElementById("alerte-alarme");
    const msg = document.getElementById("message-alarme");
    if (alerte && msg) {
        msg.textContent = message;
        alerte.classList.remove("hidden");
        // Ajoute la vibration uniquement à l'horloge
        const horloge = document.getElementById('horloge-cadre');
        if (horloge) horloge.classList.add('vibration-horloge');
        SilentHillAlert(message);
        // Suppression du setTimeout pour laisser l'alerte visible jusqu'à l'action utilisateur
    }
}

window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-alarme");
    const inputHeure = document.getElementById("input-heure-alarme");
    const inputMsg = document.getElementById("input-message-alarme");
    const btnEffacer = document.getElementById("btn-effacer-alarmes");
    let modifForm = document.getElementById("modif-alarme-form");
    let modifHeure = document.getElementById("modif-heure-alarme");
    let modifMsg = document.getElementById("modif-message-alarme");
    let btnModif = document.getElementById("btn-modif-alarme");
    let btnAnnuler = document.getElementById("btn-annuler-modif");
    let indexModif = null;
    if (form && inputHeure && inputMsg) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const heure = inputHeure.value;
            const message = inputMsg.value.trim();
            if (!heure || !message) return;
            alarmes.push({ heure, message, declenchee: false });
            afficherAlarmes();
            form.reset();
        });
    }
    if (btnEffacer) {
        btnEffacer.addEventListener("click", function () {
            historiqueAlarmes = [];
            afficherHistoriqueAlarmes();
        });
    }
    // Gestion des boutons modifier/supprimer
    document.getElementById("liste-alarmes").addEventListener("click", function (e) {
        if (e.target.classList.contains("modif-alarme-btn")) {
            indexModif = parseInt(e.target.getAttribute("data-index"));
            let a = alarmes[indexModif];
            if (modifForm && modifHeure && modifMsg) {
                modifHeure.value = a.heure;
                modifMsg.value = a.message;
                modifForm.classList.remove("hidden");
            }
        }
        if (e.target.classList.contains("suppr-alarme-btn")) {
            let idx = parseInt(e.target.getAttribute("data-index"));
            alarmes.splice(idx, 1);
            afficherAlarmes();
        }
    });
    if (btnModif) {
        btnModif.addEventListener("click", function () {
            if (indexModif !== null && modifHeure.value && modifMsg.value) {
                alarmes[indexModif].heure = modifHeure.value;
                alarmes[indexModif].message = modifMsg.value.trim();
                modifForm.classList.add("hidden");
                afficherAlarmes();
                indexModif = null;
            }
        });
    }
    if (btnAnnuler) {
        btnAnnuler.addEventListener("click", function () {
            modifForm.classList.add("hidden");
            indexModif = null;
        });
    }
    afficherAlarmes();
});

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

// Gestion de la navbar et affichage dynamique des modules
(function () {
    function showSection(section) {
        const sections = ["minuteur", "chrono", "reveil"];
        sections.forEach(s => {
            const sec = document.getElementById("section-" + s);
            const nav = document.getElementById("nav-" + s);
            if (sec) sec.classList.add("hidden");
            if (nav) nav.classList.remove("text-[#a78bfa]");
            nav && nav.classList.remove("focus:text-[#a78bfa]", "hover:text-[#a78bfa]");
        });
        const activeSec = document.getElementById("section-" + section);
        const activeNav = document.getElementById("nav-" + section);
        if (activeSec) activeSec.classList.remove("hidden");
        // On ne change plus la couleur du texte, il reste blanc

        // Effet lumineux glissant
        const glow = document.getElementById('navbar-glow');
        const container = document.getElementById('navbar-container');
        if (glow && container && activeNav) {
            const navRect = activeNav.getBoundingClientRect();
            const contRect = container.getBoundingClientRect();
            glow.style.left = (navRect.left - contRect.left) + 'px';
            glow.style.width = navRect.width + 'px';
            glow.style.top = (navRect.top - contRect.top + navRect.height / 2) + 'px';
            glow.style.height = navRect.height + 12 + 'px';
        }
    }
    document.addEventListener("DOMContentLoaded", function () {
        showSection("minuteur");
        ["minuteur", "chrono", "reveil"].forEach(s => {
            const nav = document.getElementById("nav-" + s);
            if (nav) nav.addEventListener("click", function () { showSection(s); });
        });
        // Initialisation de l'effet lumineux
        setTimeout(() => {
            const activeNav = document.getElementById("nav-minuteur");
            const glow = document.getElementById('navbar-glow');
            const container = document.getElementById('navbar-container');
            if (glow && container && activeNav) {
                const navRect = activeNav.getBoundingClientRect();
                const contRect = container.getBoundingClientRect();
                glow.style.left = (navRect.left - contRect.left) + 'px';
                glow.style.width = navRect.width + 'px';
            }
        }, 100);
    });
})();

function SilentHillAlert(message) {
    console.log('SilentHillAlert appelée avec message :', message);

    const sound = document.getElementById('alert-sound');
    if (sound) {
        sound.pause();
        sound.currentTime = 0;
        let repetitions = 0;

        // Fonction pour jouer le son plusieurs fois
        const playAlert = () => {
            if (repetitions < 2) {
                sound.currentTime = 0;
                sound.play().catch(e => console.log("Erreur lecture"));
                repetitions++;
            } else {
                clearInterval(intervalSon);
            }
        };

        playAlert();
        // Utilise la durée du son pour éviter de le couper
        const intervalSon = setInterval(playAlert, (sound.duration ? sound.duration * 1000 : 1200) + 200);
        sound._alertInterval = intervalSon;
    }
}

function stopAlertSound() {
    const sound = document.getElementById('alert-sound');
    if (sound) {
        sound.pause();
        sound.currentTime = 0;
        // Arrête l'intervalle si présent
        if (sound._alertInterval) {
            clearInterval(sound._alertInterval);
            sound._alertInterval = null;
        }
    }
    // Retire la vibration de l'horloge
    const horloge = document.getElementById('horloge-cadre');
    if (horloge) horloge.classList.remove('vibration-horloge');
    // Masque les alertes minuteur/réveil si présentes
    const alerteMinuteur = document.getElementById("alerte-minuteur");
    if (alerteMinuteur) alerteMinuteur.classList.add("hidden");
    const alerteAlarme = document.getElementById("alerte-alarme");
    if (alerteAlarme) alerteAlarme.classList.add("hidden");
}

window.addEventListener("DOMContentLoaded", function () {
    const btnStopMinuteur = document.getElementById("btn-stop-son-minuteur");
    const btnStopReveil = document.getElementById("btn-stop-son-reveil");
    if (btnStopMinuteur) {
        btnStopMinuteur.addEventListener("click", stopAlertSound);
    }
    if (btnStopReveil) {
        btnStopReveil.addEventListener("click", stopAlertSound);
    }
});