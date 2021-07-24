import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import TabsShow from './components/TabsShow';
import TabsDisplay from './components/TabsDisplay';
function App() {
  const [data, setData] = useState("");

  const newContent = (content) => {
    setData(content);
  }
  return (
    <div className="App">
      <header className="App-header">
          <TabsShow data={newContent}/>
          <TabsDisplay content = {data}/>
      </header>
    </div>
  );
}

export default App;
