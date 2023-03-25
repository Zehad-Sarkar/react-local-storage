
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import JsonGenerator from './components/JsonGenerator/JsonGenerator';
import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <JsonGenerator></JsonGenerator>
    </div>
  );
}

export default App;
