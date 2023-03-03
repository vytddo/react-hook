import React, { useState } from "react";
// function component
function App2() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p> You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
export default App2;
