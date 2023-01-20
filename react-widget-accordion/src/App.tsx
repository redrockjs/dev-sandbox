import React from "react";
import "./App.css";
import Collapsible from "react-collapsible";

function App() {
  return (
    <main className="app">
      <h1>Accordion slider widget</h1>

      <Collapsible trigger="Start here">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>

      <Collapsible trigger="Start here">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>
    </main>
  );
}

export default App;
