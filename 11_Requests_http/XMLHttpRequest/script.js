// Metodo GET
let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status <= 300){
        console.log('tudo certo')
        console.log(JSON.parse(xhr.responseText));
    } else {
        console.log('A requisição falhou.');
    }
};

xhr.send()

// Metodo POST
// xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
// xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

// xhr.onload = function(){
//     if(xhr.status >= 200 && xhr.status <= 300){
//         console.log(JSON.parse(xhr.responseText));
//     } else {
//         console.log('A requisição falhou.')
//     }
// };

// let data = JSON.stringify({title: 'Foo', body: 'bar', userId: 1});
//xhr.send(data)