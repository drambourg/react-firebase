import React from 'react';
import {Container} from "react-bootstrap";
import CharacterList from "./CharacterList";
import { withRouter } from "react-router-dom";
import firebase from "../config/firebase";

function Home (props) {

        return (
            <div>
                <Container>
                    <h2 className="p-3">All Characters in Database</h2>
                    {!firebase.getCurrentUsername()? <h5 className="p-1 text-info">Login to add some stuff</h5> : ''}
                    <hr/>
                    <CharacterList/>
                </Container>
            </div>
        );
}

export default withRouter(Home);