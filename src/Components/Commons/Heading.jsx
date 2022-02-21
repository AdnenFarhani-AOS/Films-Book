import React, { Component } from "react";
import logo from "../../Assets/Images/logo.png";
export default class Heading extends Component {
  render() {
    return (
      <div className="flex flex-col items-center py-8">
        <img src={logo} alt="logo betsson" width={300} />
        <h1 className="text-[40px] text-center leading-[40px] xl:leading-[80px] font-medium">
          Hi Champion, It's Time
          <span className="font-bold text-primary">
            {" "}
            TO HAVE SOME FUN!
          </span>{" "}
        </h1>
        <p className="text-center">
          This app is developed for the employees of the Betsson group to give
          them a quick glimpse of the latest movies in their spare time at work
        </p>
      </div>
    );
  }
}
