function calculerIMC() {
    let imc = poids.value / Math.pow(taille.value, 2)

    let message = "Vous êtes en état ";

    if (imc < 16.5) {
        message += "de dénutrition";
    }
    else if (imc >= 16.5 && imc < 18.5) {
        message += "de maigreur";
    }
    else if (imc >= 18.5 && imc < 25) {
        message += "normal 💪🏾";
    }
    else if (imc >= 25 && imc < 30) {
        message += "de surpoids";
    }
    else if (imc >= 30 && imc < 35) {
        message += "d'obésité modérée";
    }
    else if (imc >= 35 && imc < 45) {
        message += "d'obésité sévère";
    }

    else {
        message += "d'obésité orbide ou massive";
    }

let interpretation = "Votre IMC est de " + imc.toFixed(2);
interpretation += '<hr>' + message;

let resultArea = document.querySelector('#resultat label');
resultArea.innerHTML = interpretation;
resultat.hidden = false;

}
