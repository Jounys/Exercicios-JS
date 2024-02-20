const meuForm = document.getElementById('meuForm');
let nome = document.getElementById('nome');
let senha = document.getElementById('senha');
const nomeUser = [];
const senhaUser = [];

//localStorage.clear();
meuForm.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if(!nomeUser.includes() ){
        localStorage.setItem("nome", nome.value)
        localStorage.setItem("senha", senha.value) 
        alert(`Cadastro bem sucedido!`)
    } else {
        alert('Escolha outro nome!')
    }
    console.log(nomeUser)
    nome.value = '';
    senha.value = '';
});