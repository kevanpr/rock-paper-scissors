let characterSelection = 0;

const girlHero = document.querySelector('#girlHero');
girlHero.addEventListener("click", () => characterSelection = 1);

const wizardHero = document.querySelector('#wizardHero');
wizardHero.addEventListener("click", () => characterSelection = 2);

const boyHero = document.querySelector('#boyHero');
boyHero.addEventListener("click", () => characterSelection = 3);

const startBtn = document.querySelector('#startBtn');
btn.addEventListener("click", function () {
    if (characterSelection = 1) {
        window.location.assign("../webpages/girl_rps.html");
    } else if (characterSelection = 2) {
        window.location.assign("../webpages/wizard_rps.html");
    } else if (characterSelection = 3) {
        window.location.assign("../webpages/boy_rps.html");
    } else {
        alert ("Choose a character.");
    }
});