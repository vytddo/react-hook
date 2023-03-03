import React, { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    console.log("useEffect called!");
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log("Oh noes!", err));
  }, []);
  return (
    <div className="App">
      <img src={data} alt="A random dog breed" />
    </div>
  );
}
export default App;
