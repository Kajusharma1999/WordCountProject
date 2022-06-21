import React, {useState} from 'react';
export default function Textform(props){
    const handleupClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnchange = (event)=> {
        console.log("On change");
        setText(event.target.value)
    }
    const[text, setText] = useState("Enter text here");
    return(
        <>
        <div className="container">
            <h1> {props.heading} </h1>
            <div classsName="mb-3">
                <textarea classsName="form-control" value={text} onChange={handleOnchange} id="myBox" rows="12"></textarea>
            </div>
            
                    </div>
                    <div className="word_container">
                    <div className="container_count my-3">
                        <h2>Your Text Summary Details</h2>
                        <p>{text.split(" ").length} words {text.length} character</p>
                        <p>Time Need To Read This Content {0.004 * text.split(" ").length} minutes </p>
                    </div>
                    <button type="button" class="btn btn-primary mx-2" onClick={handleupClick}>Convert to Uppercase</button>
                    <button type="button" class="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
                    </div>
                    </>
    )
}