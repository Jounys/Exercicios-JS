import { getPosts } from "./api";

const main = async () => {
    try {
        const posts = await getPosts()
        console.log('Meus posts: ', posts)
    } catch (error){
        console.log('Erro', error)
    }
}

main()




// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => {
//     if(!response.ok){
//         throw new Error('A requisição falhou.');
//     }
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log('Erro', error);
// });

// Metodo POST
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify({title: 'Foo', body: 'bar', userId: 1})
// }).then(response => {
//     if(!response.ok){
//         throw new Error('A requisição falou.')
//     }
//     return response.json();
// }).then(data => {
//     console.log(data)
// }).catch(error => {
//     console.log('Erro', error)
// });