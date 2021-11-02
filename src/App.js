import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import User from './components/user/User'
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/"><User /></Route>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
