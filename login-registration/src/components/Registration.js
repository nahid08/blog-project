import React, { useState } from "react";
import RegistrationService from "../services/RegistrationService";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";

export default function Registration() {

    const [username, setUserName] = useState("");
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const history = useHistory();

    const submit = () => {

        RegistrationService.post(
            { username, fullname, email, password }
        ).then((res) => {
            console.log(res);
            history.push("/login");
        }).catch((err) => {
            console.log('please enter correct username and password.')
        })

  
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center">Registration</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className="mt-2">
                        <Form.Control type="text" placeholder="User Name" value={username} onChange={(e) => { setUserName(e.target.value) }} />
                    </Col>
                    <Col lg={12} className="mt-2" >
                        <Form.Control type="text" placeholder="Full Name" value={fullname} onChange={(e) => { setFullName(e.target.value) }} />
                    </Col>
                    <Col lg={12} className="mt-2">
                        <Form.Control type="text" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </Col>
                    <Col lg={12} className="mt-2">
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </Col>
                    <Col lg={12} className="mt-2">
                        <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    </Col>
                    <Col lg={12} className="mt-2">
                        <Button variant="primary" onClick={submit} block>Submit</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}