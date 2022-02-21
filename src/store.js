import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./Slices/FilmSlice";
const store = configureStore({
  reducer: { films: filmsReducer },
});

export default store;
