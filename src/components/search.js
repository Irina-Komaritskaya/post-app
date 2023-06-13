import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { getFilteredPosts, delFilteredPosts } from "../store/actions";
import CloseButton from "react-bootstrap/CloseButton";
import { Container } from "react-bootstrap";

export const Search = ({ data }) => {
    const dispatch = useDispatch();
    const [str, setStr] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const [isHiddenCleanButton, setIsHiddenCleanButton] = useState(true);
    const [isClean, setIsClean] = useState(false);

    const onChange = (e) => {
        setStr(e.target.value);
    };
    const searchHandler = () => {
        setIsClicked(true);
        setIsHiddenCleanButton(false);
    };
    useEffect(() => {
        if (isClicked) {
            dispatch(
                getFilteredPosts({ value: str, property: "title", posts: data })
            );
            setIsClicked(false);
        }
    }, [isClicked, data, dispatch, str]);

    const cleanHandler = () => {
        setIsClean(true);
        setStr("");
        setIsHiddenCleanButton(true);
    };
    useEffect(() => {
        if (isClean) {
            dispatch(delFilteredPosts());
            setIsClean(false);
        }
    }, [isClean, dispatch]);

    return (
        <Container className="d-flex align-items-center">
            <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={onChange}
                value={str}
            />
            <Button
                variant="outline-success"
                type="button"
                onClick={searchHandler}
            >
                Search
            </Button>
            {!isHiddenCleanButton && (
                <CloseButton
                    onClick={cleanHandler}
                    aria-label="clean"
                    className="ms-2"
                    type="reset"
                />
            )}
        </Container>
    );
};
