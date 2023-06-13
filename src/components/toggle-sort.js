import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch } from "react-redux";
import { getSortedPosts, delSortedPosts } from "../store/actions";

export const ToggleSort = ({ posts }) => {
    const [radioValue, setRadioValue] = useState("");
    const dispatch = useDispatch();
    const radios = [
        { name: "A-Z", value: "1" },
        { name: "Z-A", value: "2" },
        { name: "None", value: "0" },
    ];

    useEffect(() => {
        if (radioValue === radios[0].value)
            dispatch(getSortedPosts({ posts: posts, order: "ASC" }));
        else if (radioValue === radios[1].value)
            dispatch(getSortedPosts({ posts: posts, order: "DESC" }));
        else if (radioValue === radios[2].value) dispatch(delSortedPosts());
    }, [radioValue, dispatch, posts]);

    return (
        <ButtonGroup type="radio" size="sm" aria-label="Sort group">
            {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant="outline-success"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
};
