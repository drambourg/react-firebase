import React, {Component} from 'react';
import {db} from "../config/firebase";
import {Button, Card, Row} from 'react-bootstrap'

class CharacterList extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
        db.collection("bbCharacters").orderBy('name').onSnapshot(querySnapshot => {
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
                            <Card.Img variant="top" src={character.img} />
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

export default CharacterList;