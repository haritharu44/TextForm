// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from "./components/about";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   const [mode, setMode] = useState('light');

   const toggleMode=(light)=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor='#352f8b';
      showAlert("Dark Mode has been Enabled","Success");
      document.title='TextUtils-DarkMode';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","Success");
      document.title='TextUtils-LightMode';
    }
  }
  setTimeout(() => {
    document.tittle='TextUtils-Home';
  }, 1500);
   const [alert, setAlert] = useState(null);

   const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
   }
   setTimeout(() => {
    setAlert("");
   }, 2000);
   
  //  const [col, setCol] = useState('light');
  //  const toggle=(light)=>{
  //     if(col==='light'){
  //       setCol('dark');
  //       document.body.style.backgroundColor='#352f8b';

  //     }else{
  //       setCol('light');
  //       document.body.style.backgroundColor='white';
  //     }
  //  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar tittle="PropsTittle" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      {/* <Routes> */}
{/* <Route path='/about' element={}> */}
{/* <About dark={toggle} col={col}/> */}
 {/* </Route> */}
 {/* <Route path='/' element={  }> */}
 <TextForm heading="Enter the Text to Analyze Below" text="Enter text" showAlert={showAlert} mode={mode} />
 {/* </Route>
</Routes>
</BrowserRouter>  */}

</>
  );
}

export default App;
