import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useDispatch } from "react-redux";
import { getSortedPosts } from "../store/actions";

export const ToggleSort = ({ posts, current }) => {
    const [radioValue, setRadioValue] = useState(current);
    const dispatch = useDispatch();
    const radios = [
        { name: "A-Z", value: "ASC" },
        { name: "Z-A", value: "DESC" },
        { name: "None", value: "" },
    ];

    useEffect(() => {
        dispatch(getSortedPosts(radioValue));
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
