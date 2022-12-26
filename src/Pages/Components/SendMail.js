import View from "../../Components/View";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

import { ImCross } from "react-icons/im";
import { RiSendPlaneFill } from "react-icons/ri";
const SendMail = () => {
  const [showMail, updateShowMail] = useState(true);

  return (
    <View
      style={{
        position: "fixed",
        bottom: 0,
        right: 50,
        overflow: "hidden",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      }}
    >
      {showMail ? (
        <View
          style={{
            backgroundColor: "darkBlack",
            cursor: "pointer",
            width: 300,

            height: 35,
          }}
          onClick={() => {
            updateShowMail(false);
          }}
        >
          <View
            style={{
              padding: 5,
              backgroundColor: "black",
              marginRight: 10,
              paddingHorizontal: 10,
            }}
          >
            <HiMail
              height={30}
              width={30}
              style={{
                color: "white",
              }}
            />
          </View>
          <View style={{ fontSize: 16, color: "white", padding: 5 }}>
            Leave a Message
          </View>
        </View>
      ) : (
        <View
          style={{
            width: 300,
            height: 400,
            bgColor: "white",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              padding: 5,
              backgroundColor: "black",
              height: 20,
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <View style={{ fontSize: 14, color: "white" }}>Send Mail</View>
            <View
              onClick={() => {
                updateShowMail(true);
              }}
            >
              <ImCross
                style={{
                  color: "white",
                  cursor: "pointer",
                  height: 10,
                  width: 10,
                  paddingRight: 10,
                }}
              />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: 10,
            }}
          >
            <input type="text" placeholder="Write your email..." style={{paddingLeft : 10}}/>
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
          </View>
          <View style={{ justifyContent: "end", padding: 5 }}>
            <View
              style={{
                backgroundColor: "lightBlue",
                padding: 10,
                fontSize: 12,
                borderRadius: 2,
                cursor: "pointer",
                marginRight: 10,
              }}
            >
              Send
              <RiSendPlaneFill style={{ marginLeft: 10 }} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default SendMail;
