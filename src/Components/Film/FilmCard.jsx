import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FilmsCard extends Component {
  render() {
    return (
      <div className="pb-6 px-4 md:w-1/6 w-full relative">
        <Link to={`/film/${this.props.film.slug}`}>
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={this.props.film.featured_image.large}
            />
          </div>
          <h2 className="text-xl text-center font-medium title-font text-gray-900 mt-5">
            {this.props.film.title}
          </h2>
        </Link>
      </div>
    );
  }
}
