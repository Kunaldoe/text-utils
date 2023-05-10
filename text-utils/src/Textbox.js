import React, { useState } from "react";
import "./Textbox.css";

const Textbox = (props) => {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const clearDefaultText = () => {
    if (text === "Enter text here") {
      setText("");
    }
  };

  const convertToUpper = () => {
    let ntext = text.toUpperCase();
    setText(ntext);
  };

  const convertToLower = () => {
    let ntext = text.toLowerCase();
    setText(ntext);
  };

  const totalWords = text.trim().split(" ").filter((word) => word !== "").length;
  const totalCharacters = text.length;

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <h2 className="htwo">Enter your text below</h2>
        <textarea
          id="mybox"
          value={text}
          onChange={handleInputChange}
          onFocus={clearDefaultText}
        ></textarea>
        <div className="button-container">
          <button className="btn" onClick={convertToUpper}>
            Convert to UpperCase
          </button>
          <button className="btn" onClick={convertToLower}>
            Convert to Lowercase
          </button>
        </div>
      </div>
      <div>
        <h1>Text Summary</h1>
        <p>
          Total Words: {totalWords} and Total Characters: {totalCharacters}
        </p>
        <p>Minutes read: {(0.015 * totalWords).toFixed(2)} minutes</p>
        
      </div>
    </>
  );
};

export default Textbox;
