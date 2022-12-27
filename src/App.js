import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const[mode, setMode] = useState(`light`);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'gray';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
  <>
  <Navbar title="ZARA" mode={mode} toggleMode={toggleMode}/>
  <TextForm heading="Enter Text To Analyze"/>
  </>
  );
}
export default App;
