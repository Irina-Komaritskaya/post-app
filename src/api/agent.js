import axios from "axios";

export async function getPosts() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
    return response.data;
    // axios
    //     .get("https://jsonplaceholder.typicode.com/posts/1")
    //     .then(function (response) {
    //         // const post = response.data;
    //         console.log(response);
    //         // return post;
    // });
}
