import React, { Component } from "react";
import RecentlyPlayedCards from "./RecentlyPlayedCards";
import YourHeavyRotation from "./YourHeavyRotation";
import NewReleasesForYou from "./NewReleasesForYou";
import PopularPlaylists from "./PopularPlaylists";
import Chill from "./Chill";
import Arab from "./Arab";
import "./HomeContent.css";
import {Artists} from "./Artistsdata";

class HomeContent extends Component {
  constructor() {
    super();
    this.state = {
      Artists: Artists,
    };
  }
  // componentDidMount() {
  //   fetch("http://127.0.0.1:8080/Artistsdata.json")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ Artists: users }));
  // }
  render() {
    if (this.state.Artists.length === 0) return <h1>Loading...</h1>;

    return (
      <div className="Categories ">
        <RecentlyPlayedCards Artists={this.state.Artists} />
        <YourHeavyRotation Artists={this.state.Artists} />
        <NewReleasesForYou Artists={this.state.Artists} />
        <PopularPlaylists Artists={this.state.Artists} />
        <Chill Artists={this.state.Artists} />
        <Arab Artists={this.state.Artists} />
      </div>
    );
  }
}

export default HomeContent;
