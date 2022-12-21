import React from "react";
import { isMobile } from "../Components/lib/Utils";
import View from "../Components/View";

import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <View
      style={{
        display: "flex",
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: isMobile ? 10 : "2rem",
        fontSize: 18,
        height: "10vh",
        // position: "fixed",
        top: 0,
        zIndex: 9999,
        flex: 1,
      }}
    >
      <View style={{ fontWeight: "bold", fontSize: 40 }}>
        {/* <a href="https://4bhis1.github.io/portfolio/"> */}
        Portfo
        <span style={{ color: "crimson" }} id="lio">
          lio.
        </span>
        {/* </a> */}
      </View>
      {isMobile ? (
        <View
          style={{
            padding: 10,
            cursor: "pointer",
            borderRadius: 5,
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 2,
          }}
        >
          <GiHamburgerMenu />
        </View>
      ) : (
        <View>
          <View
            style={{
              ...styles.navigationItem,
              backgroundColor: "orange",
            }}
          >
            Home
          </View>
          <View style={{ ...styles.navigationItem }}>Skills</View>
          <View style={{ ...styles.navigationItem }}>Projects</View>
          <View style={{ ...styles.navigationItem }}>Timeline</View>
          <View style={{ ...styles.navigationItem }}>Experience</View>
          <View style={{ ...styles.navigationItem }}>Contact Me</View>
          <View style={{ padding: 10 }}>LM</View>
        </View>
      )}
    </View>
  );
};

export default Header;

let styles = {
  navigationItem: {
    padding: 10,
  },
};
