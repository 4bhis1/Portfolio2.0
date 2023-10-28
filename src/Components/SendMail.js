import React, { useState } from "react";
import "./styles/sendMail.css";
import { HiMail } from "react-icons/hi";

import { RiSendPlaneFill } from "react-icons/ri";

import { FiMaximize } from "react-icons/fi";
import { FaRegWindowMinimize } from "react-icons/fa";

const SendMailHeader = ({ toggleShowMail, showMail }) => {
  return (
    <div className="headerContainer">
      <div className="headerLeftIconContainer">
        <HiMail
          style={{
            color: "white",
            fontSize: 24,
          }}
        />
      </div>
      <div className="headerText">
        {!showMail ? "Leave a message" : "Send a message..."}
      </div>
      <div className="headerRightIconContainer" onClick={toggleShowMail}>
        {!showMail ? (
          <FiMaximize
            style={{
              fontSize: 20,
              color: "white",
            }}
          />
        ) : (
          <FaRegWindowMinimize
            style={{
              fontSize: 20,
              color: "white",
            }}
          />
        )}
      </div>
    </div>
  );
};

const SendMail = () => {
  const [showMail, updateShowMail] = useState(false);

  const toggleShowMail = () => {
    updateShowMail((show) => !show);
  };

  return (
    <div className="mailMainContainer">
      {!showMail ? (
        <SendMailHeader toggleShowMail={toggleShowMail} showMail={showMail} />
      ) : (
        <div className="sendMailContainer">
          <SendMailHeader toggleShowMail={toggleShowMail} showMail={showMail} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: 10,
            }}
          >
            <input
              type="text"
              placeholder="Write your email..."
              style={{ paddingLeft: 10 }}
            />
            <textarea
              placeholder="Content ..."
              style={{
                marginTop: 10,
                flex: 1,
                resize: "none",
                padding: 10,
                width: "auto",
              }}
            />
          </div>
          <div className="sendMailIconContainer">
            Send
            <RiSendPlaneFill style={{ marginLeft: 10 }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SendMail;
