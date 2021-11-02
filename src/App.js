import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import User from './components/user/User'
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import {store,persistor} from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <PersistGate persistor={persistor}>
          <Route path="/"><User /></Route>
          </PersistGate>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
