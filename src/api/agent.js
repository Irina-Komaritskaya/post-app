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
    console.log(response.data);
    return response.data;
}
