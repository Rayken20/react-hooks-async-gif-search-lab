
import React, { useState } from "react";

function GifSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter search term"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">Find Gifs</button>
    </form>
  );
}

export default GifSearch;
