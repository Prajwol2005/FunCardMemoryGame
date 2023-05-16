import "./styles.css";
import { useState } from "react";

const letters = [
  "A",
  "A",
  "B",
  "B",
  "C",
  "C",
  "D",
  "D",
  "E",
  "E",
  "F",
  "F",
  "G",
  "G",
  "H",
  "H",
  "I",
  "I",
];
letters.sort(() => Math.random() - 0.5);

function Card(props) {
  if (props.displayLetter) {
    return (
      <div className="Card" onClick={props.onClick}>
        {props.letter}
      </div>
    );
  } else {
    return (
      <div className="Card" onClick={props.onClick}>
        {}
      </div>
    );
  }
}

export default function App() {
  const [firstCard, setFirstCard] = useState(-1);
  const [secondCard, setSecondCard] = useState(-1);
  const [correctPairs, setCorrectPairs] = useState([]);

  function clickCard(index) {
    console.log(index);
    if (firstCard === -1) {
      setFirstCard(index);
    } else if (secondCard === -1 && index !== firstCard) {
      setSecondCard(index);
    } else {
      // console.log(letters[firstCard]);
      // console.log(letters[secondCard]);
      if (letters[firstCard] === letters[secondCard]) {
        correctPairs.push(letters[firstCard]);
        setCorrectPairs(correctPairs);
      }
      setFirstCard(-1);
      setSecondCard(-1);
    }
  }
  return (
    <div className="App">
      <h1>Card Memory Game</h1>
      <h2>Click to see some magic happen!</h2>

      <div className="grid">
        {letters.map(function (letter, index) {
          return (
            <Card
              letter={letter}
              displayLetter={
                firstCard === index ||
                secondCard === index ||
                correctPairs.includes(letter)
              }
              onClick={() => clickCard(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
