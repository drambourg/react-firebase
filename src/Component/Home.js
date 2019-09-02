import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import CharacterAdd from "./CharacterAdd";
import CharacterList from "./CharacterList";

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <CharacterAdd/>
                    <hr/>
                    <CharacterList/>

                </Container>
            </div>
        );
    }
}

export default Home;