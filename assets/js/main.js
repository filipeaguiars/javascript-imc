function calcIMC() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');



    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        let imc = peso / (altura * altura);


        console.log(imc);


        resultado.innerHTML += `<p> O IMC é ${imc}</p>`
        console.log(IMC);

    }

    form.addEventListener('submit', recebeEventoForm)

}

calcIMC();