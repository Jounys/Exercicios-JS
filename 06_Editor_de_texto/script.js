const texto = document.getElementById('texto')
const main = document.getElementById('main')

function enviar(){
    let entrada = texto.value

    main.innerHTML = entrada
    texto.value = ''
}
