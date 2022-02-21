import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../Utils/api";
import Heading from "../Commons/Heading";
import { Link } from "react-router-dom";

const FilmDetails = () => {
  const params = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const url = `/posts/${params.slug}`;
    api.get(url).then((res) => {
      setFilm(res.data);
    });
  }, [params.slug]);

  return (
    <section className="body-font overflow-hidden justify-center items-center">
      <Heading />≈
      {film && (
        <div className="container px-5 pb-6 mx-auto ">
          <div className="lg:w-3/5 mx-auto flex flex-wrap justify-center bg-white py-10 px-4 rounded-xl shadow-md">
            <img
              alt="ecommerce"
              className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded-3xl shadow-sm"
              src={film.featured_image.large}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">
                {film.title}
              </h1>

              <div
                className="pt-8"
                dangerouslySetInnerHTML={{ __html: film.content }}
              ></div>
            </div>
          </div>
        </div>
      )}
      <Link to="/">
        <button className="flex mx-auto text-white bg-[#fba234] border-0 py-2 px-8 focus:outline-none  rounded text-lg justify-start items-start">
          Watch More (Home)
        </button>
      </Link>
    </section>
  );
};

export default FilmDetails;
