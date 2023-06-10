import Pagination from "react-bootstrap/Pagination";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
export const Paging = ({ items }) => {
    const [active, setActive] = useState(1);
    const [itemsPage, setItemsPage] = useState([]);

    useEffect(() => {
        const slicedItems = items.slice(
            (active - 1) * 10,
            (active - 1) * 10 + 10
        );

        setItemsPage(slicedItems);
    }, [active, items]);

    let pages = [];
    for (let number = 1; number <= items.length / 10; number++) {
        pages.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => {
                    setActive(number);
                }}
            >
                {number}
            </Pagination.Item>
        );
    }
    return (
        <>
            {itemsPage}
            <Pagination>{pages}</Pagination>
        </>
    );
};
