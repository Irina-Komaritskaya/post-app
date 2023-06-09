//- дерганья при пагинации
//- ключи!!
import { useDispatch } from "react-redux";
import { getPosts } from "../store/actions";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Post } from "./post";
import Pagination from "react-bootstrap/Pagination";
import Container from "react-bootstrap/Container";
import { Search } from "./search";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
export const Posts = () => {
    const { posts } = useSelector((state) => state.posts);
    const { filteredPosts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const [active, setActive] = useState(1);
    const [postsForPage, setPostForPage] = useState([]);
    console.log(filteredPosts);
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
        <>
            <Search data={posts} />
            <ButtonGroup className="me-2" aria-label="First group">
                <Button variant="secondary">1</Button>
                <Button variant="secondary">2</Button>
                <Button variant="secondary">3</Button>
                <Button variant="secondary">4</Button>
            </ButtonGroup>
            <Container>
                {postsForPage.map((x) => (
                    <Post data={x} />
                ))}
                <Pagination>{pages}</Pagination>
            </Container>
        </>
    );
};
