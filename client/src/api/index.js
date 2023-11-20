import axios from 'axios';

const url = "http://localhost:21979/posts";

export const fetchPosts = ()=>axios.get(url);

export const createPost = (newPost) => {
    //console.log(newPost);
    return axios.post(url, newPost);
};