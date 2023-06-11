//- дерганья при пагинации
//- ключи!!
import { useDispatch } from "react-redux";
import { getPosts } from "../store/actions";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Post } from "./post";
import Container from "react-bootstrap/Container";
import { Paging } from "./pagination";
import Spinner from "react-bootstrap/Spinner";

export const Posts = () => {
    const { posts } = useSelector((state) => state.posts);
    const loadingPost = posts.loadingPost;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <Container>
            {loadingPost && <Spinner animation="grow" variant="secondary" />}

            <Paging
                items={posts.map((x) => (
                    <Post data={x} />
                ))}
            ></Paging>
        </Container>
    );
};
