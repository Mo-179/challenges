import { useState } from "react";
import "./App.css";
export default function App() {
  let [isActive, setisActive] = useState(true);
  console.log(isActive);
  function handleClick() {
    setisActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
