import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  // Create the color to diplay as hexcode use ranIndex(line 18) to assign it a value setColor(randomColors[ranIndex]); (randomColors func line 14)
  const [color, setColor] = useState(null);
  //
  const [colors, setColors] = useState(Array.from({ length: 3 }));
  const [showButton, setShowButton] = useState(false);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const newColors = () => {
    const randomColors = colors.map((color) => {
      const newColor = Math.floor(Math.random() * 0xffffff).toString(16);
      return "#" + newColor;
    });
    //console.log(randomColors)

    // Use the math to a random number between 0 & 2 then store it in ranIndex to use as the random color to diplay as question
    const ranIndex = Math.floor(Math.random() * 3);
    setColor(randomColors[ranIndex]);
    setColors(randomColors);
    //console.log(randomColors[ranIndex])
  };

  const clickHandler = () => {
    // console.log("button clicked!!");
    newColors();
    setShowButton(false);
    setShowMessage(false);
  };

  const checkAnswer = (answer) => {
    //console.log("is the answer??")
    if (answer === color) {
      setMessage("Correct! 🙋🏻‍♀️");
    } else {
      setMessage("Not Corrrect 🤦🏻‍♂️");
    }
    setShowMessage(true);
    setShowButton(true);
  };

  useEffect(() => {
    newColors();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1>Color Codes</h1>
      {/* Randomly generate the HEX below. */}
      <h2> {color} </h2>
      <h2>What color is this?</h2>
      <div style={{ display: "flex" }}>
        {colors.map((newColor, index) => (
          <div
            key={index}
            onClick={() => checkAnswer(newColor)}
            style={{
              height: 100,
              width: 100,
              backgroundColor: newColor
            }}
          >
            {/* {newColor} */}
          </div>
        ))}
      </div>
      {showMessage && <h2 style={{ color: color }}>{message}</h2>}
      {showButton && <button onClick={clickHandler}>Play again?</button>}

      {/*
        <div data-testid="color-container">
          <div data-testid="incorrect-color"></div>
          <div data-testid="correct-color"></div>
        </div>
      */}
    </div>
  );
}
