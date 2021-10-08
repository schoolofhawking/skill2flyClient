import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import User from './components/user/User'
   
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Route path="/">
            {" "}
            <User />{" "}
          </Route>
        </Router>
      </div>
    </>
  );
}

export default App;
