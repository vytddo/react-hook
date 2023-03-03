import React, { useState } from "react";
function App4() {
  const [score, setScore] = useState(0);
  const [message] = useState("Welcome here!");
  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <h2>{score}</h2>
        <button onClick={() => setScore(score + 1)}>Increase score</button>
      </header>
    </div>
  );
}
export default App4;
