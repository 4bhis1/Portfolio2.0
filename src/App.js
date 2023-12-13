import React, { useEffect, useLayoutEffect, useState } from "react";
import SendMail from "./Components/SendMail";
import Skills from "./Pages/Skills";
import Mode from "./Components/Mode";
import UserCard from "./Pages/UserCard";
import LeftNav from "./Pages/LeftNav";
import Blogs from "./Pages/Blogs";

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
        <LeftNav />
        <div className="column topRightContainer">
          <div className="topRightFirstContainer">
            <UserCard />
            <Skills />
            <Blogs />
          </div>
        </div>
      </div>
      <Mode toggleTheme={toggleTheme} isDark={isDark} />
      <SendMail />
    </>
  );
}

export default App;
