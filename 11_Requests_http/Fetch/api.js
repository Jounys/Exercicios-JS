const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getPosts = async () => {
    return `${API_BASE_URL}/posts`
}