import { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

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
        <label className="d-block">What word do you want to look up?</label>
        <input
          type="search"
          placeholder="Type here..."
          autoFocus={true}
          onChange={updateWord}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <Results results={results} />
    </div>
  );
}
