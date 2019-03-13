import React from "react";

const Playbutton = ({ mix, playMix, currentMix, togglePlay, playing }) => (
  <div>
    <button
      className="db mv5 button button-reset pointer"
      onClick={() => {
        if (currentMix === mix) {
          console.log("this should be the conditional");
          togglePlay();
        } else {
          console.log("this should be the else");
          playMix(mix);
        }
      }}
    >
      {/* should work */}
      {/* && playing */}
      {currentMix === mix ? "Pause" : "Play"} - {mix}
    </button>
  </div>
);
export default Playbutton;
