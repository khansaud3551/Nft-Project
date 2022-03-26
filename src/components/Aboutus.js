import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "./Footer";
import AOS from "aos";

import "aos/dist/aos.css";

function Aboutus() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);
  return (
    <div>
      <div className="container bg_primary section_topj7 mb-5 py-3 py-md-5 border_rad sm_screengg">
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

        {/* //contact US */}

        <h1 className="text-center  font_large">Contact us.</h1>

        <div
          data-aos="zoom-in-up"
          className="row p-md-5 d-flex align-items-center  flex-column-reverse about_margim98"
        >
          <div className="col-md-8 font_size">
            <h1 data-aos="fade-right" className="">
              PROJECT FOUNDER
            </h1>
            <p data-aos="zoom-in-left" className="m-0 font_mobile">
              Founded by @sonofabitcoin an upcoming CNFT Content Creator and a
              Fellow Cardano and blockchain enthusiast in the space, ive been
              alongtime investor in cardano and have met so many great people,
              im proud to bring another badass CAT project with amazing art and
              great utility to the cardano ecosystem!
            </p>
            <div className="d-flex gap-3 my-3">
              <a href="https://discord.gg/dtMFHdbKBe" target="_blank">
                <i className="bi bi-discord font_size" />
              </a>
              <a
                href="https://www.facebook.com/jesse.lloyd.948"
                target="_blank"
              >
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
            <a
              className="font_mobile"
              href="mailto:khansaud150@gmail.com"
              target="_blank"
            >
              @jesselloyd911@gmail.com
            </a>
          </div>
          <div className="col-md-4 my-4 my-md-0 d-flex flex-column">
            <img
              className="w-100 mx-auto stylejk"
              src="assets/nfts/1.png"
              alt=""
            />
            <h1 className="text-center mt-3">FOUNDER</h1>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          className="row p-md-5 d-flex align-items-center  flex-column-reverse about_margim98"
        >
          <div className="col-md-8 font_size">
            <h1 data-aos="fade-right">Apocalypticat Artist</h1>
            <p data-aos="zoom-in-left" className="font_mobile">
              Haider Tufail is a 2D and 3D artist from Pakistan and is extremely
              talented and well versed in coding and game development. a cat of
              all trades
            </p>
          </div>
          <div className="col-md-4 my-4 my-md-0 d-flex flex-column">
            <img
              className="w-100 mx-auto stylejk"
              src="assets/nfts/3.png"
              alt=""
            />
            <h1 className="text-center mt-3">Artist</h1>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          className="row p-md-5 d-flex align-items-center  flex-column-reverse about_margim98"
        >
          <div className="col-md-8 font_size">
            <h1 data-aos="fade-right">Nonfungchedds</h1>
            <p data-aos="zoom-in-left" className="font_mobile">
              He is a cardano enthusiast with an expertise in marketing and is
              very active in the discord chat for any questions
            </p>
          </div>
          <div className="col-md-4 my-4 my-md-0 d-flex flex-column">
            <img
              className="w-100 mx-auto  stylejk"
              src="assets/nfts/2.png"
              alt=""
            />
            <h2 className="text-center font_mobile my-3">
              Marketing Advisor , Head Moderator
            </h2>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          className="row p-md-5 d-flex align-items-center  flex-column-reverse about_margim98"
        >
          <div className="col-md-8 font_size">
            <h1 data-aos="fade-right">ken007</h1>
            <p data-aos="zoom-in-left" className="font_mobile">
              Community Manager of Apocalypticats, Entrepreneur, Cardano fanboy,
              crypto and NFT enthusiast , Love to learn new things, currently
              modding for several Cardano NFT projects, Excited for the future
              of block chain tech and Cardano.
            </p>
          </div>
          <div className="col-md-4 my-4 my-md-0 d-flex flex-column">
            <img
              className="w-100 mx-auto stylejk"
              src="assets/nfts/5.png"
              alt=""
            />
            <h2 className="text-center font_mobile my-3">Community Manager</h2>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          className="row p-md-5 d-flex align-items-center flex-column-reverse about_margim98"
        >
          <div className="col-md-8 font_size">
            <h1 data-aos="fade-right">Web_Chief</h1>
            <p data-aos="zoom-in-left" className="font_mobile">
              Saud Khan is an expert web developer from pakistan specializing in
              building (and occassionally designing) exceptional digital
              experiences that lives on the internet.
            </p>
          </div>
          <div className="col-md-4 my-4 my-md-0 d-flex flex-column">
            <img
              className="w-100 mx-auto stylejk "
              src="assets/nfts/6.png"
              alt=""
            />
            <h2 className="text-center font_mobile my-3">
              Developer , Web Army
            </h2>
          </div>
        </div>

        <div
          data-aos="flip-left"
          className="row p-md-5 d-flex align-items-center  flex-column-reverse about_margim98"
        >
          <div className="col-md-12 font_size mb-3 mb-md-0 text-center">
            <p className="font_mobile">
              we are looking to onboard team members who have an interest in our
              project and goals! please dm me on discord or send me an email if
              you wanna apply your skills to be apart of the team! discord
              sonofabitcoin4380
            </p>
            <h1> jesselloyd911@gmail.com </h1>
            <h1>sonofabitcoin4380</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
