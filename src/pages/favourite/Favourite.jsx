import React, { useState, useEffect } from "react";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Favourite() {
  const [search, setSearch] = useState("");
  const [favs, setFavs] = useState([]);
  const { getItem, removeItem } = useLocalStorage("favs");

  useEffect(() => {
    const storedFavs = getItem();

    if (storedFavs) {
      setFavs(storedFavs);
    }
  }, [favs]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && search.length > 0) {
      // Handle search here
      // For example: navigate(`/search/${search}`);
    }
  };

  const searchClickHandler = () => {
    if (search.length > 0) {
      // Handle search here
      // For example: navigate(`/search/${search}`);
    }
  };
  // console.log(favs);

  const filteredFavs = favs.filter(
    (fav) => fav.title && fav.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <ContentWrapper>
      <div className="favPage">
        <div className="pageheader">
          <div className="pagetitle">{"Favourites"}</div>
        </div>
        <div className="searchinput">
          <input
            type="text"
            placeholder="Search for your favourite movies or TV shows..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
          <button onClick={searchClickHandler}>Search</button>
        </div>
        <div className="contents">
          {search
            ? filteredFavs.map((fav) => (
                <MovieCard key={fav.id} data={fav} mediaType={"movie"} />
              ))
            : favs.map((fav) => (
                <MovieCard key={fav.id} data={fav} mediaType={"movie"} />
              ))}
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Favourite;
