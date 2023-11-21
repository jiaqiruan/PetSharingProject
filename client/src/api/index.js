import axios from 'axios';

const url = "http://localhost:21979/posts";

export const fetchPosts = ()=>axios.get(url);

export const createPost = (newPost) => {
    //console.log(newPost);
    return axios.post(url, newPost);
};

export const updatePost = (id,updatedPost)=>axios.patch(`${url}/${id}`,updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const feedPost = (id)=>axios.patch(`${url}/${id}/feedPost`)