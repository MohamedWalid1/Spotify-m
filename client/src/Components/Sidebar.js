import React from "react";
import "./Sidebar.css";

class Sidebar extends React.Component {
  render() {
    if (window.location.href === "http://localhost:3000/login") {
      return (
        <div className="side">
          <a href="/Home">
            <img
              className="logo"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
              alt="logo"
              width="auto"
              height="40"
            />
          </a>
          <a href="/" id="home-icon" className="fas fa-home">
            Home
          </a>
          <a href="/" id="search-icon" className="fas fa-search">
            Search
          </a>
          <a href="/" id="lib-icon" className="fas">
            &#xf025; Your Library
          </a>
        </div>
      );
    }
    return (
      <div className="side">
        <a href="/Home">
          <img
            className="logo"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="logo"
            width="auto"
            height="40"
          />
        </a>
        <a href="/Home" id="home-icon" className="fas fa-home">
          Home
        </a>
        <a href="/search" id="search-icon" className="fas fa-search">
          Search
        </a>
        <a href="/collection/playlists" id="lib-icon" className="fas">
          &#xf025; Your Library
        </a>
        <h6 className="text">PLAYLISTS</h6>
        <a
          href="/create"
          id="create-icon"
          className="fas fa-plus"
          data-toggle="modal"
          data-target="#myModal"
        >
          Create Playlist
        </a>
        <a href="/collection/tracks" id="liked-icon" className="fas fa-heart">
          Liked Songs
        </a>
        <div className="createPlaylist-page">
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div
                className="modal-content"
                style={{ background: "rgb(50,50,50)" }}
              >
                <div className="modal-header">
                  <h4 className="modal-title" style={{ color: "white" }}>
                    Create Playlist Demo " Will be updated next phases"
                  </h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label for="usr">
                      Create Playlist: "Demo in this phase"
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="usr"
                    ></input>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
