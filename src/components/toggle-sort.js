import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
export const ToggleSort = () => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState("1");

    const radios = [
        { name: "A-Z", value: "1" },
        { name: "Z-A", value: "2" },
        { name: "None", value: "3" },
    ];
    return (
        <ButtonGroup className="me-2" aria-label="Sort group">
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
