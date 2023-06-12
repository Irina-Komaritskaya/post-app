import axios from "axios";

export async function getPosts() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
}
export async function getComments(id) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response.data;
}

export async function getUser(id) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
}

export async function getUserPosts(id) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}/posts`
    );
    return response.data;
}
