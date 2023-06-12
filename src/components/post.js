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
import { Spinners } from "./spinner";

export const Post = ({ data }) => {
    const { comments } = useSelector((state) => state.comments);
    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();
    const [loading, setloading] = useState(true);

    useEffect(() => {
        if (isClicked === true) {
            dispatch(getComments(data.id));
            setloading(true);
        }
    }, [isClicked, data.id, dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setloading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [data.id, isClicked]);

    return (
        <Container className="filter bg-white mb-2 p-2">
            <Stack direction="horizontal" className="avatar">
                <Link to={`/user/${data.userId}`}>
                    <Image src={avatar} roundedCircle alt="avatar" />
                </Link>
                <div className="ms-2 fw-bold">User #{data.userId}</div>
            </Stack>
            <h2 className="fw-bold text-lowercase fs-5">{data.title}</h2>
            <p className="text-lowercase">{data.body}</p>
            <div className="d-flex justify-content-end">
                <Button
                    onClick={() => {
                        setIsClicked(!isClicked);
                    }}
                    variant="outline-secondary"
                    size="sm"
                >
                    Comments
                </Button>
            </div>
            {isClicked &&
                (loading ? (
                    <Spinners />
                ) : (
                    comments &&
                    comments[data.id] && (
                        <div>
                            {comments[data.id].map((x) => (
                                <Comment data={x} key={x.id} />
                            ))}
                        </div>
                    )
                ))}
        </Container>
    );
};
