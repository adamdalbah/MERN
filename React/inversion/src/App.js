import logo from './logo.svg';
import './App.css';
import Inversion from './components/Inversion';
function App() {
  return (
    <div className="App">
      <Inversion fName="Doe" lName="Jane" age ={45} hColor="Black"/>
      <Inversion fName="Smith" lName="John" age ={88} hColor="Brown"/>
      <Inversion fName="Fillmore" lName="Millard" age ={50} hColor="Brown"/>
      <Inversion fName="Smith" lName="Maria" age ={62} hColor="Brown"/>
    </div>
  );
}

export default App;
