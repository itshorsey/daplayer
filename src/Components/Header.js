import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="flex justify-between mt5">
    <ul className="list">
      <NavLink
        exact
        to="/radio"
        className="dib mr2"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >
        Radio
      </NavLink>
      <NavLink
        exact
        to="/"
        className="dib mr2"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >
        Collections
      </NavLink>
      <NavLink
        to="/about"
        className="dib mr2"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >
        About
      </NavLink>
    </ul>
    <h1 className="f4 mr4">Dead Air</h1>
  </div>
);

export default Header;
