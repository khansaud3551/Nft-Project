import React, { useEffect, useState } from "react";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import TeamMembers from "./components/TeamMembers";
import Header from "./Header";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import { SpinnerDotted } from "spinners-react";
import AOS from "aos";
import WhitePaper from "./components/WhitePaper";
import Footer from "./components/Footer";

function Main() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: true,
    });

    setLoader(true);
    setTimeout(() => {
      console.log("loader");
      setLoader(false);
    }, 6000);
  }, []);

  return (
    <>
      {loader ? (
        <div className="loader">
          <img className="img_loader" src="/assets/load.png" alt="" />
          <SpinnerDotted
            className="margin_h7"
            thickness={100}
            size={150}
            color={"#f7962d"}
            loading="true"
          />
        </div>
      ) : (
        <>
          <div className="Main">
            <Header />

            <Routes>
              <Route path="/about" element={<Aboutus />}></Route>
              <Route path="/" element={<App />}></Route>
              <Route path="/contact" element={<Contactus />}></Route>
              <Route path="/whitepaper" element={<WhitePaper />}></Route>
            </Routes>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default Main;
