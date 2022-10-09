import React, { useState } from 'react'
// import propTypes from 'prop-types'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log('UpperCase was clicked'+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","Success");
  }
  const handleLoClick=()=>{
    // console.log('UpperCase was clicked'+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","Success");
  }
  const handleClearClick=()=>{
    // console.log('UpperCase was clicked'+text);
    let newText=('');
    setText(newText);
    props.showAlert("Clear all Texts","Success");
  }
  
  const handleOnchange=(event)=>{
    console.log("onChange");
    setText(event.target.value);
  }

  const handleCopyData = () => {
    var text=document.getElementById('myBox');
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("Copied all Data","Success");
  };

  const handleExtraspace = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Clean ExtraSpaces","Success");
  };
  const[text,setText]=useState("");
  return (
  <div style={{color:props.mode==='dark'?'white':'black'}}>
<div className="mb-3 my-5 container">
 <h2>{props.heading}</h2>
  <textarea className="form-control"  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
  <button className='btn btn-primary my-3 ' onClick={handleUpClick}>Convert to UpperCase</button>
  <button className='btn btn-primary m-3 ' onClick={handleLoClick}>Convert to LowerCase</button>
  <button className='btn btn-primary' onClick={handleClearClick}>Clear Text</button>
  <button className='btn btn-primary m-3'  onClick ={handleCopyData}>Copy Text</button>
  <button className='btn btn-primary'  onClick ={handleExtraspace}>Clear ExtraSpaces</button>
</div>
<div className='container'>
  <h1>Your Text Summary</h1>
  <p>{text.split('').length} Words and {text.length} Characters</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:'Write Something Else.'}</p>
</div>
</div>
  )
}


// TextForm.propTypes={
//     heading:propTypes.string
// }