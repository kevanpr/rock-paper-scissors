window.addEventListener("DOMContentLoaded", (event) => {

    let chosenHero = document.querySelector('.chosenHero');
    let start = document.querySelector('.start');

    let girlHero = document.querySelector('.girlHero');
    girlHero.addEventListener("click", function () {
        chosenHero.textContent = "Alifir";  
        
        start.addEventListener("click", () => {
            window.location.assign("../webpages/girl_rps.html");
        });
    });

    let wizardHero = document.querySelector('.wizardHero');
    wizardHero.addEventListener("click", function () {
        chosenHero.textContent = "Klein";
        
        start.addEventListener("click", () => {
            window.location.assign("../webpages/wizard_rps.html");
        });
    });

    let boyHero = document.querySelector('.boyHero');
    boyHero.addEventListener("click", function () {
        chosenHero.textContent = "Henriette";

        start.addEventListener("click", () => {
            window.location.assign("../webpages/boy_rps.html");
        });
    });
});