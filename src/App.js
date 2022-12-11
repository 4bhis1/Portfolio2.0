import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header";
import Main from "./Pages/Main";
import Services from "./Pages/Services";

function App() {
  console.log("Nice");
  return (
    <>
      <Header />
      <Main />
      <Services />
      <div
        style={{
          backgroundColor: "ghostwhite",
          display: "flex",
          height: "100vh",
        }}
      ></div>
    </>
  );
}

export default App;
