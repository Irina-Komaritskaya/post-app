import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { putFilteredPosts, DelFilteredPosts } from "../store/actions";
import CloseButton from "react-bootstrap/CloseButton";

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
                putFilteredPosts({ value: str, property: "title", posts: data })
            );
            setIsClicked(false);
        }
    }, [isClicked]);

    const cleanHendler = () => {
        setIsClean(true);
        setIsHiddenCleanButton(false);
    };
    useEffect(() => {
        if (isClean) {
            dispatch(DelFilteredPosts());
            setIsClean(false);
        }
    }, [isClean]);

    return (
        <Form className="d-flex align-items-center">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                defaultValue=""
                onChange={onChange}
            />
            <Button variant="outline-success" onClick={searchHandler}>
                Search
            </Button>
            {!isHiddenCleanButton && (
                <CloseButton
                    onClick={cleanHendler}
                    aria-label="clean"
                    className="ms-2"
                />
            )}
        </Form>
    );
};
