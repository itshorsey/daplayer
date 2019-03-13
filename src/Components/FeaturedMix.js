import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const FeaturedMix = props => (
  <div className="fl w-100 w-50-m w-25-l pa3-m pa4-l">
    <h2>Architects</h2>
    <h2>{props.title}</h2>
    <h2>slug: {props.slug}</h2>
    <h2>22nd January 2018</h2>
    <p>
      <Link to={`/collection/${props.slug}`}>Click for more</Link>
    </p>
  </div>
);

export default FeaturedMix;
