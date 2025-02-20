import "./App.css";

function App() {
  return (
    <>
      <Text display="Hello" />
      <Text display="World" />
    </>
  );
}

export default App;

function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}
