const url = 'https://jsonplaceholder.typicode.com/posts'

const loadingElement = document.querySelector('#loading')
const postsContainer = document.querySelector('#post_container')

const postPage = document.querySelector('#post')
const postContainer = document.querySelector('#post-container')
const commentsContainer = document.querySelector('#comments-container')

const commentForm = document.querySelector('#comment-form')
const emailInput = document.querySelector('#email')
const bodyInput = document.querySelector('#body')

// Get id from url
const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get('id')

// Get all posts
async function getAllPosts(){
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    loadingElement.classList.add('hide')

    data.map( (post) => {
        const div = document.createElement('div');
        const title = document.createElement('h2')
        const body = document.createElement('p')
        const link = document.createElement('a')

        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = 'Ler'
        link.setAttribute("href", `/post.html?id=${post.id}`);
        
        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)

        postsContainer.appendChild(div);
    })
}

// Get individual post
async function getPost(id){
    // Desestruturação
    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])

    const dataPost = await responsePost.json()
    const dataComments = await responseComments.json()

    loadingElement.classList.add('hide')
    postPage.classList.remove('hide')

    const title = document.createElement('h1')
    const body = document.createElement('p')

    title.innerText = dataPost.title;
    body.innerText = dataPost.body;

    postContainer.appendChild(title);
    postContainer.appendChild(body);

    console.log(dataComments)

    dataComments.forEach((comment) => {
        createComment(comment)
    })
}

function createComment(comment){
    const div = document.createElement('div');
    const email = document.createElement('h3');
    const commentsBody = document.createElement('p');

    email.innerText = comment.email;
    commentsBody.innerText = comment.body;

    div.appendChild(email);
    div.appendChild(commentsBody);
    
    commentsContainer.appendChild(div);
}

// Post a comment
async function postComment(comment){

    const response = await fetch(`${url}/${postId}/comments`, {
        method: 'POST',
        body: comment,
        headers: {
            "Content-type": "application/json",
        },
    })

    const data = await response.json()
    createComment(data)
}

if(!postId){
    getAllPosts()
} else {
    getPost(postId)

    // Add event to comment form
    commentForm.addEventListener('submit', (e) =>{
        e.preventDefault()

        let comment = {
            email: emailInput.value,
            body: bodyInput.value
        }

        comment = JSON.stringify(comment)
        console.log(comment)
        postComment(comment);
    })
}