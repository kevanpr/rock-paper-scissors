let characterSelection = 0;

window.addEventListener("DOMContentLoaded", (event) => {

    let girlHero = document.querySelector('.girlHero');
    girlHero.addEventListener("click", function () {
        return characterSelection = 1;
    });

    let wizardHero = document.querySelector('.wizardHero');
    wizardHero.addEventListener("click", function () {
        return characterSelection = 2
    });

    let boyHero = document.querySelector('.boyHero');
    boyHero.addEventListener("click", function () {
        return characterSelection = 3;
    });

    /*

    let startBtn = document.querySelector('.start');
    startBtn.addEventListener("click", function () {
        if (characterSelection = 1) {
            window.location.assign("../webpages/girl_rps.html");
        } else if (characterSelection = 2) {
            window.location.assign("../webpages/wizard_rps.html");
        } else if (characterSelection = 3) {
            window.location.assign("../webpages/boy_rps.html");
        }
        });

    let chosenHero = document.querySelector('.chosenHero');
    let cH = "";

    if (characterSelection = 1) {
        cH = document.createTextNode("Alifir");
    } else if (characterSelection = 2) {
        cH = document.createTextNode("Klein");
    } else if (characterSelection = 3) {
        cH = document.createTextNode("Henriette");
    } else if (characterSelection = 0) {
        cH = document.createTextNode("None");
    }

    chosenHero.appendChild(cH); 
    */
});