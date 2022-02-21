import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PopularFilms = () => {
  const popularFilms = useSelector((state) => state.films.popular);
  return (
    <>
      <section className="container  flex flex-col px-5 py-10 mx-auto lg:items-center md:flex-col lg:px-28 bg-white rounded-2xl shadow-xl ">
        <div className="flex flex-col md:flex-row ">
          {popularFilms &&
            popularFilms.map((film, index) => (
              <div
                className="flex flex-col md:w-1/4 w-full md:pr-8"
                key={index}
              >
                <Link to={`/film/${film.slug}`}>
                  <img
                    className="object-cover object-center rounded-3xl w-full h-96 shadow-lg"
                    alt="hero"
                    src={film.featured_image.large}
                  />
                  <h1 className="pt-4 text-2xl font-bold tracking-tighter text-center text-bold title-font">
                    {film.title}
                  </h1>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default PopularFilms;
