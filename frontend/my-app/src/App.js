import { Routes, Route, Link, useRoutes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header.js";
import Homepage from "./components/homepage.js";
import Map from "./components/map.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
