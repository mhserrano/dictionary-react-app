import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <header className="text-center">
            <h1>Dictionary</h1>
          </header>
          <main>
            <Dictionary defaultKeyword="moon" />
          </main>
        </div>
      </div>
      <footer>
        This project was coded by{" "}
        <strong>
          <a href="https://github.com/mhserrano">Maria Serrano</a>
        </strong>{" "}
        and is{" "}
        <strong>
          {" "}
          <a href="https://github.com/mhserrano/dictionary-react-app">
            open sourced
          </a>
        </strong>{" "}
        on GitHub
      </footer>
    </div>
  );
}

export default App;
