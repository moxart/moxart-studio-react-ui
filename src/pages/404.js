import React from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";

import "../styles/404.css";

class NotFound extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid className="notfound">
                    <Row>
                        <Col md="12" className="p-0">
                            <div className="min-vh-100 text-center m-0 d-flex flex-column justify-content-center">
                                <div className="text-center justify-content-center mb-5">
                                    <h3>404 ERROR!<br/>The page you were looking for<br/> couldn't be found.</h3>
                                    <Button href="/" className="return" variant="light" size="lg">Return</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default NotFound;