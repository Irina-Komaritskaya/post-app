import React, { useEffect } from "react";
import styles from "./post.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import avatar from "../img/avatar.jpg";
import Container from "react-bootstrap/Container";
export const Post = ({ data }) => {
    return (
        <Container className={styles.post}>
            <div className={styles.avatar}>
                <img src={avatar} alt="avatar" />
                <div className={styles.user}>User</div>
            </div>

            <div className={styles.title}>{data.title}</div>
            <div className={styles.text}>{data.body}</div>
            <div className={styles.comments}></div>
        </Container>
    );
};
