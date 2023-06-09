import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { putFilteredPosts } from "../store/actions";

export const Search = ({ data }) => {
    const dispatch = useDispatch();
    const [str, setStr] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const onChange = (e) => {
        setStr(e.target.value);
    };

    useEffect(() => {
        if (isClicked) {
            dispatch(
                putFilteredPosts({ value: str, property: "title", posts: data })
            );
            setIsClicked(false);
        }
    }, [isClicked]);

    const onClick = () => {
        setIsClicked(true);
    };

    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                defaultValue=""
                onChange={onChange}
            />
            <Button variant="outline-success" onClick={onClick}>
                Search
            </Button>
        </Form>
    );
};
