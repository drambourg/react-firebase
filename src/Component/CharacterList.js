import React, {Component} from 'react';
import firebase from "../config/firebase";
import {Button, Card, Row} from 'react-bootstrap'
import {withRouter} from "react-router-dom";

class CharacterList extends Component {
    state = {
        data: []
    }
    constructor(props) {
        super(props)
    }
    async componentDidMount() {
        let coll = firebase.db.collection("bbCharacters");
        if (this.props.selectorUser) coll= coll.where('userUID', '==', firebase.getCurrentUserUID());
        coll.orderBy('name').onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({data}, () => console.log(this.state))
        });
    }

    render() {
            return (
                <div>
                    <Row className="justify-content-center">
                        {this.state.data && this.state.data.map((character, index) =>
                            <Card className="col-3 m-2 p-0" key={index}>
                                <Card.Header>
                                    <Card.Title>{character.name}</Card.Title>
                                    <Card.Subtitle>{character.nickname}</Card.Subtitle>
                                </Card.Header>
                                <Card.Img variant="top" src={character.img}/>
                                <Card.Body>
                                    <Card.Text className="text-danger">
                                        {character.status}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="info" disabled>More info ...</Button>
                                </Card.Footer>
                            </Card>
                        )}
                    </Row>
                </div>
            );
        }
}

export default withRouter(CharacterList);