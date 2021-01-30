import React from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";

import "../styles/works.css";

class Works extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid className="works">
                    <Row>
                        <Col md="12" className="p-0">
                            <div className="text-center m-0 justify-content-center">
                                <div className="container my-works">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className={`display-4`}>No. 1</p>
                                            <h3 className="card-title">Iranian Rial Exchange Rates</h3>
                                            <h6 className="card-subtitle mb-2 text-muted">Access IRR exchange rates for 100+ currencies</h6>
                                            <br/>
                                            <a href="https://www.raters.ir" target={`_blank`} className="card-link">View Work</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Works;