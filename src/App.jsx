import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilmList from "./Components/Film/FilmList";
import FilmDetails from "./Components/Film/FilmDetails";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FilmList />} />
          <Route
            path="/film/:slug"
            render={(props) => <FilmDetails {...props} />}
            element={<FilmDetails />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
