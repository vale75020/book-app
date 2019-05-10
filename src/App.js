import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Story from "./components/Story/Story";
import NavMenu from "./components/NavMenu/NavMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to my book app</h1>
      </header>
      <NavMenu />
      <main>
        <Story storyTitle="The Hobbit" isbn={Date.now()/2} />
        <Story storyTitle="Harry Potter" isbn={Date.now()/3} />
        <Story storyTitle="Starwars" isbn={Date.now()/4} />
        <Story storyTitle="Avengers" isbn={Date.now()/5} />
      </main>
    </div>
  );
}

export default App;
