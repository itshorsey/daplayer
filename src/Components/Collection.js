import React, { Component } from "react";
import Playbutton from "./Playbutton";
import mixes from "../data/mixes";

class Collection extends Component {
  constructor(props) {
    super(props);

    this.set = {
      mixCollection: {}
    };
  }

  componentWillReceiveProps() {
    const { mix } = this.props.match.params;

    const [firstMix] = mixes.filter(index => {
      return index.slug === mix;
    });

    if (firstMix) {
      this.setState({
        mixCollection: firstMix
      });
    }
  }

  render() {
    console.log(this.state);

    try {
      const { mixCollection } = this.state;
    } catch (err) {
      console.log("nothing.");
    }

    return (
      <div className="mh4">
        <h1>{this.props.match.params.mix}</h1>
        {this.props.mixList.map(index => (
          <Playbutton {...this.props} mix={index} />
        ))}
      </div>
    );
  }
}

export default Collection;
