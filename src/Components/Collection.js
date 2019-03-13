import React from "react";
import Playbutton from "./Playbutton";

// match
const Collection = props => (
  <div className="mh4">
    {/* {match.params.mix} */}
    {props.mixList.map(index => (
      <Playbutton {...props} mix={index} />
    ))}
  </div>
);

export default Collection;
