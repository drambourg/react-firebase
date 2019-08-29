import React, {Component} from 'react';
import {db} from "../firebase";
import {Button, Card, Row} from 'react-bootstrap'

class CharacterList extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
        const querySnapshot = await db.collection("bbCharacters").get();
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({data}, () => console.log(this.state))
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
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                   )}
                </Row>
            </div>
        );
    }
}

export default CharacterList;