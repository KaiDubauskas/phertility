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
        <Switch>
          <Route path="/">
          <Map/>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
