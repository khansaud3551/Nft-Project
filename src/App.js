import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";
import NftsCards from "./components/NftsCards";
import RoadMap from "./components/RoadMap";
import TeamMembers from "./components/TeamMembers";
import Header from "./Header";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

let firstRender = true;

function App() {
  return (
    <>
      <div className="App">
        <div className="social__icons" data-aos="slide-down">
          <a href="https://discord.gg/dtMFHdbKBe" target="_blank">
            <i className="bi bi-discord font_size" />
          </a>
          <a href="https://www.facebook.com/jesse.lloyd.948" target="_blank">
            <i className="bi bi-facebook font_size" />
          </a>
          <a href="https://twitter.com/Sonofabitcoin43" target="_blank">
            <i className="bi bi-twitter font_size" />
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?i=1sz5zf1wp84fb&amp;utm_content=numj2yo"
            target="_blank"
          >
            <i className="bi bi-instagram font_size" />
          </a>
        </div>

        <Banner />
        <Marquetag />

        <NftsCards />
        <Card />
        <RoadMap />
        <TeamMembers />
      </div>
    </>
  );
}

export default App;

function Marquetag() {
  return (
    <>
      <marquee
        className="container-fluid d-flex align-items-center bg_primary font_size section_gap mt-0"
        width="60%"
        direction="right"
        height="50px"
        style={{ padding: "30px 0px" }}
      >
        The untold legend of 3333 apocalypticats journey to the cardano
        blockchain.
      </marquee>
    </>
  );
}
