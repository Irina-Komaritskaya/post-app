export const filterPosts = ({ value, property, posts }) => {
    return posts.filter(function (x) {
        return (x[property] + "").indexOf(value) != -1;
    });
};

export const sortPosts = (posts) => {
    console.log(posts);
    posts.sort(function (a, b) {
        var titleA = a.title.toLowerCase(),
            titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
    });
};
