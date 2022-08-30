import React, { useState, useEffect } from "react";
import "./App.css";
import Tmdb from "./tmdb";
import Header from "./components/Header";
import FeaturedMovie from "./components/FeaturedMovie";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list);
      setMovieList(list);
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      console.log(chosenInfo);
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}
    </div>
  );
};
