import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
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
  );
}

export default App;
