import React from 'react';
import {Nav, Navbar} from "react-bootstrap";

import "../styles/navigation.css";

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="transparent" fixed="top" variant="light" expand="lg">
                <Navbar.Brand href="/">
                    <span>Moxart</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto main__navbar">
                        <Nav.Link href="/">Home.</Nav.Link>
                        <Nav.Link href="/about">Info.</Nav.Link>
                        <Nav.Link href="/works">Works.</Nav.Link>
                        {/*<Nav.Link href="/blog">Blog.</Nav.Link>*/}
                        <Nav.Link href="/contact">Say Hello.</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://www.instagram.com/its.moxart/" target="_blank">IN</Nav.Link>
                        <Nav.Link href="https://twitter.com/mox_art" target="_blank">TW</Nav.Link>
                        <Nav.Link href="https://github.com/moxart" target="_blank">GI</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;