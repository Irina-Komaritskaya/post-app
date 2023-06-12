//- дерганья при пагинации
//- ключи!!

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Post } from "./post";
import Container from "react-bootstrap/Container";
import { Paging } from "./pagination";
import { Spinners } from "./spinner";
import { v4 as generateKey } from "uuid";

export const Posts = ({ posts }) => {
    const [loading, setloading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setloading(false);
    //     }, 500);
    //     return () => clearTimeout(timer);
    // }, [loading]);
    console.log(generateKey());
    return (
        <Container>
            <Paging
                items={posts.map((x) => (
                    <Post data={x} key={x.id} />
                ))}
            ></Paging>
        </Container>
    );
};
