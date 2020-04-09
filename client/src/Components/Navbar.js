import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Avatar } from "antd";
import "./Navbar.css";
import "react-notifications-component/dist/theme.css";
import ReactNotification, { store } from "react-notifications-component";
import { Notification } from "./Notification";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      data: Notification,
    };
  }
  // componentDidMount() {
  //   let url = "http://localhost:8080/notification/1";
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       this.setState({ data: resp });
  //     });
  //   });
  // }

  handleNotification = () => {
    let data = this.state.data[0];
    store.addNotification({
      title: data.Header,
      message: data.message,
      type: "danger",
      container: "top-left",
      insert: "top",
      animationIN: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        showIcon: true,
      },
      width: 300,
    });
  };

  render() {
    let notification = this.state.data;
    if (window.location.href === "http://localhost:3000/search") {
      return (
        <div className="NavLayout">
          <div className="main-nav">
            <li>
              <a
                href="/Home"
                className="previous-btn prev"
                style={{ marginLeft: "35px" }}
              >
                &#8249;
              </a>
            </li>
            <li>
              <a href="/Home" className="next-btn next">
                &#8250;
              </a>
            </li>
            <li className="container h-100">
              <div className="d-flex justify-content-center h-100">
                <div className="searchbar">
                  <input
                    className="search_input"
                    type="text"
                    name=""
                    placeholder="Search for Artists, Songs, or Podcasts "
                  />
                  <i className="search_icon">
                    <i className="fas fa-search"></i>
                  </i>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown">
                <button className="dropbtn">
                  <Avatar src="./sultan.png" /> Username
                  <i className="fa fa-caret-down"></i>
                </button>
                <div id="myDropdown" className="dropdown-content">
                  <a href="/account">Account</a>
                  <a href="/login">Logout</a>
                </div>
              </div>
            </li>
          </div>
        </div>
      );
    }
    if (
      window.location.href === "http://localhost:3000/collection/playlists" ||
      window.location.href === "http://localhost:3000/collection/podcasts" ||
      window.location.href === "http://localhost:3000/collection/artists" ||
      window.location.href === "http://localhost:3000/collection/albums"  ||
      window.location.href === "http://localhost:3000/Recover"           ||
      window.location.href === "http://localhost:3000/AccountoverView"           ||
      window.location.href === "http://localhost:3000/EditProfile"           ||
      window.location.href === "http://localhost:3000/account"           
    ) {
      return (
        <div className="NavLayout">
          <ul className="main-nav">
            <li>
              <a href="/Home" className="previous-btn prev">
                &#8249;
              </a>
            </li>
            <li>
              <a href="/Home" className="next-btn next">
                &#8250;
              </a>

              <a href="/collection/playlists" id="playlist-icon">
                Playlists
              </a>
            </li>
            <li>
              <a href="/collection/podcasts" id="prodcast-icon">
                Podcasts
              </a>
            </li>
            <li>
              <a href="/collection/artists" id="artists-icon">
                Artists
              </a>
            </li>
            <li>
              <a href="/collection/albums" id="albums-icon">
                Albums
              </a>
            </li>

            <li>
              <ReactNotification />
              <button
                className="whatsNewNtn"
                onClick={this.handleNotification}
                style={{ float: "left" }}
              >
                {" "}
                whats New
                <span className="num">{notification[0].id}</span>
              </button>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown">
                <button className="dropbtn">
                  <Avatar src="./sultan.png" /> Username
                  <i className="fa fa-caret-down"></i>
                </button>
                <div id="myDropdown" className="dropdown-content">
                  <a href="/account">Account</a>
                  <a href="/login">Logout</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      );
    }

    if (window.location.href === "http://localhost:3000/login") {
      return (
        <div className="NavLayout">
          <ul className="main-nav">
            <li>
              <a href="/Home" className="previous-btn prev">
                &#8249;
              </a>
            </li>
            <li>
              <a href="/Home" className="next-btn next">
                &#8250;
              </a>
            </li>
            <li style={{ marginLeft: "auto", marginRight: "6px" }}>
              <a href="/signup" id="signUp-icon">
                SIGN UP
              </a>
            </li>
            <li style={{ marginRight: "16px" }}>
              <a href="/" id="login-icon">
                LOG IN
              </a>
            </li>
          </ul>
        </div>
      );
    }

    if (
      window.location.href === "http://localhost:3000/Home" ||
      window.location.href === "http://localhost:3000/amr-diab"
    ) {
      return (
        <div className="NavLayout">
          <ul className="main-nav">
            <li>
              <a href="/Home" className="previous-btn prev">
                &#8249;
              </a>
            </li>
            <li>
              <a href="/Home" className="next-btn next">
                &#8250;
              </a>
            </li>
            <li className="upgrade" style={{ marginRight: "0px" }}>
              <a href="/Premium" id="upgrade-icon">
                UPGRADE
              </a>
            </li>
            <li
              className="nav-item dropdown"
              style={{
                marginLeft: "16px",
              }}
            >
              <div className="dropdown">
                <button className="dropbtn">
                  <Avatar src="./sultan.png" /> Username
                  <i className="fa fa-caret-down"></i>
                </button>
                <div id="myDropdown" className="dropdown-content">
                  <a href="/account">Account</a>
                  <a href="/login">Logout</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      );
    }
    if (window.location.href === "http://localhost:3000/collection/tracks") {
      return (
        <div
          className="NavLayout"
          style={{
            backgroundColor: "transperent",
            backgroundBlendMode: "color",
          }}
        >
          <ul className="main-nav">
            <li>
              <a href="/Home" className="previous-btn prev">
                &#8249;
              </a>
            </li>
            <li>
              <a href="/Home" className="next-btn next">
                &#8250;
              </a>
            </li>
          </ul>
        </div>
      );
    }
    if (window.location.href === "http://localhost:3000/create") {
      return <div className="NavLayout" style={{ background: "white" }}></div>;
    } else {
      return <div></div>;
    }
  }
}
export default Navbar;
