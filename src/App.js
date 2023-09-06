import "./App.css";
import SearchForm from "./SearchForm.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center m-3">
          <h1>Dictionary</h1>
        </header>
        <main>
          <SearchForm />
        </main>
        <footer className="text-center m-3">Coded by Maria Serrano</footer>
      </div>
    </div>
  );
}

export default App;
