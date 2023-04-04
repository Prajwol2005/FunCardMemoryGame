import "./styles.css";

function Card(props) {
  return <div className="Card">{props.letter}</div>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Card Memory Game</h1>
      <h2>Click to see some magic happen!</h2>

      <div className="grid">
        <Card letter="A" />
        <Card letter="B" />
        <Card letter="C" />
        <Card letter="D" />
        <Card letter="E" />
        <Card letter="F" />
        <Card letter="G" />
        <Card letter="H" />
        <Card letter="I" />
      </div>
    </div>
  );
}
