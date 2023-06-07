import axios from "axios";

export async function getPost() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
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
