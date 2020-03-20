import React from "react";
import "./styles.css";
import Lottery from "./Lottery";

export default function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
    </div>
  );
}
