import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'

export default function UserBio() {

    return (
        <Container className="bg-dark">
            <Row>
                <Col>
                <h1>User Image</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                <h1>User Info</h1>
                </Col>
            </Row>
        </Container>
    )

}