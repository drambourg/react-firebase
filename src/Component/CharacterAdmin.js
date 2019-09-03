import React from 'react';
import {Container} from "react-bootstrap";
import CharacterList from "./CharacterList";
import { withRouter } from "react-router-dom";
import firebase from "../config/firebase";
import CharacterAdd from "./CharacterAdd";

function CharacterAdmin (props) {

    return (
        <div>
            <Container>
                <h2 className="p-3">View and add your characters</h2>
                <CharacterAdd />
                <hr/>
                <CharacterList selectorUser={firebase.getCurrentUsername()}/>
            </Container>
        </div>
    );
}

export default withRouter(CharacterAdmin);

