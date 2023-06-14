export const filterPosts = ({ value, property, posts }) => {
    return posts.filter(function (x) {
        return (x[property] + "").indexOf(value) !== -1;
    });
};

export const sortPosts = ({ posts, order }) => {
    return [...posts].sort(function (a, b) {
        const titleA = a.title.toLowerCase(),
            titleB = b.title.toLowerCase();
        if (order === "ASC") {
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
        } else if (order === "DESC") {
            if (titleA > titleB) return -1;
            if (titleA < titleB) return 1;
        }

        return 0;
    });
};
