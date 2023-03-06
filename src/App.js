import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  // useEffect(() => {
  //   inputRef.current.focus();
  //   console.log(inputRef);
  // }, []);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    // Add the code for the minus function
    e.preventDefault();
    setResult(result => result - Number(inputRef.current.value))
  }

  function times(e) {
    // Add the code for the plus function
    e.preventDefault();
    console.log(inputRef)
     setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    // Add the code for the divide function
    e.preventDefault();
     setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault()
    inputRef.current.value = ''
    // Add the code for the resetInput function

  }

  function resetResult(e) {
    e.preventDefault()
    setResult(0)
    // Add the code for the resetResult function
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}> {result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        {/* Add the subtract button */}
        <button onClick={minus}>minus</button>
        {/* Add the multiply button */}
        <button onClick={times}>times</button>
        {/* Add the divide button */}
        <button onClick={divide}>divide</button>
        <p />
        {/* Add the resetInput button */}
        <button onClick={resetInput}>resetInput</button>
        {/* Add the resetResult button */}
        <button onClick={resetResult}>resetResult</button>
      </form>
    </div>
  );
}

export default App;
