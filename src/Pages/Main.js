import React, { Component } from "react";

import Color from "../Theme/Theme";
import kl from "../Image/kl.jpeg";

export class Main extends Component {
  render() {
    return (
      <div style={{ backgroundColor: Color.white, height: "90vh" }}>
        <img style={{ position: "absolute" }} src={kl} height="90%" width="100%" />

        <div style={{ position: "absolute", color: Color.white, width: "50%", top: 250, left: "20%" }}>
          <div style={{ fontSize: 80, width: "100%", fontWeight: "bold" }}>Interior In Your House</div>
          <div>Lorem Ipsum some random data aur ankit </div>
          <div
            style={{
              display: "flex",
              padding: 30,
              //   margin: 10,
              backgroundColor: Color.orange,
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              position: "absolute",
              marginTop: 30,
            }}
          >
            Show More
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
