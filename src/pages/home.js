import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import { Search } from "../components/search";
import { ToggleSort } from "../components/toggle-sort";
import { Posts } from "../components/posts";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getPosts } from "../store/actions";
import { useDispatch } from "react-redux";

export const Home = () => {
    const dispatch = useDispatch();
    const { filteredPosts } = useSelector((state) => state.posts);
    const { sortedPosts } = useSelector((state) => state.posts);
    const { posts } = useSelector((state) => state.posts);
    const [postsForDisplay, setPostForDisplay] = useState([]);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    useEffect(() => {
        if (sortedPosts && sortedPosts.length) {
            setPostForDisplay(sortedPosts);
        } else if (filteredPosts && filteredPosts.length) {
            setPostForDisplay(filteredPosts);
        } else {
            setPostForDisplay(posts);
        }
    }, [filteredPosts, posts, sortedPosts]);

    return (
        <Container>
            <Row className="mb-3 justify-content-between align-items-end">
                <Col xs="auto" md={5}>
                    <Search data={posts} />
                </Col>
                <Col xs="auto" md={3} lg={2}>
                    <ToggleSort posts={postsForDisplay} />
                </Col>
            </Row>
            <Posts posts={postsForDisplay} />
        </Container>
    );
};
