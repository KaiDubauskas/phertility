import './App.css';
import Map from './Map';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>
        Women's Health
      </h1>
      <Router>
        <Switch>
          <Route path="/">
            <Map/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
