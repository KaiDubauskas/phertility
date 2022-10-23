import './App.css';
import Map from './Map';
import { Routes, Route, Link, useRoutes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/homepage.js";
import Header from "./components/header.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/map" element={<Map/>}/>
      </Routes>
            
    </div>
  );
}

export default App;
