import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Utils/api";

export const fetchFilms = createAsyncThunk("films/fetchFilms", async () => {
  const response = await api.get("/posts");
  const films = response.data;
  return { films };
});

export const fetchPopularFilms = createAsyncThunk(
  "films/fetchFilms",
  async () => {
    const response = await api.get("/popular_posts");
    const populars = response.data;
    return { populars };
  }
);

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await api.get("/categories");
    const categories = response.data;
    return { categories };
  }
);

export const filterFilms = createAsyncThunk(
  "films/filterFilms",
  async (searchInformations) => {
    const response = await api.get("/posts", {
      params: {
        category: searchInformations[0],
        name: searchInformations[1],
      },
    });

    const films = response.data;
    return { films };
  }
);

export const filmsSlice = createSlice({
  name: "films",
  initialState: {
    listing: [],
    categories: [],
    popular: [],
  },
  reducers: {},
  extraReducers: {
    [fetchFilms.fulfilled]: (state, action) => {
      if (action.payload.films) {
        state.listing = action.payload.films;
      }
    },
    [filterFilms.fulfilled]: (state, action) => {
      state.listing = action.payload.films;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      if (action.payload.categories) {
        state.categories = action.payload.categories;
      }
    },
    [fetchPopularFilms.fulfilled]: (state, action) => {
      if (action.payload.populars) {
        state.popular = action.payload.populars;
      }
    },
  },
});

export default filmsSlice.reducer;
