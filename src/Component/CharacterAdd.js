import React, {Component} from 'react';
import {Button, Form, Alert} from 'react-bootstrap'
import db from "../config/firebase";
import firebase from "../config/firebase";

class CharacterAdd extends Component {

    state = {
        addConfirm : false,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    addConfirmAlert = () => {
        if (this.state.addConfirm) {
            return (
                <Alert variant="success" onClose={() => this.setState({addConfirm:false})} dismissible>
                    <Alert.Heading>You are good!</Alert.Heading>
                    <p>
                        One character add to the Firestore Database
                    </p>
                </Alert>
            );
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(this.state))
        // Add a new document with a generated id.
        let addDoc = firebase.db.collection('bbCharacters').add({
            ...this.state,
            img: 'https://picsum.photos/200/300',
            status : 'Alive',
            userUID : firebase.getCurrentUserUID(),
        }).then(ref => {
            this.setState({addConfirm:true});
            console.log('Added character with ID: ', ref.id);
        });
    }

    render() {
        return (
            <div>
                {this.addConfirmAlert()}
                <Form className="col-6 justify-content-center mx-auto" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="John Doe" onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group controlId="nickname">
                        <Form.Label>NickName</Form.Label>
                        <Form.Control type="text" placeholder="Johnny" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Character
                    </Button>
                </Form>
            </div>
        );
    }
}

export default CharacterAdd;