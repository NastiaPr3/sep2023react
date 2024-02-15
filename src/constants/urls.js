const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';


const urls = {
    users: {
        base: users,
        byId: (id) => `${users}/${id}`
    },

    posts: {
        base: posts,
        byUserId: (userId) => `${users}/${userId}/${posts}`
    }
}


export {
    baseURL,
    urls
}