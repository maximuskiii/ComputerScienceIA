import axios from 'axios';

// url pointing to our backend route
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost); 

// all actions will be done using redux
// implementing redux is beneficial as it allows me to look over things and scale the app in the future 