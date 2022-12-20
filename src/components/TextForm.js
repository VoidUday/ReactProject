import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter Text Here');

  const HandleUpClick = () =>{
    let rs = text.toUpperCase();
    setText(rs);
  } 
  const lowerCase = () =>{
    let rs = text.toLowerCase();
    setText(rs);
  } 
  const clearText = () =>{
    let newText = '';
    setText(newText);

  }

  const handleCopy = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+ /);
    setText(newText.join(" "))
  }

  const changeHandler = (event) =>{
   setText(event.target.value);
  }
  return (
<>   
<div>
  <div className='container my-3'>
    <h2>{props.heading}</h2>
    <textarea className="form-control my-3" id="myBox" value={text} onChange={changeHandler} rows="5" ></textarea>
    <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={lowerCase} >Lower Case</button>
    <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>  
</div>

<div className="container my-3">
   <h2>Your Text Summary</h2>
   <p>{text.split(" ").length} Words and {text.length} Characters</p>
   <p>It will take {0.008 * text.split(" ").length} Minutes to read</p>
   <h2>Preview Window</h2>
   <p>{text}</p>
</div>

</> 
  )
}
