import React, { useEffect, useLayoutEffect, useState } from "react";
import SendMail from "./Components/SendMail";
import Skills from "./Pages/Skills";
import Mode from "./Components/Mode";
import UserCard from "./Pages/UserCard";
import LeftNav from "./Pages/LeftNav";
import Blogs from "./Pages/Blogs";
import Timeline from "./Pages/Timeline";

function App() {
  const [isDark, updateTheme] = useState(true);

  const toggleTheme = () => {
    updateTheme((isDark) => !isDark);
  };

  useLayoutEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <div className="topContainer">
        <div className="column topLeftContainer">
          <LeftNav />
        </div>
        <div className="column topRightContainer">
          <UserCard />
          <Skills />
          {/* <Timeline /> */}
          {/* <Blogs /> */}
        </div>
      </div>
      <Mode toggleTheme={toggleTheme} isDark={isDark} />
      <SendMail />
    </>
  );
}

export default App;
