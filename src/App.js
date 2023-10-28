import React, { useEffect, useLayoutEffect, useState } from "react";
import SendMail from "./Components/SendMail";
import Skills from "./Pages/Skills";
import Mode from "./Components/Mode";

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
      {/* <Header />
      <Main />
      {/* <Services /> */}
      {/* {!isMobile && (
        // <>
        //   <Social />
        //   <SendMail />
        // </>
      )} */}
      <Skills />
      <Mode toggleTheme={toggleTheme} isDark={isDark} />
      <SendMail />
    </>
  );
}

export default App;
