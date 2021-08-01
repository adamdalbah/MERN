import './App.css';
import {Router} from '@reach/router';
import Details from './components/Details';
import Main from './views/Main';

function App() {

  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Details path="products/:id"/>
      </Router>
    </div>
  );
}

export default App;
