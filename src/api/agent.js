import axios from "axios";

const api = axios.create({
    baseURL:
        process.env.REACT_APP_BASE_URL ||
        "https://jsonplaceholder.typicode.com",
});

async function get(url) {
    const response = await api.get(url);
    return response.data;
}

export async function getPosts() {
    return get("/posts");
}

export async function getComments(id) {
    return get(`/posts/${id}/comments`);
}

export async function getUser(id) {
    return get(`/users/${id}`);
}

export async function getUserPosts(id) {
    return get(`/users/${id}/posts`);
}
