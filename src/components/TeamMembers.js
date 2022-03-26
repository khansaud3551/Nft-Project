import React from "react";
import TeamCard from "./TeamCard";

function TeamMembers() {
  return (
    <div className="container-fluid padding_ex89 position-relative">
      <video
        autoPlay
        loop
        muted
        className="w-100 position_32b"
        style={{ height: "100%" }}
      >
        <source src="assets/vidoes/fire1.mp4" type="video/mp4" />
      </video>
      <div className="container section_gap">
        <div className="row gy-5 justify-content-center">
          <TeamCard
            name="Sonofabitcoin"
            img="assets/nfts/1.png"
            description="Founder"
          />

          <TeamCard
            name="Nonfungchedds"
            img="assets/nfts/2.png"
            description="Advisor"
          />

          <TeamCard
            name="Haider tufail"
            img="assets/nfts/3.png"
            description="Artist"
          />

          <TeamCard
            name="ken007"
            img="assets/nfts/5.png"
            description="Community Manager"
          />

          <TeamCard
            name="Saud Khan"
            img="assets/nfts/6.png"
            description="Developer"
          />

          {/* <TeamCard
            name="Nonfungchedds"
            img="assets/nfts/3.png"
            description="Advisor"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
