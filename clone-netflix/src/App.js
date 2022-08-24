import "./App.css";
import React, { useState, useEffect } from "react";
import tmdb from "./tmdb";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      console.log(list);
      setMovieList(list);

      // eslint-disable-next-line no-undef
      let originals = list.filter((i = i.slug === "originals"));
      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, "tv");
      console.log(chosenInfo);
      setFeatureData(chosenInfo);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      
    </div>
  );
};
