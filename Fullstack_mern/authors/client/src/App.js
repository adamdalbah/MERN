import './App.css';
import {Router} from '@reach/router';
import Update from './views/Update';
import Create from './views/Create';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
          <Main path="/"/>
          <Update path="edit/:id"/> 
          <Create path="/new"/>     
        </Router>
    </div>
  );
}

export default App;
