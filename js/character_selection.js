let characterSelection = 0;

window.addEventListener("DOMContentLoaded", (event) => {

    let chosenHero = document.querySelector('.chosenHero');

    let girlHero = document.querySelector('.girlHero');
    girlHero.addEventListener("click", function () {
        chosenHero.textContent = "Alifir";     
    });

    let wizardHero = document.querySelector('.wizardHero');
    wizardHero.addEventListener("click", function () {
        chosenHero.textContent = "Klein";        
    });

    let boyHero = document.querySelector('.boyHero');
    boyHero.addEventListener("click", function () {
        chosenHero.textContent = "Henriette";
    });

    /*

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
        }); */
});


    /*
    function changeHero (hero) {
        switch (hero) {
            case ('Alifir'): 
                document.querySelector('.chosenHero').textContent = "Alifir";
                document.querySelector('.start').window.location.assign("../webpages/girl_rps.html");
                break;
            case ('Klein'):
                document.querySelector('.chosenHero').textContent = "Klein";
                document.querySelector('.start').window.location.assign("../webpages/wizard_rps.html");
                break;
            case('Henriette'):
                document.querySelector('.chosenHero').textContent = "Henriette";
                document.querySelector('.start').window.location.assign("../webpages/boy_rps.html");
                break;
            default:
                document.querySelector('.chosenHero').textContent = "";
                break;
        }
    } */