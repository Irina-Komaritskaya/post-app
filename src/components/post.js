//- коментарий загружается каждый раз при нажатии
import { getComments } from "../store/actions";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Comment } from "./comment";
import avatar from "../img/avatar.jpg";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import { v4 as generateKey } from "uuid";

export const Post = ({ data }) => {
    const { comments } = useSelector((state) => state.comments);
    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();
    console.log(isClicked);

    useEffect(() => {
        if (isClicked === true) {
            console.log(comments);
            dispatch(getComments(data.id));
        }
    }, [isClicked]);

    return (
        <Container className="filter bg-white mb-2 p-2">
            <Stack direction="horizontal" className="avatar">
                <Link to={`/user/${data.userId}`}>
                    <Image src={avatar} roundedCircle alt="avatar" />
                </Link>
                <div className="ms-2 fw-bold">User</div>
            </Stack>
            <h2 className="fw-bold text-lowercase fs-5">{data.title}</h2>
            <p className="text-lowercase">{data.body}</p>
            <div className="d-flex justify-content-end">
                <Button
                    onClick={() => {
                        console.log(1);
                        setIsClicked(isClicked === true ? false : true);
                    }}
                    variant="outline-secondary"
                    size="sm"
                >
                    Comments
                </Button>
            </div>

            {isClicked && comments && (
                <div>
                    {comments.map((x) => (
                        <Comment data={x} key={generateKey()} />
                    ))}
                </div>
            )}
        </Container>
    );
};
