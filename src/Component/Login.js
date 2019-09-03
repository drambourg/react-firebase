import React, {useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import firebase from "../config/firebase";
import { withRouter } from "react-router-dom";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        return (
            <div>
                <Card>
                    <Card.Header>
                        <h2>Login</h2>
                    </Card.Header>
                    <Form className="col-12 m-0 p-0 justify-content-center mx-auto" onSubmit={e=> e.preventDefault() && false}>
                        <Card.Body className="col-6 mx-auto" >
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="john.doe@aol.com" value={email} onChange={e=> setEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Your password" value={password} onChange={e=> setPassword(e.target.value)}/>
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer>
                            <div>
                                <Button className="m-1 w-50" variant="primary" type="submit" onClick={login}>
                                    Sign In
                                </Button>
                            </div>
                            <div>
                                <Button size="sm" variant="success" type="submit" onClick={() => props.history.replace('/register')}>
                                    Register
                                </Button>
                            </div>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>
        );


    async function login() {
        try {
            await firebase.login(email, password);
            props.history.replace('/')
        } catch (error) {
            alert(error.message);
        }
    }
}

export default withRouter(Login);