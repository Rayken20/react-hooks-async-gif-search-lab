// GifListContainer.js
import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = async query => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=4PwZvHBOO2YwBuT43s51RNPNBHwyZkHz&rating=g`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setGifs(data.data.slice(0, 3)); 
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  return (
    <div>
      <GifSearch onSearch={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
