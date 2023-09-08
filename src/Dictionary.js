import { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("sunset");
  function updateWord(event) {
    setWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(word);
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
