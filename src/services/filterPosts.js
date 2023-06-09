export const filterPosts = ({ value, property, posts }) => {
    console.log(1);
    return posts.filter(function (x) {
        return (x[property] + "").indexOf(value) != -1;
    });
};
