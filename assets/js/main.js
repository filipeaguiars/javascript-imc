function calcIMC() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');



    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        let imc = peso.value / (altura.value * altura.value);

        if (imc < 18.5) {
            resultado.innerHTML += `<p> Abaixo do Peso ${imc.toFixed(2)}</p>`
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `<p> Peso Normal ${imc.toFixed(2)}</p>`
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `<p class="sobrepeso"> Sobrepeso ${imc.toFixed(2)}</p>`
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `<p class="obesidade"> Obesidade Grau 1 ${imc.toFixed(2)}</p>`
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `<p class="obesidade">Obesidade Grau 2</p>`
        } else {
            resultado.innerHTML = `<p class="obesidade">Obesidade Grau 3</p>`
        }
    }

    form.addEventListener('submit', recebeEventoForm)

}

calcIMC();