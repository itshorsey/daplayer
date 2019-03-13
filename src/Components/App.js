/*global Mixcloud*/
import React, { Component } from "react";
import Header from "./Header";
import Collections from "./Collections";
import About from "./About";
import Radio from "./Radio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Collection from "./Collection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentMix: "",
      mixList: []
    };
  }

  fetchMixes = async () => {
    const mixKeys = [];
    try {
      // Always use Await with with async function
      // const response = await fetch("https://api.mixcloud.com/ntsradio/feed/");
      // const data = response.json();

      // console.log(data.data);
      // this.setState({
      //   mixList: data.data
      // });

      fetch("https://api.mixcloud.com/computercafe/favorites/").then(response =>
        response
          .json()
          .then(data => ({
            data: data,
            status: response.status
          }))
          .then(res => {
            // console.log(res.status, res.data.data);
            res.data.data.map(index => {
              mixKeys.push(index.key);
            });
            // console.log(`keys: ${mixKeys}`);
            this.setState({
              mixList: mixKeys
            });
          })
      );
    } catch (error) {}
  };

  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;

    this.widget.events.pause.on(() => this.setState({ playing: false }));
    this.widget.events.play.on(() => this.setState({ playing: true }));
  };

  componentDidMount() {
    this.fetchMixes();
    this.mountAudio();
  }

  actions = {
    togglePlay: () => {
      this.widget.togglePlay();
    },
    playMix: mixName => {
      const { currentMix } = this.state;

      this.setState({
        currentMix: mixName
      });
      this.widget.load(mixName, true);
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <section>
            <Header />
            <Switch>
              <Route exact path="/" component={Collections} />
              <Route path="/about" component={About} />
              <Route path="/radio" component={Radio} />
              <Route
                path="/collection/:mix"
                render={renderParams => (
                  <Collection
                    {...renderParams}
                    {...this.state}
                    {...this.actions}
                  />
                )}
              />
            </Switch>
          </section>
        </Router>
        <iframe
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&hide_artwork=1&feed=%2Fbalamii%2Fradio-dao-march-2019%2F"
          frameBorder="0"
          className="fixed bottom-0 z-5"
          ref={player => (this.player = player)}
        />
      </div>
    );
  }
}

export default App;
