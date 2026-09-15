import "./App.css";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="app">

      <div className="design design1"></div>
      <div className="design design2"></div>
      <div className="design design3"></div>
      <div className="design design4"></div>

      <div className="container">

        <p className="top-design">— ♡ ✿ ♡ —</p>

        <h1>COUNTER APPLICATION</h1>

        <p className="subtitle">
          Keep track, one count at a time 💜
        </p>

        <div className="counter-circle">
          <h2>{count}</h2>
        </div>

        <p className="current-count">
          Current Count
        </p>

        <p className="message">
          {count === 0
            ? "💡 Ready to begin? Start your counting journey!"
            : count <= 10
            ? "🌱 Good start! Keep building your count!"
            : count <= 20
            ? "✨ Great progress! You're getting there!"
            : "🎉 Amazing work! You've reached a high count!"}
        </p>

        <div className="buttons">

          <div>
            <button
              className="decrease"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              −
            </button>
            <p>Decrease</p>
          </div>

          <div>
            <button
              className="reset"
              onClick={() => setCount(0)}
            >
              ↻
            </button>
            <p>Reset Count</p>
          </div>

          <div>
            <button
              className="increase"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
            <p>Increase</p>
          </div>

        </div>

        <div className="info-box">
          <p>🏆 Counter Status</p>

          <p className="status">
            {count === 0 ? "Ready" : "Active"}
          </p>
        </div>

        <p className="bottom-text">
          ♡ Small steps create big progress ♡
        </p>

      </div>

    </div>
  );
}

export default App;