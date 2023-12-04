import axios from 'axios';
const url = "http://linserv1.cims.nyu.edu:21979";
const API = axios.create({ baseURL: url });



API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);

export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const feedPost = (id) => API.patch(`/posts/${id}/feedPost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => {
    return API.post('/user/signup', formData)
};