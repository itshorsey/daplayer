/*global Mixcloud*/
import React, { Component } from "react";

// const Player = props => (
//   <div className="fixed bottom-0 h3 w-100">
//     <iframe
//       width="100%"
//       height="60"
//       src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2FNTSRadio%2Flaunettes-hour-7th-october-2018%2F"
//       frameBorder="0"
//       ref={mixPlayer}
//     />
//   </div>
// );

class Player extends React.Component {
  mountAudio = async () => {
    const widget = Mixcloud.PlayerWidget(this.player);
    await widget.ready;
  };

  componentDidMount() {
    this.mountAudio();
  }

  togglePlay = () => {
    this.widget.togglePlay();
  };

  render() {
    return (
      <div className="fixed bottom-0 h3 w-100">
        <iframe
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2FNTSRadio%2Flaunettes-hour-7th-october-2018%2F"
          frameBorder="0"
          ref={player => (this.player = player)}
        />
      </div>
    );
  }
}

export default Player;
