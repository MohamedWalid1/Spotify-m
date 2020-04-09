import React, { Component } from "react";
import { About } from "./Biography";
class HomeContent extends Component {
  constructor() {
    super();
    this.state = {
      // data: false,
      About: About,
    };
  }
  // componentDidMount() {
  //   let url = "http://localhost:8080/about/1";
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp);
  //       this.setState({ data: resp });
  //     });
  //   });
  // }
  render() {
    const About = this.state.About[0];

    return About ? (
      <div
        style={{
          paddingTop: "30px",
          paddingLeft: "30px",
          backgroundColor: "black",
          height: "700px",
        }}
      >
        <h4
          style={{
            color: "white",
            float: "left",
          }}
        >
          Biography
        </h4>
        <p
          style={{
            color: "#B3B3B3",
            paddingRight: "110px",
            paddingTop: "50px",
            fontSize: "14px",
          }}
        >
          {About.about}
        </p>
      </div>
    ) : (
      <h1 style={{ color: "white" }}>Loading....</h1>
    );
  }
}

export default HomeContent;
