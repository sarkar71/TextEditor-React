import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light')
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className='container'>
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> 
          <Route exact path="/"> */}
              <Textform showAlert={showAlert} email="Email: " heading="Sample Text" mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
