import React, { useEffect } from "react";
import "./WhitePaper.css";
import AOS from "aos";

function WhitePaper() {
  return (
    <div className="container shadow1 px-md-5 bg_primary section_topj7 mb-5 py-3 py-md-5 border_rad ">
      <div className="row justify-content-lg-end px-md-5">
        <div className="col-md-7"></div>
        <div className="col-md-3">
          <img
            data-aos="fade-left"
            className="w-100"
            src="assets/logo2.png"
            alt=""
          />
        </div>

        <h1 className="heading_1 dsa">APOCALYPTICATS WHITEPAPER.</h1>
        <p className=" heading_2 my-3">1. WHO ARE THE APOCALYPTICATS ?</p>
        <p className="size">
          Apocalypticats are a finite collection of 3333 randomly generated cats
          on the Cardano blockchain.
        </p>
        <div className="col-md-5 size">
          <img
            data-aos="fade-right"
            className="w-100 p-5 m8h"
            src="assets/logo2.png"
            alt=""
          />
        </div>
        <div className="col-md-7 d-flex flex-column justify-content-center">
          <p data-aos="slide-right" className=" heading_2">
            2. WHAT IS OUR MISSION ?
          </p>
          <p data-aos="zoom-in-left" className="size ">
            Our mission is to prepare you for the apocalyptic times, CUSHION THE
            EFFECT OF RUG PULLS, organically grow our community through
            collaborations.
            <br />
            One other thing we intend to do with our story is to provide value
            to the Apocalypticats through unrivaled utilities.
            <br />
            We are also focused on building in the metaverse, we are one
            Apocalypticat family!! WAGMI!! .
          </p>
        </div>
      </div>

      <div className="row px-md-5">
        <h1
          style={{ fontSize: "50px" }}
          className="heading_1 my-4 text-center border-top pt-5"
        >
          UTILITIES?
        </h1>
        <div data-aos="fade-right" className="col-md-5 mj9n">
          <img className="w-100" src="assets/banner5.png" alt="" />
        </div>
        <div className="col-md-7 size ">
          <h1 data-aos="slide-right" className="heading_2 my-4 text-uppercase">
            1. THE RUG-POOL.
          </h1>
          <p data-aos="zoom-in-left">
            We are the FIRST CNFT project to provide a RUG POOL for rugpull
            victims.We will allocate 50% of our royalties each quarter from the
            first OG collection of 3333 Apocalypticats to help fight the war on
            rugs.
          </p>
          <p>It would be known as the RUG POOL .</p>
          <p>Here is what the process would look like.</p>
          <p data-aos="zoom-in-left">
            At the end of each quarter, all apolypticats will discuss/vote as a
            community and decide on the TOP 3 rugs in the CNFT space for that
            quarter.
          </p>
        </div>
        <p data-aos="zoom-in-left" className="size pt-md-3 m-0">
          Once the decision has been made, we would take a snapshot of all
          wallets holding Apocalypticats NFTs+ any of the top 3 Rugs , count and
          immediately add them to the beneficiaries of the RUG POOL airdrop.
          This would also be done at the end of that quarter.
        </p>
        <p data-aos="zoom-in-left" className="size pt-md-3 m-0">
          A huge part of Apocalypticats mission is keeping the community
          prepared as much as possible �
        </p>
        <p data-aos="zoom-in-left" className="size pt-md-3 m-0">
          P.S: Each eligible wallet must include 1 apocalypticats NFT + 1 Rugged
          NFT (Multiples don't mean anything extra) .
        </p>

        <h1 data-aos="slide-right" className="heading_2 my-4 text-uppercase">
          2. SHORT STRIPS/ LORE .
        </h1>
        <p data-aos="zoom-in-left" className="size">
          This utility is something that's fun and gives our cats character and
          more meaning, thus providing it with more value! The founder being a
          huge fan of D&D literature and having experienced working on a comic
          for a CRONOS NFT project, we are confident we have what it takes to
          deliver some badass lore and include the community in steering the
          direction while starring in these short strips!!! .
        </p>

        <h1 data-aos="slide-right" className="heading_2 my-4 text-uppercase">
          3. building in a new world.
        </h1>
        <p data-aos="zoom-in-left" className="size">
          Everyone out there is promising new "Metaverses". Not us, we plan to
          develop in metaverses that already exist. As a project, we value the
          community's input and we will be making a metavault where the
          community will decide on what metaverses to invest and develop in with
          project funds for ALL verified holders. Thi would be done through a
          voting system after mint.
        </p>

        <h1 data-aos="slide-right" className="heading_2 my-4 text-uppercase">
          4. RANK BENEFITS .
        </h1>
        <p data-aos="zoom-in-left" className="size">
          There will be exclusive benefits for holders of Apocalypticats, we
          plan on subdividing rooms inside of PCA s inside of pavia, a home
          compound/base constructed. Inside of that base will be Rooms each of
          the top 333 cats will be made a space(room) dedicated to them along
          with the founder! You don't need to own a pavia plot to have a place
          to lay your tail at night in pavia if you are an exclusive member of
          apocalypticats.
        </p>

        <h1 data-aos="slide-right" className="heading_2 my-4 text-uppercase">
          5. APOCALYPTIC MERCH .
        </h1>
        <p data-aos="zoom-in-left" className="size">
          We do plan on creating apocalypticat merchandise in the nearest
          future.
        </p>
        <h1
          style={{ fontSize: "50px" }}
          data-aos="slide-right"
          className="text-center my-5 text-uppercase"
        >
          Collaborations.
        </h1>
        <p data-aos="zoom-in-left" className="size text-center">
          There are many projects the cats would love to partner with for
          various reasons. We could be partnering for PFPs with metaverse
          projects for our short strips and lore. We could also be collaborating
          with other projects for giveaways and events. Whatever it is,
          apocalypticats are confident that we can make some great friends and
          powerful partnerships while we crawl around in this beautiful
          unraveling ecosysytem.
        </p>
        <p data-aos="zoom-in-left" className="size text-center">
          It's a bold new world for CNFT and I am sure W.A.G.M.I!
        </p>
        <p data-aos="zoom-in-left" className="size text-center">
          Purrrr!!!
        </p>

        <h1 className="heading_1  my-md-4 kl">Sonofabitcoin...</h1>
      </div>
    </div>
  );
}

export default WhitePaper;
