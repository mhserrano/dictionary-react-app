import { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `26fa1d65306c6427fb2f815to8d8b867`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a word"
          autoFocus={true}
          onChange={updateWord}
        ></input>
      </form>
      <Results results={results} />
    </div>
  );
}
