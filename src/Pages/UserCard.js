import React from "react";
import "./styles/userCard.css";
import MyImage from "../Asset/AbhishekKumar.jpg";
import Pdf from "../Asset/Resume.pdf";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillFilePdfFill } from "react-icons/bs";

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
      <div className="column" style={{ gap: 18 }}>
        <div
          className="connectLinkedin"
          onClick={() => {
            window.open("https://www.linkedin.com/in/4bhis1/", "_blank");
          }}
        >
          <AiFillLinkedin style={{ height: 20, width: 20 }} />
          Connect on linkedin
        </div>
        <div
          className="downloadResume"
          onClick={() => {
            fetch(Pdf)
              .then((response) => response.blob())
              .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement("a");
                link.href = url;
                link.download = "Abhishek'sResume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
              });
          }}
        >
          <BsFillFilePdfFill style={{ height: 20, width: 20 }} />
          Download Resume
        </div>
      </div>
    </div>
  );
};

export default UserCard;
