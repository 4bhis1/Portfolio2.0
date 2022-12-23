import View from "../../Components/View";

import gmail from "../../Image/Social/gmail.png";
import github from "../../Image/Social/github.png";
import dev from "../../Image/Social/dev.png";
import linkedin from "../../Image/Social/linkedin.png";
import instagram from "../../Image/Social/instagram.png";

import { ImCross } from "react-icons/im";
import { useState } from "react";

const SocialMediaDialog = ({ updateShow, show }) => (
  <View
    style={{
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      backgroundColor: "#FFFFFFE6",
      // opacity: 0.7,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <View
        style={{
          position: "relative",
          justifyContent: "space-between",
          alignItems: "center",
          background:
            "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(32,30,30,1) 34%, rgba(59,54,54,1) 62%)",
          paddingHorizontal: 10,
          paddingVertical: 5,
          width: 120,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
      >
        <View>
          <img
            src={show.icon}
            height={15}
            width={15}
            style={{ marginRight: 10 }}
            alt="gmail"
          />
          <View style={{ color: "white", fontSize: 14 }}>{show.title}</View>
        </View>
        <View
          onClick={() => {
            updateShow((data) => !data.show);
          }}
        >
          <ImCross
            height={5}
            width={5}
            style={{
              color: "white",
              cursor: "pointer",
              height: 10,
              width: 10,
            }}
          />
        </View>
      </View>
      <iframe title="Gmail" src={show.links} height={500} width={400} />
    </View>
  </View>
);

const SocialIcons = ({ imageIcon, iconName, onClick }) => (
  <img
    alt={iconName}
    src={imageIcon}
    height={25}
    width={25}
    style={{ padding: 5, cursor: "pointer" }}
    onClick={onClick}
  />
);

const Social = () => {
  const [show, updateShow] = useState({ show: false });

  const data = [
    {
      name: "Gmail",
      icon: gmail,
      links: "https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4",
    },
    {
      name: "Github",
      icon: github,
      links: "https://github.com/4bhis1",
    },
    {
      name: "Dev",
      icon: dev,
      links: "https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4",
    },
    {
      name: "Linkedin",
      icon: linkedin,
      links: "https://www.linkedin.com/in/absk/",
    },
    {
      name: "Instagram",
      icon: instagram,
      links: "https://www.instagram.com/4bhis1/",
    },
  ];

  return (
    <View
      style={{
        position: "fixed",
        backgroundColor: "blue",
        flexDirection: "column",
        zIndex: 1000,
        left: -1,
        bottom: 40,
        paddingLeft: 5,
        paddingVertical: 5,
        color: "black",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        overflow: "hidden",
      }}
    >
      {show.show && <SocialMediaDialog show={show} updateShow={updateShow} />}
      {data.map(({ name, icon, links }, index) => (
        <SocialIcons
          imageIcon={icon}
          alt={name}
          key={index}
          onClick={() => {
            updateShow({
              show: true,
              title: name,
              icon: icon,
              links: links,
            });
          }}
        />
      ))}
    </View>
  );
};
export default Social;
