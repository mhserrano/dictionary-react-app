import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center m-3">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center m-3">
          Open-sourced code by Maria Serrano
        </footer>
      </div>
    </div>
  );
}

export default App;
