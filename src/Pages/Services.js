import React, { Component } from "react";
import ParticleBG from "./ParticleBG";

export default class Services extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <ParticleBG />
        <div style={{ color: "white", backgroundColor: "green" }}>Services</div>
      </div>
    );
  }
}
