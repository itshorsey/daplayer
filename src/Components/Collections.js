import React from "react";
import FeaturedMix from "./FeaturedMix";
import mixes from "../data/mixes";

const Collections = () => (
  <article className="cf pa3 mw9 center">
    <section className="fl w-100">
      {mixes.map((mix, index) => (
        <FeaturedMix title={mix.title} slug={mix.slug} key={index} />
      ))}
    </section>
  </article>
);

export default Collections;
