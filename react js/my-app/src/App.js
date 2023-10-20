import { useState } from 'react';
import './App.css';
import Navbar from './componet/Navbar';
import About from './componet/About';
import TextForm from './componet/TextForm';
import Alert from './componet/Alert';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


function App() {
  
  const [mode, setmode] = useState('light')

  
  const [alert, setalert] = useState(null)
  
  const showalert = (message , type)=>{
      setalert({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setalert(null)
      }, 1500);
    }
    
    const togglemode = ()=>{
      
      
      if(mode ==='light'){
        setmode('dark');
        document.body.style.backgroundColor='#000';
        showalert("darkmode eneble", 'success')
      }
      else{
        setmode('light')
        document.body.style.backgroundColor='white';
        showalert('darkmode diseble', 'success')
      }
    }
    // const [mode1, setmode1] = useState('light')
    
    // const toggle1=()=>{
    //   if(mode1 ==='light'){
    //     setmode1('dark');
    //     document.body.style.backgroundColor = '#092020'
    //     showalert("blue mode eneble", 'success')
    //   }
    //   else{
    //     setmode1('light');
    //     document.body.style.backgroundColor = 'white'
    //     showalert('blue mode diseble', 'success')
    //    }
    // }
  
    return (
      <>
      

        {/* <Navbar  title='Navbar' abo  ut='about-2' /> */}
      <Navbar mode={mode} togglemode={togglemode} />
      
      <Alert alert={alert} />
      
      {/* <Router> */}

      <BrowserRouter>
      <div className="container my-5">
        <Routes>
           <Route path="/About" element={<About />}/>
           <Route path="/" element={<TextForm showalert={showalert} heading='enter the text to analyz' mode={mode} />} />
        </Routes>
      </div>
      </BrowserRouter>
      {/* </Router> */}
 
    </>
  );
}

export default App;
