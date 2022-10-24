import './App.css';
import Map from './Map';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>
        Women's Health
      </h1>
      <BrowserRouter>
        <Map/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
