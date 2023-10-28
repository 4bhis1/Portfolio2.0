import React, { useEffect, useState } from "react";
import SendMail from "./Components/SendMail";
import Skills from "./Pages/Skills";
import Mode from "./Components/Mode";

function App() {
  const [isDark, updateTheme] = useState(true);

  const toggleTheme = () => {
    updateTheme((isDark) => !isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      console.log(">>> here")
      document.body.classList.remove("light");
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
