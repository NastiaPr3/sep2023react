const baseURL = 'https://jsonplaceholder.typicode.com';

const albums = '/albums';
const todos = '/todos';
const comments = '/comments';
const posts = '/posts'

const urls = {
    albums: albums,
    todos: todos,
    comments: {
        base: comments,
        getPostById: (id) => `${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}