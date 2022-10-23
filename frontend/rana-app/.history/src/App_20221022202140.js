import './App.css';
import Map from './Map';
import { Routes, Route, Link, useRoutes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>
        Women's Health
      </h1>
      <Routes>
        <Route path="/" element={<Map/>}/>
      </Routes>
            
    </div>
  );
}

export default App;
