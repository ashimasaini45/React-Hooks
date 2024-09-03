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

    const handleOnChange = (event)=>{
        setText(event.target.value);
};

    const [text, setText] = useState("");
  
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
            </div>
            <div className="container my-2">
                <h5>Your text summary</h5>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").length)} minute reading</p>
                <h5>Preview</h5>
                <p>{text}</p>
           
            </div>
        </>
    );
};