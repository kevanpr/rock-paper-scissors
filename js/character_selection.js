let characterSelection = undefined;

const girlHero = document.querySelector('#girlHero');
btn.addEventListener("click", () => characterSelection = 0);

const wizardHero = document.querySelector('#wizardHero');
btn.addEventListener("click", () => characterSelection = 1);

const boyHero = document.querySelector('#boyHero');
btn.addEventListener("click", () => characterSelection = 2);

const startBtn = document.querySelector('#startBtn');
btn.addEventListener("click", function () {
    if (characterSelection = 0) {
        window.location.assign("../webpages/girl_rps.html");
    } else if (characterSelection = 1) {
        window.location.assign("../webpages/wizard_rps.html");
    } else if (characterSelection = 2) {
        window.location.assign("../webpages/boy_rps.html");
    } else {
        alert ("Error");
    }
});