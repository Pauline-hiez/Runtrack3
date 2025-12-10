
// --- Taquin simple pour 8 images + 1 case vide ---
$(function () {
    let count = 0;
    let seconds = 0;
    let minutes = 0;
    let chrono = null;

    function updateTime() {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        $(".time").text(`Temps : ${minutes}m ${seconds}s`);
    }

    function shuffle() {
        const $cases = $(".jeu > div").toArray();
        for (let i = $cases.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [$cases[i], $cases[j]] = [$cases[j], $cases[i]];
        }
        $(".jeu").empty().append($cases);
    }


    // Pour une grille 5x2 (5 colonnes, 2 lignes)
    function isAdjacent($a, $b) {
        const aIdx = $a.index();
        const bIdx = $b.index();
        const cols = 5;
        const rowA = Math.floor(aIdx / cols), colA = aIdx % cols;
        const rowB = Math.floor(bIdx / cols), colB = bIdx % cols;
        return (Math.abs(rowA - rowB) + Math.abs(colA - colB)) === 1;
    }

    function checkWin() {
        let win = true;
        $(".jeu > div").each(function (i) {
            if ($(this).find("img").length) {
                const num = $(this).find("img").attr("src").match(/(\d+)\.png/)[1];
                if (parseInt(num) !== i + 1) win = false;
            } else if (i !== 9) {
                win = false;
            }
        });
        if (win) {
            clearInterval(chrono);
            $(".win").css("padding", "10px").text("Vous avez gagné !");
        }
    }

    $("button").click(function () {
        shuffle();
        count = 0;
        seconds = 0;
        minutes = 0;
        $(".count").text("Nombre de coups : 0");
        $(".time").text("Temps : 0m 0s");
        $(".win").text("");
        if (chrono) clearInterval(chrono);
        chrono = setInterval(updateTime, 1000);
    });

    $(document).on("click", ".jeu > div", function () {
        const $empty = $(".jeu > div").filter(function () { return $(this).find("img").length === 0; });
        if (isAdjacent($(this), $empty)) {
            $empty.append($(this).find("img"));
            count++;
            $(".count").text("Nombre de coups : " + count);
            checkWin();
        }
    });
});