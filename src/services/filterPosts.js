export const filterPosts = ({ value, property, posts }) => {
    return posts.filter(function (x) {
        return (x[property] + "").indexOf(value) != -1;
    });
};
