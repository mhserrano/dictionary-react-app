import { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = `26fa1d65306c6427fb2f815to8d8b867`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "otMf3IjMKqx5SBDC7VburapOliJGgnqjeIAyiWGklPCJpI2fQetCoGw9";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?per_page=6&query=${word}`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateWord(event) {
    setWord(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus={true}
            placeholder="Search for a word"
            defaultValue={props.defaultKeyword}
            onChange={updateWord}
          ></input>
        </form>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
