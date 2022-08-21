import React, {useState} from 'react'

export default function TextForm(props) {
  const  [text, setText] = useState("");
  const handleUpClick = () =>{
    setText(text.toUpperCase());
    props.showAlert("You have clicked Upper Case", "success");
  };

  const handleLowClick = () =>{
    setText(text.toLowerCase());
    props.showAlert("You have clicked Lower Case", "success");
  };

  const handleClearClick = () =>{
    setText("");
    props.showAlert("You have clicked Clear", "success");
  };

  const handleCopyClick = () =>{
    const element = document.getElementById("myBox");
    element.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleOnChange= (event)=>{
    setText(event.target.value);
  };
  //setText("Enter Text Here2");
  return (
    <>
    <div className="container" style={{color: props.mode === "dark" ? "white": "#042743"}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === "dark" ? "grey": "white", color: props.mode === "dark" ? "white": "#042743"}} onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === "dark" ? "white": "#042743"}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length > 0 && text.split(" ")[0] ? text.trim().split(" ").length : 0 } words and {text.trim().length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length >0 ? text : "Enter something to preview it here"}</p>
    </div>
    </>
  )
}
