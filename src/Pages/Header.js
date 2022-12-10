import React, { Component } from "react";

import Color from "../Theme/Theme";

export class Header extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: Color.white,
          color: Color.black,
          justifyContent: "space-between",
          alignItems: "center",
          //   padding: 10,
          paddingLeft: 100,
          paddingRight: 100,
          fontSize: 22,
          height: "10vh",
          position: "relative",
        }}
      >
        <div>Name</div>
        <div style={{ display: "flex", height: "-webkit-fill-available" }}>
          <div style={{ ...styles.navigationItem, backgroundColor: Color.orange }}>Main</div>
          <div style={{ ...styles.navigationItem }}>About</div>
          <div style={{ ...styles.navigationItem }}>Services</div>
          <div style={{ ...styles.navigationItem }}>News</div>
        </div>

        <div>Contact Number</div>
      </div>
    );
  }
}

export default Header;

let styles = {
  navigationItem: {
    // margin: 10,
    // height: 40,
    padding: 10,
    // position: "absolute",
    // alignItems: "",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
};
