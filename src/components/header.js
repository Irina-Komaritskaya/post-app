import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { User } from "./user";
import React, { useRef } from "react";
import avatar from "../img/photo.jpeg";
import { myprofile } from "../helpers/my-profile";

export const Header = () => {
    const buttonRef = useRef(null);
    console.log(myprofile);
    const closeHandler = () => {
        const closeButton = buttonRef.current.children[1];
        closeButton.click();
    };

    return (
        <Navbar bg="light" expand="false" className="mb-3">
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-false"
                    aria-labelledby="offcanvasNavbarLabel-expand-false"
                    placement="start"
                >
                    <Offcanvas.Header
                        closeButton
                        aria-label="Hide"
                        ref={buttonRef}
                    >
                        <Offcanvas.Title>Lorem ipsum</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="mb-2">
                            <Link to={`/`} onClick={closeHandler}>
                                Home
                            </Link>
                            <Link to={`/About`} onClick={closeHandler}>
                                About
                            </Link>
                        </Nav>
                        <User user={myprofile} src={avatar} />
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};
