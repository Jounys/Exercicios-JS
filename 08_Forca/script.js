import { palavras } from "./palavras.js"
let palavraChave = palavras

const res = document.getElementById('res')
const numAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const pegarPalavra = () => palavraChave[numAleatorio(0, palavraChave.length - 1)]
let vida = 6
let letras = []
let objetoDeInformacoes = pegarPalavra()
let forca = objetoDeInformacoes.palavra
let dicaFacil = objetoDeInformacoes.dica_facil
console.log(objetoDeInformacoes)
console.log(forca)
console.log(dicaFacil)

//document.getElementById('dicaInicial').innerHTML = `Dica: Tem ${forca.length} letras.`
document.getElementById('botaoEnviar').addEventListener('click', jogar)

function jogar(){
    const txt = document.getElementById('txt').value.trim().toLowerCase();
    const mostrarVida = document.getElementById('vida');
    const letrasForca = document.getElementById('letras');

    if(txt === ''){
        alert('Digite uma letra.')
        return
    }

    // Add as letras do user no array e se não for true perde uma vida e verifica se a letra ja foi enviado perdendo uma vida tbm
    if(letras.includes(txt)){
        alert('letras já enviada.')
        vida--
    } else {
        letras.push(txt)
        if(!forca.includes(txt)){
            alert('Errado! Perdeu uma vida.')
            vida--
        }
        letrasForca.innerHTML += `${txt} `
    }

    if(vida <= 0){
        alert('Fim de jogo. Você perdeu!')
        reiniciarJogo();
        return
    }

    atualizarPalavra()
    mostrarVida.innerHTML = `Vidas: ${vida}`;

    if (forca.split('').every(letra => letras.includes(letra))) {
        alert('Parabéns! Você acertou a palavra!');
        console.log(forca.split(''))
        reiniciarJogo();
    }

    document.getElementById('txt').value = '';
    document.getElementById('txt').focus();
    
    console.log(letras)
    console.log(vida)
}

function atualizarPalavra(){
    let letrasAdivinhadas = '';

    for(let i = 0; i < forca.length; i++){
        if(letras.includes(forca[i])){
            letrasAdivinhadas += `${forca[i]} `
        } else {
            letrasAdivinhadas += '_ '
        }
    }
    res.innerHTML = letrasAdivinhadas
}

function reiniciarJogo(){
    objetoDeInformacoes = pegarPalavra()
    forca = objetoDeInformacoes.palavra
    dicaFacil = objetoDeInformacoes.dica_facil
    vida = 6;
    letras = [];
    document.getElementById('txt').value = '';
    document.getElementById('res').innerHTML = '';
    document.getElementById('letras').innerHTML = '';
    document.getElementById('vida').innerHTML = `Vidas: ${vida}`;
    
    atualizarPalavra()
    console.log(forca)
    console.log(objetoDeInformacoes)
    //document.getElementById('dicaInicial').innerHTML = `Dica: Tem ${forca.length} letras.`
}
atualizarPalavra()