import React from "react";
import "./App.css";
import { VideoChat } from "./VideoChat";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Video Chat with React Hooks WooW</h1>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <p>
          {" "}
          Made with{" "}
          <span role="img" aria-label="React">
            ⚛
          </span>{" "}
          by <a href="https://twitter.com/HawiCaesar">Hawi Caesar</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
