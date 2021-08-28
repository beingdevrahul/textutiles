import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log("Uppper case button clicked recently"+text)
    let newValue = text.toUpperCase();
    setText(newValue);
    props.showAlert("Converted to uppercase", "success")
    
  };
  const handleClear=()=>{
    setText("")
    props.showAlert("Text Cleared", "success")
  }
  const handelOnChange = (event) => {
    // console.log("onChange")
    setText(event.target.value);
  };
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra space removed", "success")
  }
  const handleCopy=()=>{
    let text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text copied", "success")
  }
  const handleLwClick=()=>{
    let newValue=text.toLowerCase();
    setText(newValue);
    props.showAlert("Converted to lowercase", "success")
  }
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color:props.Mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handelOnChange}
          id="myBox"
          rows="5"
          style={{backgroundColor:props.Mode==='light'?'white':'#212529',color:props.Mode==='light'?'black':'white'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleLwClick}>
        Convert to lowercase
      </button>

      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleClear}>
        Clear text
      </button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleCopy}>
        Copy text
      </button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleExtraSpace}>
        Remove space
      </button>
      </div>
      
      <div className="container my-2" style={{color:props.Mode==='light'?'black':'white'}}>
          <h1>Your text summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
          <p>{0.008*text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in the textbox to preview it here.."}</p>
      </div>
    </>
  );
};

export default TextForm;
