import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import User from './components/user/Signup/User'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./redux/store";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{

            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },

          }}
        />
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
