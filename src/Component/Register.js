import React, {useState} from 'react';
import {Button, Form, Card} from "react-bootstrap";
import firebase from "../config/firebase";
import { withRouter } from "react-router-dom";

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        return (
            <div>
                <Card>
                    <Card.Header>
                        <h2>Register</h2>
                    </Card.Header>
                    <Form className="col-12 m-0 p-0 justify-content-center mx-auto" onSubmit={e=> e.preventDefault() && false}>
                        <Card.Body className="col-6 mx-auto" >
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="John Doe" value={name} onChange={e=> setName(e.target.value)}/>
                            </Form.Group>
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
                                <Button variant="success" type="submit"  onClick={register}>
                                    Register
                                </Button>
                            </div>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>
        );

    async function register() {
        try {
            await firebase.register(name, email, password);
            props.history.replace('/charactersadmin')
        } catch (error) {
            alert(error.message);
        }
    }
}

export default withRouter(Register);