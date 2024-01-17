
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//  // Link
// } from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type : type
      });
      setTimeout(()=>{
        setAlert(null)
      },2000)
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls)=>{
    console.log(cls)
    removeBodyClasses()
    if(cls != null){
      document.body.classList.add('bg-'+cls)
      if(cls === 'primary'){
        let buttons = document.querySelectorAll('button');
        // Loop through each button and add the class
        buttons.forEach(function(button) {
            button.classList.remove('bg-primary');
            button.classList.add('bg-success');

        }); 
      }
      else{
        let buttons = document.querySelectorAll('button');
        // Loop through each button and add the class
        buttons.forEach(function(button) {
            button.classList.remove('bg-success');
            button.classList.add('bg-primary');

        }); 
      }

    }
    else{
      let buttons = document.querySelectorAll('button');
      // Loop through each button and add the class
      buttons.forEach(function(button) {
          button.classList.remove('bg-success');
          button.classList.add('bg-primary');

      }); 
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor="#404040"
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
     
    }
  }
  }
  return ( 
    <> 
     <BrowserRouter> 
  <Navbar title="My Blog" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
    </Routes>
    {/* <Switch>
              <Route exact path="/about">
                <About />
              </Route>
            
              <Route exact path="/"> */}
              {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
       */}
              {/* </Route>
            </Switch> 
           */}
    </div>
    </BrowserRouter> 
  </> 
  );
}

export default App;
