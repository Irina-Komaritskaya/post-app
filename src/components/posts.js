//- дерганья при пагинации
//- ключи!!
import { useDispatch } from "react-redux";
import { getPosts } from "../store/actions";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Post } from "./post";
import Container from "react-bootstrap/Container";
import { Search } from "./search";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Paging } from "./pagination";
export const Posts = () => {
    const { posts } = useSelector((state) => state.posts);
    const { filteredPosts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    console.log(filteredPosts);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <>
            <Search data={posts} />
            <ButtonGroup className="me-2" aria-label="First group">
                <Button variant="secondary">1</Button>
                <Button variant="secondary">2</Button>
                <Button variant="secondary">3</Button>
                <Button variant="secondary">4</Button>
            </ButtonGroup>
            <Paging
                items={posts.map((x) => (
                    <Post data={x} />
                ))}
            ></Paging>
        </>
    );
};
