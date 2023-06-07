import React, { useEffect } from "react";
import styles from "./post.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import avatar from "../img/avatar.jpg";
import Container from "react-bootstrap/Container";
export const Post = ({ data }) => {
    return (
        <Container className={styles.post}>
            <Row className={styles.caption}>
                <Col className={styles.avatar} md={{ span: 1 }}>
                    <img src={avatar} alt="avatar" />
                </Col>
                <Col className={styles.title}>{data.title}</Col>
            </Row>
            <div className={styles.text}>{data.body}</div>
            <div className={styles.comments}></div>
        </Container>
    );
};
