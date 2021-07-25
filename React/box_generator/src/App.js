import './App.css';
import Box from './components/Box';
import BoxDisplay from './components/BoxDisplay';
import react, {useState} from 'react';
function App() {
  const [array, setArray] = useState([]);

  const addArray = (color) => {
    setArray([...array, color]);
}

  return (
    <div className="App">
      <Box addArray={addArray}/>
      <BoxDisplay array={array}/>
    </div>
  );
}

export default App;
