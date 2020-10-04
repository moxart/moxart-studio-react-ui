import React from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";

import "../styles/contact.css";

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid className="contact">
                    <Row>
                        <Col md="12" className="p-0">
                            <div className="min-vh-100 text-center m-0 d-flex flex-column justify-content-center">
                                <div className="text-center justify-content-center mb-5">
                                    <span>Contact</span>
                                    <h3><a href="mailto:hello@moxart.ir">hello@moxart.ir</a></h3>
                                    <h3><a href="tell:+989122575851">+98 912 25 75 85 1</a></h3>
                                    <ul className="list-inline justify-content-center">
                                        <li className="list-inline-item display-5">
                                            <a href="https://www.instagram.com/its.moxart/">
                                                Instagram
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://twitter.com/mox_art">Twitter</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://github.com/moxart">Github</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Contact;