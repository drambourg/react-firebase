import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import CharacterList from "./CharacterList";
import Register from './Register'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Home";
import Login from "./Login";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FireBase SDK Introduction</h1>
      </header>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/characters" component={CharacterList}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
