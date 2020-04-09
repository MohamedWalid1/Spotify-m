import React from "react";
import "./ArtistPage.css";
import Follow from "./Follow";
import AlbumList from "./AlbumList";
import SongList from "./SongList";
import About from "./About";
import axios from "axios";
import Playbutton from "./PlayButton";

class ArtistPage extends React.Component {
  constructor() {
    super();
    this.state = {
      song: "",
      albums: [],
      songs: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ albums: users });
      });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ songs: users });
      });
  }

  onChange(e) {
    let files = e.target.files;
    //console.warn("FILE", files[0]);
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      console.warn("SONG DATA", e.target.result);
      const formData = { file: e.target.result };
      const URL = "http://localhost:8080/songs";
      axios
        .post(URL, formData)
        .then((response) => console.warn("RESULT", response));
    };
  }

  render() {
    const { albums, songs } = this.state;

    if (window.location.href === "http://localhost:3000/amr-diab/about") {
      return (
        <div className="ArtistPageLayout">
          <div className="Artist-profile">
            <h1 className="name">Amr Diab</h1>
            <ul className="buttons">
              <Playbutton />
              <Follow />
              <li
                className="pickFileButton"
                onClick={() => this.fileInput.click()}
              >
                <div onSubmit={this.onSubmit}>
                  <input
                    type="file"
                    name="song"
                    style={{ display: "none" }}
                    onChange={(e) => this.onChange(e)}
                    ref={(fileInput) => (this.fileInput = fileInput)}
                  />
                </div>
                Upload
              </li>
            </ul>
            <ul className="icons">
              <li>
                <a href="/amr-diab/overview" id="overview-icon">
                  Overview
                </a>
              </li>
              <li>
                <a href="/amr-diab/related-artists" id="relate-icon">
                  Related Artists
                </a>
              </li>
              <li>
                <a href="/amr-diab/about" id="about-icon">
                  About
                </a>
              </li>
            </ul>
          </div>
          <About />
        </div>
      );
    } else if (
      window.location.href === "http://localhost:3000/amr-diab/overview" ||
      window.location.href === "http://localhost:3000/amr-diab"
    ) {
      return (
        <div className="ArtistPageLayout">
          <div className="Artist-profile">
            <h1 className="name">Amr Diab</h1>
            <ul className="buttons">
              {/* <li id="play-btn">PLAY</li> */}
              <Playbutton />
              <Follow />
              <li
                className="pickFileButton"
                onClick={() => this.fileInput.click()}
              >
                <div onSubmit={this.onSubmit}>
                  <input
                    type="file"
                    name="song"
                    style={{ display: "none" }}
                    onChange={(e) => this.onChange(e)}
                    ref={(fileInput) => (this.fileInput = fileInput)}
                  />
                </div>
                Upload
              </li>
            </ul>
            <ul className="icons">
              <li>
                <a href="/amr-diab/overview" id="overview-icon">
                  Overview
                </a>
              </li>
              <li>
                <a href="/amr-diab/related-artists" id="relate-icon">
                  Related Artists
                </a>
              </li>
              <li>
                <a href="/amr-diab/about" id="about-icon">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <section class="artistMusic">
              <div class="contentSpacing">
                <section class="artistTopTracks">
                  <h1 class="popularHeader" dir="auto">
                    Popular
                  </h1>
                  <section class="trackListContainer trackListContainerBugHack fullWidth">
                    <ol class="tracklist">
                      <SongList songs={songs} />
                    </ol>
                  </section>
                </section>
              </div>
            </section>

            <section class=" artistAlbums">
              <div class="contentSpacing">
                <h1 class="albumsHeader" dir="auto">
                  Albums
                </h1>
                <div class="containerFluid containerFluid--noSpaceAround">
                  <div class="gridRow gridLimit row">
                    <AlbumList albums={albums} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    }
    if (
      window.location.href === "http://localhost:3000/amr-diab/related-artists"
    ) {
      return (
        <div className="ArtistPageLayout">
          <div className="Artist-profile">
            <h1 className="name">Amr Diab</h1>
            <ul className="buttons">
              <Playbutton />
              <Follow />
              <li
                className="pickFileButton"
                onClick={() => this.fileInput.click()}
              >
                <div onSubmit={this.onSubmit}>
                  <input
                    type="file"
                    name="song"
                    style={{ display: "none" }}
                    onChange={(e) => this.onChange(e)}
                    ref={(fileInput) => (this.fileInput = fileInput)}
                  />
                </div>
                Upload
              </li>
            </ul>
            <ul className="icons">
              <li>
                <a href="/amr-diab/overview" id="overview-icon">
                  Overview
                </a>
              </li>
              <li>
                <a href="/amr-diab/related-artists" id="relate-icon">
                  Related Artists
                </a>
              </li>
              <li>
                <a href="/amr-diab/about" id="about-icon">
                  About
                </a>
              </li>
            </ul>
          </div>
          <h1 style={{ color: "white" }}>HELLO ! Artist Page</h1>
        </div>
      );
    }
  }
}
export default ArtistPage;
