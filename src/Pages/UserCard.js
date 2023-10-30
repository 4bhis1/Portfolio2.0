import React from "react";
import "./styles/userCard.css";
import MyImage from "../Image/AbhishekKumar.jpg";
import { AiFillLinkedin } from "react-icons/ai";

const UserCard = () => {
  return (
    <div className="userCardContainer">
      <div className="userPhotoName">
        <img className="userIcon" src={MyImage} />
        <div className="column">
          <div className="userName">@ Abhishek Kumar</div>
          <div className="userDesc">" The one who gets things done. "</div>
        </div>
      </div>
      <div className="connectLinkedin">
        <AiFillLinkedin style={{ height: 20, width: 20 }} />
        Connect on linkedin
      </div>
    </div>
  );
};

export default UserCard;
