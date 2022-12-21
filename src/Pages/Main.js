import React, { Component } from "react";

// import Color from "../Theme/Theme";
import kl from "../Image/kl.jpeg";
import View from "../Components/View";
import { isMobile } from "../Components/lib/Utils";

export class Main extends Component {
  render() {
    return (
      <View
        style={{
          height: "90vh",
          display: "block",
          backgroundColor : "blue"
        }}
      >
        {isMobile ? (
          <View>Hello</View>
        ) : (
          <>
            <img
              alt="myPho-jl"
              style={{ position: "absolute" }}
              src={kl}
              height="90%"
              width="100%"
            />

            <View
              style={{
                position: "absolute",
                width: "50%",
                top: 250,
                left: "20%",
                display: "block",
              }}
            >
              <View
                style={{
                  fontSize: 80,
                  width: "100%",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Interior In Your House
              </View>
              <View style={{ color: "white" }}>
                Lorem Ipsum some random data aur ankit{" "}
              </View>
              <View
                style={{
                  display: "flex",
                  padding: 30,
                  //   margin: 10,
                  backgroundColor: "orange",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  position: "absolute",
                  marginTop: 30,
                  color: "white",
                }}
              >
                Show More
              </View>
            </View>
          </>
        )}
      </View>
    );
  }
}

export default Main;
