import React, { Component } from "react";

import Color from "../Theme/Theme";

export default class Services extends Component {
  render() {
    return (
      <div style={{ height: "100vh", backgroundColor: Color.white }}>
        <div
          style={{
            backgroundColor: Color.white,
            display: "flex",
            justifyContent: "center",
            fontSize: 60,
            fontWeight: "bold",
            color: Color.black,
            padding: 40,
          }}
        >
          About Company
        </div>
        <div></div>
      </div>
    );
  }
}
