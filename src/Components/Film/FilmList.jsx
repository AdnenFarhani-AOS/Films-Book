import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilms, fetchPopularFilms } from "../../Slices/FilmSlice";
import Heading from "../Commons/Heading";
import FilmCard from "./FilmCard";
import FilmSearch from "./FilmSearch";
import PopularFilms from "./PopularFilms";

const FilmList = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films.listing);

  // Fetch the list of films
  useEffect(() => {
    dispatch(fetchFilms());
    dispatch(fetchPopularFilms());
  }, [dispatch]);

  return (
    <div className=" flex flex-col md:px-16 px-6 py-6 ">
      <Heading />
      <PopularFilms />
      <FilmSearch />
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-wrap ">
          {films.length > 0 &&
            films.map((film, index) => (
              <React.Fragment key={index}>
                <FilmCard film={film} />
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilmList;
