import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Button, Container} from 'react-bootstrap'

import CharacterList from "./Component/CharacterList";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FireBase SDK Introduction</h1>
      </header>
        <Container>
            <CharacterList/>
        </Container>
    </div>
  );
}

export default App;
