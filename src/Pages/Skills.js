import React from "react";
import { isMobile } from "../Components/lib/Utils";
import View from "../Components/View";

import Cp from "../Image/Skills/c-.png";
import C from "../Image/Skills/c.png";
import CSS from "../Image/Skills/css-3.png";
import DSA from "../Image/Skills/DSA.png";
import HTML from "../Image/Skills/html-5.png";
import JS from "../Image/Skills/js.png";
import Mongo from "../Image/Skills/mongo.png";
import MySql from "../Image/Skills/mysql.png";
import Node from "../Image/Skills/node-js.png";
import Python from "../Image/Skills/python.png";
import Rect from "../Image/Skills/react.png";
import vue from "../Image/Skills/Vue.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

let SwiperComponent = () => (
  <View style={{ width: 100 }}>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  </View>
);

const Skills = () => {
  let data = [
    { icon: Cp, name: "C++" },
    { icon: C, name: "C" },
    { icon: CSS, name: "CSS" },
    { icon: DSA, name: "DSA" },
    { icon: HTML, name: "HTML" },
    { icon: JS, name: "JavaScript" },
    { icon: Mongo, name: "Mongo" },
    { icon: MySql, name: "MySql" },
    { icon: Node, name: "Node Js" },
    { icon: Python, name: "Python" },
    { icon: Rect, name: "React" },
    { icon: vue, name: "Vue" },
  ];

  return (
    <View
      style={{
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "lightOrange",
      }}
    >
      <View
        style={{
          fontSize: 38,
          color: "white",
          fontWeight: 700,
          paddingVertical: 10,
          paddingHorizontal: isMobile ? 10 : "2rem",
        }}
      >
        Skills
      </View>
      {/* <View style={{ justifyContent: "center", alignItems: "center" , paddingVertical : 10}}>
        RandomHeading
      </View> */}
      <View style={{ flex: 1 }}>
        {!isMobile && (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {/* <SwiperComponent /> */}
          </View>
        )}
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              flexWrap: "wrap",
              justifyContent: "center",
              // bgColor: "blue",
              gap: 30,
              columnGap: 30,
              padding: 40,
            }}
          >
            {data.map(({ icon, name }, index) => (
              <SkillIconsAndNames icon={icon} name={name} key={index} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const SkillIconsAndNames = ({ icon, name }) => (
  <View
    style={{
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      // bgColor: "blue",
    }}
  >
    <img
      src={icon}
      alt={name}
      height={isMobile ? 50 : 80}
      width={isMobile ? 50 : 80}
    />
    <View
      style={{ color: "white", fontSize: 22, marginTop: 10, fontWeight: 700 }}
    >
      {name}
    </View>
  </View>
);

export default Skills;
