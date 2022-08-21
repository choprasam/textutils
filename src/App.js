import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode= ()=> {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = `TextUtils - Dark Mode`;
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = `TextUtils - Light Mode`;
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null)
    }, 1000);
  };
  
  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}></Alert>
<div className="container my-3">
        {/* <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}> */}
          <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
          {/* </Route>
        </Routes> */}
</div>
{/* </Router> */}
    </>
  );
}

export default App;
