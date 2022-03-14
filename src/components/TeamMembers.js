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
        <div className="row gy-5">
          <TeamCard img="assets/nfts/1.png" description="Founder" />

          <TeamCard img="assets/nfts/2.png" description="Advisor" />

          <TeamCard img="assets/nfts/3.png" description="Artist" />

          <TeamCard img="assets/nfts/1.png" description="Advisor" />

          <TeamCard img="assets/nfts/2.png" description="Advisor" />

          <TeamCard img="assets/nfts/3.png" description="Advisor" />
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
