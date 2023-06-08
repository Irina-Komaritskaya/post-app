// - title, post, avatar, koment
import { useDispatch } from "react-redux";
import { getPosts } from "../store/actions";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Post } from "./post";
import Pagination from "react-bootstrap/Pagination";
import Container from "react-bootstrap/Container";

export const Posts = () => {
    const { posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const [active, setActive] = useState(1);
    const [postsForPage, setPostForPage] = useState([]);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    useEffect(() => {
        const slicedPosts = posts.slice(
            (active - 1) * 10,
            (active - 1) * 10 + 10
        );
        setPostForPage(slicedPosts);
    }, [active, posts]);

    let pages = [];
    for (let number = 1; number <= posts.length / 10; number++) {
        pages.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => {
                    setActive(number);
                }}
            >
                {number}
            </Pagination.Item>
        );
    }
    return (
        <Container>
            {postsForPage.map((x) => (
                <Post data={x} />
            ))}
            <Pagination>{pages}</Pagination>
        </Container>
    );
};
