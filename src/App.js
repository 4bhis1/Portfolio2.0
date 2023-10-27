import "./App.css";
import Header from "./Pages/Header";
import Main from "./Pages/Main";
import Services from "./Pages/Services";

import View from "./Components/View";
import Social from "./Pages/Components/Social";
import SendMail from "./Pages/Components/SendMail";
import Footer from "./Pages/Footer";
import { isMobile } from "./Components/lib/Utils";
import Skills from "./Pages/Skills";
import Mode from "./Components/Mode";

const data = "./count.json";

function App() {
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
      <Mode />
      {/* <Footer /> */}
    </>
  );
}

export default App;
