import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import DisNumber from './components/DisNumber';
import DisColor from './components/DisColor'
function App() {
  return (
    <div className="App">
        <Router>
            <Home path="/home"/>
            <DisNumber path="/:id"/>
            <DisColor path="/:word/:color1/:color2"/>
        </Router>
    </div>
  );
}
export default App;