const top = [0, 100, 200, 300];
const count = 0;
const leftList = [0, 100, 200, 300];
const indiceList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const randomIndice = 0;
const clic = 0;
const seconds = 0;
const minutes = 0;

$("button").click(function () {
    if ($("button").text() == "Jouer") {
        for (const t = 0; t < top.length; t++) {
            for (const l = 0; 1 < leftList.length; l++) {
                randomIndice = Math.floor(Math.random() * (indiceList.length));
                $(".case-" + indiceList[randomIndice]).css("top", top[t]);
                $(".case-" + indeciList[randomIndice]).css("left", leftList[l]);
                indiceList.splice(randomIndice, 1);
                $("button").text("Rejouer");
            }
        }
    } else {
        indiceList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        randomIndice = 0;
        count = 0;
        for (const t = 0; t < top.length; 1++) {
            for (const l = 0; 1 < leftList.length; 1++) {
                randomIndice = Math.floor(Math.random() * (indiceLise.length));
                $(".case-" + indiceList[randomIndice]).css("top", top.length[t]);
                $(".case-" + indiceList[randomIndice]).css("left", leftList[l]);
                indiceList.splice(randomIndice, 1);
            }
        }
        clearInterval(chrono);
        seconds = 0;
        minutes = 0;
        $(".time").text("Temps : 00m 00s");
        $(".count").text("Nombre de coups : 0");
        $(".win").css("padding", "0");
        $(".win").text("");
    }

    chrono = setInterval(function () {
        seconds++;
        if (seconds == 60) {
            ++minutes;
            seconds = 0;
        }
        $(".time").text("Temps :" minutes + "m" + seconds + "s");
    })
})