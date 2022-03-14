import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "./Footer";
import AOS from "aos";

function Contactus() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);
  return (
    <div>
      <div className="container bg_primary section_topj7 mb-5 pt-5 pb-5 py-md-5 border_rad font_size ">
        <div className="row align-items-center px-md-3 font_mobile">
          <h1 className="text-center font_large">Contact us.</h1>
          <div className="col-md-8">
            <p className="mb-1">jesselloyd911@gmail.com</p>
            <p className="mb-1">cardano ecosystem Instagram</p>
            <p className="mb-4">
              https://www.instagram.com/invites/contact/?i=1sz5zf1wp84fb&utm_content=numj2yo
              Twitter https://twitter.com/Sonofabitcoin43 youtube TCS network -
              YouTube
            </p>
          </div>
          <div className="col-md-4">
            <img
              className="w-100"
              src="https://images.squarespace-cdn.com/content/v1/61f5c92f388acb6c7a70e9b5/ae338281-7d0f-4191-a8fa-b90f20eb32d5/image_6487327+%284%29.JPG?format=750w"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
