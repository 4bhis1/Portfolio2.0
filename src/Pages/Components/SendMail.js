import View from "../../Components/View";
import { HiMail } from "react-icons/hi";

const SendMail = () => {
  return (
    <View
      style={{
        position: "fixed",
        bottom: 0,
        right: 50,
        // alignItems: "center",
        // paddingHorizontal: 10,
        // paddingVertical: 5,
        backgroundColor: "darkBlack",
        cursor: "pointer",
        width: 250,
        overflow: "hidden",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 35,
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
  );
};

export default SendMail;
