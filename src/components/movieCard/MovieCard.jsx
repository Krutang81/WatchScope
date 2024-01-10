import React, { useEffect, useState, useRef } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import Img from "../lazyLoadImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";
import { useLocalStorage } from "../../hooks/useLocalStorage";
const { getItem, setItem } = useLocalStorage("favs");

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const [favs, setFavs] = useState([]);
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const storedFavs = getItem();

    if (storedFavs) {
      setFavs(storedFavs);
    }
  }, [favs]);

  const addToFavs = (movie) => {
    //console.log("In addToFavs");
    let newFavs = [...favs, movie];
    setFavs([...newFavs]);
    setItem(newFavs);
    //console.log(newFavs);
  };

  const removeFromFavs = (movie) => {
    //console.log("in removeFromFavs");
    let newFavs = favs.filter((m) => m.id !== movie.id);
    setFavs([...newFavs]);
    setItem(newFavs);
    //console.log(newFavs);
  };
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;

  return (
    <div
      className="movieCard"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlock">
        <Img className="posterImg" src={posterUrl} />
        <>
          {favs.find((m) => m.id == data.id) ? (
            <div
              className="favEmoji"
              onClick={(e) => {
                e.stopPropagation();
                removeFromFavs(data);
              }}
            >
              ❌
            </div>
          ) : (
            <div
              className="favEmoji"
              onClick={(e) => {
                e.stopPropagation();
                addToFavs(data);
              }}
            >
              ❤️
            </div>
          )}
          ;
        </>
        {!fromSearch && (
          <React.Fragment>
            <CircleRating rating={data.vote_average.toFixed(1)} />

            <Genres data={data.genre_ids.slice(0, 2)} />
          </React.Fragment>
        )}
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
