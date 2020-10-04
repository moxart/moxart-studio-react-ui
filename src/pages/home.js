import React from 'react';
import {Container, Row, Col, Nav} from "react-bootstrap";

import "../styles/home.css";
import "../styles/footer.css";
import Footer from "../components/Footer";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid className="intro">
                    <Row>
                        <Col md="12" className="p-0">
                            <div className="min-vh-100 text-center m-0 d-flex flex-column justify-content-center">
                                <span>experience</span>
                                <h1>Moxart<br/>Studio</h1>
                                <span>FREELANCE</span>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container fluid className="features">
                    <Row>
                        <Col md="12" className="p-0">
                            <div className="min-vh-100 text-center m-0 d-flex flex-column justify-content-center">
                                <div className="text-center justify-content-center mb-5">
                                    <span>Contact</span>
                                    <h2 className="mb-3">You have a project<br/> web creation?</h2>
                                    <h3>Hang Out With Me.</h3>
                                    <Nav.Link
                                        href="/contact"
                                        className="btn start__project mt-4"
                                    >
                                        Start Project
                                    </Nav.Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;