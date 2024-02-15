import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case" , "success")
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case" , "success")
  }
  const handleReverseClick = ()=>{
    let currentValue =text.split("").reverse("").join("");
    setText(currentValue)
  }
  const copyToClipBoard = ()=>{
   // var text = document.getElementById('myBox');
   // text.select()
    navigator.clipboard.writeText(text)
  //  document.getSelection().removeAllRanges()
    props.showAlert("Copied to Clipboard" , "success")
  }
  const removeExtraSpaces = ()=>{
    var newText = text.replace(/\s+/g, ' ').trim()
    setText(newText)
    props.showAlert("Extra spaces removed" , "success")
  }
  const handleCaplick = ()=>{
    if(text !== ""){
    let words = text.split(" ");
    let joinedWords = [];
    let capWord;
    
    words.forEach(function (element){
        if(element[0] !== undefined){
            capWord = element[0].toUpperCase() + element.slice(1).toLowerCase();
            joinedWords += capWord + ' '; 
        }
    })
    setText(joinedWords);
   }
  }
  const handleClearText = ()=>{
    setText("")
    props.showAlert("Text cleared" , "success")
  }
  const handleSpeakWord = () =>{
    const Speech= new SpeechSynthesisUtterance();
    Speech.lang='eng';
    Speech.text= text;
    window.speechSynthesis.speak(Speech);
  }
  const handleOnChange = (event)=>{
   // console.log("On Change Clicked")
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className='container' style={{color: props.mode==='light'?"black" : "white"}}>
        <h3 className='mb-3'>{props.heading}</h3>
          <div className="mb-3"> 
            <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8" style={{backgroundColor: props.mode==='light'?"white" : "#404040",color: props.mode==='light'?"black" : "white"}}></textarea>
          </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCaplick}>Capitalized First Letter of each word</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpeakWord}>Speak Functionality</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Revrese</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyToClipBoard}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>

      </div>
      <div className="container my-3" style={{color: props.mode==='light'?"black" : "white"}}>
        <h4>Your Text Summary</h4>
        <p><b>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{text.split(" ").filter((element)=>{ return element.length!==0}).length * 0.0008}</b> Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  )
}
