import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_post";
export const FETCH_POST = "create_post";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "ThisIsAsUniqueICouldThinkOf!";

// These are action creators!?

export const fetchPosts = () => {
    const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export const createPost = (values, callback) => {
    const request = axios
        .post(`${ROOT_URL}/posts?key=${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}