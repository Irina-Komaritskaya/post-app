export const filterPosts = ({ value, property, posts }) => {
    return posts.filter(function (x) {
        return (x[property] + "").indexOf(value) != -1;
    });
};

export const sortPosts = (posts) => {
    console.log(posts);
    posts.sort(function (a, b) {
        var nameA = a.title.toLowerCase(),
            nameB = b.title.toLowerCase();
        if (nameA < nameB)
            //сортируем строки по возрастанию
            return -1;
        if (nameA > nameB) return 1;
        return 0; // Никакой сортировки
    });
};
