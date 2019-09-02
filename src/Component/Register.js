import React, {Component} from 'react';
import {Button, Form, Card} from "react-bootstrap";

class Register extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>
                        <h2>Register account</h2>
                    </Card.Header>
                    <Form className="col-6 justify-content-center mx-auto" onSubmit={this.handleSubmit}>
                        <Card.Body>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="John Doe" onChange={this.handleChange} required/>
                            </Form.Group>
                            <Form.Group controlId="nickname">
                                <Form.Label>NickName</Form.Label>
                                <Form.Control type="text" placeholder="Johnny" onChange={this.handleChange}/>
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" type="submit">
                                Add Character
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>

            </div>
        );
    }
}

export default Register;