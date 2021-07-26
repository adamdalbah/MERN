
import './App.css';
import Serach from './components/Serach'
import {useState} from 'react';
import Display from './components/Display';
import { Router } from '@reach/router';
import { navigate } from '@reach/router'


function App() {
  const[title, setTitle] = useState("");
  const[id, setId] = useState(null);

  const addTitleId = (title, id) =>{
    setTitle(title);
    setId(id);
    navigate(`/${title}/${id}`);
  }
  
  return (
    <div className="App">
    
      <Serach addTitleId={addTitleId}/> 
      <Router>     
        <Display path="/:title/:id"/>
      </Router>

    </div>
  );
}

export default App;
