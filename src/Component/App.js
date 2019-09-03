import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/App.css'
import CharacterList from "./CharacterList";
import {Switch, Route, withRouter } from 'react-router-dom'
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import firebase from "../config/firebase";
import Navigation from "./Navigation";
import CharacterAdmin from "./CharacterAdmin";
import {NavItem} from "react-bootstrap";

function App() {

    const [firebaseInitialized, setFirebaseInitialized] = useState(false);

    useEffect(() => {
            firebase.isInitialized()
                .then(val => setFirebaseInitialized(val))
        }
    )

    return firebaseInitialized !== false ? (
            <div className="App">
                <Navigation/>
                <header className="App-header">
                    <h1>FireBase SDK Introduction</h1>
                    <h3>Hello {firebase.getCurrentUsername() || 'Guest'} !!</h3>
                </header>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/characters" component={CharacterList}/>
                    <Route exact path="/charactersadmin" component={CharacterAdmin}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                </Switch>

            </div>
    ) : <div>Wait please ...</div>

}

export default withRouter(App);
