import React from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";

import "../styles/about.css";

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className="about">
                    <Row className="min-vh-100 text-left m-0 d-flex flex-column justify-content-center">
                        <Col md={12}>
                            <Row>
                                <Col md={{ span: 4, order: 0 }} xs={{ span: 12, order: 1 }} className="image">
                                    <img
                                        src="/images/patrick-avakian.jpg"
                                        className={`img-fluid`}
                                        alt="patrick der avakian"
                                    />
                                </Col>
                                <Col md={{ span: 8, order: 1 }} xs={{ span: 12, order: 0 }} className="info">
                                    <h1>A bit about myself</h1>
                                    <p>Hi,</p>
                                    <p>
                                        I’m Patrick Der Avakian, a 29 years old <br />
                                        an Iran / Armenia-Based Front-End &amp; Back-End
                                        Developer.
                                        <br />
                                        javascript &amp; python enthusiast.
                                    </p>
                                    <p>
                                        i love experimenting with linux &amp; docker, i mainly
                                        work with python, nodejs And other things.{" "}
                                    </p>
                                    <strong>- be kind &amp; free -</strong>
                                    <br />
                                    <div className="d-flex mt-3">
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
                                            <li className="list-inline-item">
                                                <a href="mailto:hello@moxart.ir">Email</a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default About;