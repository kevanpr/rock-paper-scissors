let characterSelection = 0;

function changeValue (heroValue) {
    return characterSelection = heroValue;
}

window.addEventListener("DOMContentLoaded", (event) => {
    let girlHero = document.querySelector('.girlHero');
    girlHero.addEventListener("click", function () {
        return characterSelection = 1;
    });
});

window.addEventListener("DOMContentLoaded", (event) => {
    let wizardHero = document.querySelector('.wizardHero');
    wizardHero.addEventListener("click", function () {
        return characterSelection = 2;
    });
});

window.addEventListener("DOMContentLoaded", (event) => {
    let boyHero = document.querySelector('.boyHero');
    boyHero.addEventListener("click", function () {
        return characterSelection = 3;
    });
});



window.addEventListener("DOMContentLoaded", (event) => {
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
});


/*
if (startBtn) {
    startBtn.addEventListener("click", function () {
        if (characterSelection = 1) {
            window.location.assign("../webpages/girl_rps.html");
        } else if (characterSelection = 2) {
            window.location.assign("../webpages/wizard_rps.html");
        } else if (characterSelection = 3) {
            window.location.assign("../webpages/boy_rps.html");
        }
        });
} */

