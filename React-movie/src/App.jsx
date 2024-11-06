import "./App.css";

function App() {
  let count = 0;
  const countUp = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <div>
      <h3>Total Count : {count}</h3>
      <button onClick={countUp}> Click </button>
    </div>
  );
}

export default App;
