import React, {useState} from "react";



export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleSenClick = ()=>{
        let sentences = text.split(/[.!?]+/).filter(Boolean).length;
        setSentences(sentences);
    };  

    const  handleClearClick = ()=>{
        let newText = ""; //no space "" required or else return 1 as default character
        setText(newText);
        setSentences(0); // Reset sentence count when clearing text
    };

    const handleOnChange = (event)=>{
        setText(event.target.value);
        handleSenClick();  // Automatically update sentence count when text changes
};
  

    const [text, setText] = useState("");
    const [sentences, setSentences] = useState(0);
  
    return (
        <>
            <div>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange} 
                        id="myBox" 
                        rows="4">     
                    </textarea>
                </div>
                <button className="btn btn-primary mx-1" 
                onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" 
                onClick={handleLoClick}>Convert to Uppercase</button>
               
                <button className="btn btn-primary mx-1" 
                onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-2">
                <h5>Your text summary</h5>
                <p>{text.split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").filter(Boolean).length)} minute reading</p>
                <h5>Preview</h5>
                <p>{text}</p>
                <h6>Sentences: {sentences}</h6>
               
           
            </div>
        </>
    );
};