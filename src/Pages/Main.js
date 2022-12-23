import React, { Component } from "react";

// import Color from "../Theme/Theme";
import kl from "../Image/kl.jpeg";
import View from "../Components/View";
import { isMobile } from "../Components/lib/Utils";

import Abhishek_Kumar from "../Image/AbhishekKumar.jpeg";

import { FaCloudDownloadAlt } from "react-icons/fa";

export class Main extends Component {
  render() {
    return (
      <View
        style={{
          height: "90vh",
          flexDirection: "column",
          backgroundColor: "blue",
        }}
      >
        {isMobile ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              flex: 1,
              padding : 50
            }}
          >
            <img
              src={Abhishek_Kumar}
              height={500 / 2}
              width={250}
              alt="Abhishek Kumar"
              style={{ borderRadius: 100 }}
            />
            <View style={{ marginTop: 20, color: "white" }}>
              Lorem Ipsum some random data aur ankit Lorem Ipsum some random
              data aur ankit Lorem Ipsum some random data aur ankit Lorem Ipsum
              some random data aur ankit{" "}
            </View>
            <View
              style={{
                // padding: 10,
                bgColor: "orange",
                marginTop: 30,
                borderRadius: 50,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <FaCloudDownloadAlt style={{ marginRight: 10 }} /> Resume
            </View>
          </View>
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
