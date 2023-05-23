//Start with an interactive demo ie. ask the viewers which cards to click on
//Why did we picked a card Game
//Go through commit history, go through what challenges we ran into
//What we could do better or what we would do if we had more time

import "./styles.css";
import { useState } from "react";

const letters = [
  "https://img.freepik.com/free-vector/fish-doodle-simple-style-white-background_1308-84932.jpg",
  "https://img.freepik.com/free-vector/fish-doodle-simple-style-white-background_1308-84932.jpg",
  "https://img.freepik.com/free-vector/rabbit-doodle-simple-style-white-background_1308-90335.jpg?t=st=1684876340~exp=1684876940~hmac=336e08215115f8931fb40d65658750590fd624cf1392d7b08bed2299673154c3",
  "https://img.freepik.com/free-vector/rabbit-doodle-simple-style-white-background_1308-90335.jpg?t=st=1684876340~exp=1684876940~hmac=336e08215115f8931fb40d65658750590fd624cf1392d7b08bed2299673154c3",
  "https://img.freepik.com/free-vector/moose-doodle-simple-style-white-background_1308-91429.jpg?t=st=1684876618~exp=1684877218~hmac=6f72dbe8b5700cad5e6d714f5dd07c00ef5f74969ba5be11c00d6b90cf1bbeaf",
  "https://img.freepik.com/free-vector/moose-doodle-simple-style-white-background_1308-91429.jpg?t=st=1684876618~exp=1684877218~hmac=6f72dbe8b5700cad5e6d714f5dd07c00ef5f74969ba5be11c00d6b90cf1bbeaf",
  "https://img.freepik.com/free-vector/penguin-doodle-simple-style-white-background_1308-86957.jpg?w=740&t=st=1684876252~exp=1684876852~hmac=788b6c075e2bee869bbfe5e7db6f1f88e8a148873da0ce08967f3cb8162d6d13",
  "https://img.freepik.com/free-vector/penguin-doodle-simple-style-white-background_1308-86957.jpg?w=740&t=st=1684876252~exp=1684876852~hmac=788b6c075e2bee869bbfe5e7db6f1f88e8a148873da0ce08967f3cb8162d6d13",
  "https://img.freepik.com/free-vector/kangaroo-doodle-simple-style-white-background_1308-86185.jpg?w=996&t=st=1684876313~exp=1684876913~hmac=7478fba446024ae9021a4e88a921edc6f5228582761b7af0d8eebc55358ee325",
  "https://img.freepik.com/free-vector/kangaroo-doodle-simple-style-white-background_1308-86185.jpg?w=996&t=st=1684876313~exp=1684876913~hmac=7478fba446024ae9021a4e88a921edc6f5228582761b7af0d8eebc55358ee325",
  "https://img.freepik.com/free-vector/camel-doodle-simple-style-white-background_1308-85049.jpg?w=1380&t=st=1684876340~exp=1684876940~hmac=3e27852bb6aeabba987561511b0b8dbcc7016cc936f9e4fd8b118dced440489d",
  "https://img.freepik.com/free-vector/camel-doodle-simple-style-white-background_1308-85049.jpg?w=1380&t=st=1684876340~exp=1684876940~hmac=3e27852bb6aeabba987561511b0b8dbcc7016cc936f9e4fd8b118dced440489d",
  "https://img.freepik.com/free-vector/ostrich-doodle-simple-style-white-background_1308-85145.jpg?t=st=1684876400~exp=1684877000~hmac=5002e3ecdbc2cd3c097ac038bd715e245297e5373e185e3de5cbcbd18c17cbe1",
  "https://img.freepik.com/free-vector/ostrich-doodle-simple-style-white-background_1308-85145.jpg?t=st=1684876400~exp=1684877000~hmac=5002e3ecdbc2cd3c097ac038bd715e245297e5373e185e3de5cbcbd18c17cbe1https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F18%2Fbe%2Fed%2F18beedc39bbcaed21ec78149778bf5e0.jpg&f=1&nofb=1&ipt=e11aa29415df639c960c259e6be605f6cf9fe8e97805ab2c6b4a6321e3b3d137&ipo=images",
  "https://img.freepik.com/free-vector/cat-doodle-simple-style_1308-90792.jpg?w=900&t=st=1684876374~exp=1684876974~hmac=d8859ecb8faca6f66329a2e5ead59c9e869926c2d94dca66b7d97113e00a7fea",
  "https://img.freepik.com/free-vector/cat-doodle-simple-style_1308-90792.jpg?w=900&t=st=1684876374~exp=1684876974~hmac=d8859ecb8faca6f66329a2e5ead59c9e869926c2d94dca66b7d97113e00a7fea",
  "https://img.freepik.com/free-vector/bird-doodle-simple-style-white-background_1308-90242.jpg?w=1060&t=st=1684876413~exp=1684877013~hmac=aaa07683360cfd78af955f36b59108a7f4730e4e98bb6d6318a49cb79590c783",
  "https://img.freepik.com/free-vector/bird-doodle-simple-style-white-background_1308-90242.jpg?w=1060&t=st=1684876413~exp=1684877013~hmac=aaa07683360cfd78af955f36b59108a7f4730e4e98bb6d6318a49cb79590c783",
];
letters.sort(() => Math.random() - 0.5);

function Card(props) {
  if (props.displayLetter) {
    return (
      <div className="Card" onClick={props.onClick}>
        <img
          src={props.letter}
          alt="Girl in a jacket"
          width="100px"
          height="150px"
        />
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

  function reset() {
    setFirstCard(-1);
    setSecondCard(-1);
    letters.sort(() => Math.random() - 0.5);
    setCorrectPairs([]);
  }

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
      <div className="resetButton">
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
