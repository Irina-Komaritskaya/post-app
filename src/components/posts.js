// - title, post, avatar, koment
import { useDispatch } from "react-redux";
import { getPosts } from "../store/actions";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Post } from "./post";
import Pagination from "react-bootstrap/Pagination";
import Container from "react-bootstrap/Container";

export const Posts = () => {
    const { posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <Container>
            {posts.map((x) => (
                <Post data={x} />
            ))}
        </Container>
    );
};
