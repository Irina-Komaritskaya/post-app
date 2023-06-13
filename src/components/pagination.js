import Pagination from "react-bootstrap/Pagination";
import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";

export const Paging = ({ items, perPage = 10 }) => {
    const scrollRef = useRef(null);
    const [active, setActive] = useState(1);
    const [itemsPage, setItemsPage] = useState([]);

    useEffect(() => {
        const slicedItems = items.slice(
            (active - 1) * perPage,
            (active - 1) * perPage + perPage
        );
        setItemsPage(slicedItems);
    }, [active, items]);

    useEffect(() => {
        setActive(1);
    }, [items]);

    let pages = [];
    for (let number = 1; number <= items.length / perPage; number++) {
        pages.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => {
                    setActive(number);
                    scrollRef.current.scrollIntoView();
                }}
            >
                {number}
            </Pagination.Item>
        );
    }
    return (
        <div ref={scrollRef}>
            {itemsPage}
            <Container xs="auto" md={5}>
                <Pagination className="flex-wrap">{pages}</Pagination>
            </Container>
        </div>
    );
};
