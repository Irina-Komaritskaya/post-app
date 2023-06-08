import styles from "./post.module.css";
import { Comment } from "./comment";
import avatar from "../img/avatar.jpg";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { getComments } from "../store/actions";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Post = ({ data }) => {
    const { comments } = useSelector((state) => state.comments);
    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isClicked === true) {
            dispatch(getComments(data.id));
        }
    }, [isClicked]);

    return (
        <Container className={styles.post}>
            <div className={styles.avatar}>
                <img src={avatar} alt="avatar" />
                <div className={styles.user}>User</div>
            </div>

            <div className={styles.title}>{data.title}</div>
            <div className={styles.text}>{data.body}</div>
            <div className={styles.button}>
                <Button
                    onClick={() => {
                        setIsClicked(isClicked === true ? false : true);
                    }}
                    variant="outline-secondary"
                    size="sm"
                >
                    Comments
                </Button>
            </div>

            {isClicked && !comments.loadingComments && (
                <div>
                    {comments.map((x) => (
                        <Comment data={x} />
                    ))}
                </div>
            )}
        </Container>
    );
};
