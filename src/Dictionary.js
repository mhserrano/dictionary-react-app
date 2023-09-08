import { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("sunset");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="search-form text-center">
      <h2>What word do you want to look up?</h2>
      <form className="d-block m-3" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type here..."
          autoFocus={true}
          onChange={updateWord}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}
