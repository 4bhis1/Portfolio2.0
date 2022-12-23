import React, { useState } from "react";
import { isMobile } from "../Components/lib/Utils";
import View from "../Components/View";
import { ImCross } from "react-icons/im";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

let nightMode = false;

const Navigation = ({ updateShow, navs, activeState, updateActiveState }) => (
  <View
    style={{
      ...(isMobile
        ? {
            position: "fixed",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            // bgColor: "green",
          }
        : {}),
    }}
    onClick={(e) => {
      if (isMobile) {
        console.log("pressed in the cover");
        updateShow(false);
        e.preventDefault();
      }
    }}
  >
    <View
      style={{
        ...(isMobile
          ? {
              flexDirection: "column",
              position: "absolute",
              right: 0,
              top: 0,
              left: 100,
              bottom: 0,
              backgroundColor: "green",
            }
          : {
              cursor: "pointer",
              padding: 10,
            }),
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {isMobile && (
        <View
          style={{
            justifyContent: "space-between",
            marginBottom: 20,
            padding: 10,
          }}
        >
          <View style={{ padding: 10 }}>
            {nightMode ? (
              <BsMoonFill style={{ height: 30, width: 30, color: "white" }} />
            ) : (
              <BsSunFill style={{ height: 30, width: 30, color: "white" }} />
            )}
          </View>
          <View
            onClick={() => {
              updateShow(false);
            }}
            style={{ alignItems: "center" }}
          >
            <ImCross
              style={{
                color: "white",
                cursor: "pointer",
                height: 20,
                width: 20,
              }}
            />
          </View>
        </View>
      )}
      {navs.map((value, index) => (
        <View
          key={index}
          style={{
            ...styles.navigationItem,
            ...(activeState === index && { bgColor: "orange" }),
          }}
          onClick={() => {
            updateActiveState(index);
          }}
        >
          {value.name}
        </View>
      ))}
      {!isMobile && (
        <View style={{ padding: 10, justifyContent: "center" }}>
          {nightMode ? (
            <BsMoonFill style={{ height: 30, width: 30, color: "white" }} />
          ) : (
            <BsSunFill style={{ height: 30, width: 30, color: "white" }} />
          )}
        </View>
      )}
    </View>
  </View>
);

const Header = () => {
  let [show, updateShow] = useState(false);
  let [activeState, updateActiveState] = useState(0);
  let navs = [
    { name: "Home", link: "" },
    { name: "Skills", link: "" },
    { name: "Projects", link: "" },
    { name: "Timeline", link: "" },
    { name: "Experience", link: "" },
    { name: "Contact Me", link: "" },
  ];

  return (
    <View
      style={{
        backgroundColor: "green",
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
        <>
          {show && (
            <Navigation
              updateShow={updateShow}
              navs={navs}
              activeState={activeState}
              updateActiveState={updateActiveState}
            />
          )}
          <View
            style={{
              padding: 10,
              cursor: "pointer",
              borderRadius: 5,
              borderColor: "black",
              borderStyle: "solid",
              borderWidth: 2,
            }}
            onClick={() => {
              updateShow(true);
            }}
          >
            <GiHamburgerMenu />
          </View>
        </>
      ) : (
        <View>
          <Navigation
            updateShow={updateShow}
            navs={navs}
            activeState={activeState}
            updateActiveState={updateActiveState}
          />
        </View>
      )}
    </View>
  );
};

export default Header;

let styles = {
  navigationItem: {
    padding: 10,
    cursor: "pointer",
    alignItems: "center",
  },
};
