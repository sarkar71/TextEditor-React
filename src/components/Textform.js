import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  }

  const handleLoClick = () => {
    console.log("Uppercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  }

  const handleOnChange = (event) => {
    console.log("On click");
    setText(event.target.value);
  }

  const handleExtraSpaces = () => {
    const newText = text.replace(/\s+/g, ' ').trim();
    setText(newText)
    props.showAlert("Removed Extra Spaces", "success")
  }

  const handleClearText = () => {
    const newText = '';
    setText(newText)
    props.showAlert("Text Cleared", "success")
  }
  const handleCopyText = () => {
     console.log("Copying")
     var txt = document.getElementById("myBox")
     txt.select();
     navigator.clipboard.writeText(txt.value)
     props.showAlert("Text Copied", "success")
  }
  const [text, setText] = useState('Enter Text');
  return (
    <>
      <div className='container' style = {{color: props.mode === 'dark'?'white':'black'}}>
        <div className="mb-4 mt-3">
          <label htmlFor="text" className="form-label">{props.heading}</label>
          <textarea className="form-control" value={text} style = {{backgroundColor: props.mode === 'light'?'white':'grey'}} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className='btn btn-outline-secondary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-outline-secondary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-outline-secondary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-outline-secondary mx-1' onClick={handleCopyText}>Copy Text</button>
        <button className='btn btn-outline-secondary mx-1' onClick={handleClearText}>Clear Text</button>
        
      </div>
      <div className='container mt-5' style = {{color: props.mode === 'dark'?'white':'black'}}>
        <h5>Text Summary</h5>
        <p>Words : {text.split(" ").length} </p>
        <p>Characters : {text.length}</p>
        <p>Time taken to read document : {0.008 * text.split(" ").length} seconds</p>
      </div>
      <div align='center' style = {{color: props.mode === 'dark'?'white':'black'}}>
        <h3>Preview Text </h3>
        <p align='center' >{text.length - 1 > 0 ? text : 'Enter something to preview'}</p>
      </div>
      
    </>
  )
}
