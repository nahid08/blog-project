import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { useDispatch, useSelector} from 'react-redux'
import UserService from '../services/RegistrationService';
import login from '../actions/login';
import Notification from "../helper/Notification";

export default function Login() {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(login({username, password}))
        .then((res) => {
            history.push(`/${username}`)
            Notification({
                message: 'Successful',
                appearance: 'success'
            })
        })
    }

    const goToRegister = () => {
        history.push("/registration");
    }

    return (
        <>
            <Container>

                <Row>
                    <Col lg={12}>
                        <h1 className="text-center">Login</h1>
                    </Col>
                    <Col lg={12} className="mt-2">
                        <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => { setUserName(e.target.value) }} />
                    </Col>
                    <Col lg={12} className="mt-2">
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </Col>
                    <Col lg={12} className="mt-2" >
                        <Button onClick={onSubmit} block>Login</Button>
                    </Col>
                    <Col lg={12}>
                        <a href="" onClick={goToRegister}>Create a account</a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}