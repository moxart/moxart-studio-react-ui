import React from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";

import "../styles/blog.css";

class Blog extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid className="blog">
                    <Row>
                        <Col md="12" className="p-0">
                            <div className="min-vh-100 text-center m-0 d-flex flex-column justify-content-center">
                                <div className="text-center justify-content-center mb-5">
                                    <h3>this page is under construction</h3>
                                    <Button href="/" className="return mt-3" variant="light" size="lg">Return</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Blog;