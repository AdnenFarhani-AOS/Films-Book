import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, filterFilms } from "../../Slices/FilmSlice";

const FilmSearch = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const categories = useSelector((state) => state.films.categories);

  // Fetch the list of available categories
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Filter Films based on category and name
  useEffect(() => {
    dispatch(filterFilms([category, title]));
  }, [title, category, dispatch]);

  return (
    <div className="w-full flex lg:flex-row flex-col pt-12 pb-10 px-4 justify-center ">
      <input
        type="text"
        autoComplete="off"
        placeholder="Search Film By Name ..."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="lg:w-1/3 w-full lg:mr-4 lg:mb-0 mb-4 bg-white rounded-xl focus:ring-1 text-base outline-none text-gray-700 py-1 px-3 leading-8 "
      />
      <div className="tabs flex md:flex-row flex-col ">
        <input
          id="-1"
          type="radio"
          name="category"
          value=""
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          defaultChecked
        />
        <h2 className="tabs__head md:mr-2 ">
          <label htmlFor="-1">All</label>
        </h2>
        {categories.map((category, index) => (
          <div key={index}>
            <input
              id={category.id}
              value={category.id}
              type="radio"
              name="category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <h2 className="tabs__head md:mr-2 mt-2 md:mt-0">
              <label htmlFor={category.id}>{category.name}</label>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmSearch;
