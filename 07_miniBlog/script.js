let dadosPost = [];

let res = document.getElementById('res')
// Sitema de Add e Enviar os dados para o array
document.querySelector('#botaoDeEnviar').addEventListener('click', () => {
    let titulo = document.getElementById('txt').value
    let post = document.getElementById('post').value
    console.log(dadosPost)
    // Add novo objeto no array
    if(titulo && post){
        let novoObjeto = {title: titulo, postagem: post}
        dadosPost.push(novoObjeto)
        console.log(dadosPost)
    } else  {
        alert('Preencha os campos abaixo!')
    }
    // Limpar os campos
    document.getElementById('txt').value = ''
    document.getElementById('post').value = ''
    mostrarDados()
});

function mostrarDados() {
    res.innerHTML += dadosPost[0].title;
    res.innerHTML += dadosPost[0].postagem;
}