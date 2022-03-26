import React, { useEffect } from "react";
import "./WhitePaper.css";
import AOS from "aos";

function WhitePaper() {
  return (
    <div className="container px-md-5 bg_primary section_topj7 mb-5 py-3 py-md-5 border_rad ">
      <div className="row justify-content-lg-end">
        <div className="col-md-7"></div>
        <div className="col-md-3">
          <img
            data-aos="fade-left"
            className="w-100"
            src="assets/logo2.png"
            alt=""
          />
        </div>

        <a href="assets/Apocalypticats.pdf" className="btn_pdf">
          <button className="px-3"> Dowload White Paper</button>
        </a>

        <h1 className="heading_1 dsa">APOCALYPTICATS WHITEPAPER.</h1>
        <p className=" heading_2 my-3">1. WHO ARE THE APOCALYPTICATS?</p>
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
            2. WHAT IS OUR MISSION?
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

      <div className="row">
        <h1 className="heading_1 my-4 text-center border-top pt-5">
          WHAT UTILITIES?
        </h1>
        <div data-aos="fade-right" className="col-md-5 mj9n">
          <img className="w-100" src="assets/banner5.png" alt="" />
        </div>
        <div className="col-md-7 size ">
          <h1 data-aos="slide-right" className="heading_2 my-4 text-uppercase">
            1. Short strips / Lore.
          </h1>
          <p data-aos="zoom-in-left">
            We plan to connect the cardano ecosystem through our comic series,
            combining lore/communities featuring nft and metaverse projects and
            even peoples personal nfts,
          </p>
          <p data-aos="zoom-in-left">
            This utility is something thats fun and creative that gives our cats
            (and other featured projects) more character and more meaning, thus
            providing it with more value! the founder, being a huge fan of D&D
            literature and having experience working on a comic for a cronos nft
            project, were confident we have what it takes to deliver some badass
          </p>
        </div>
        <p data-aos="zoom-in-left" className="size pt-md-3 m-0">
          lore and include the community in steering the direction and starring
          in these short strips!!!.
        </p>

        <h1 data-aos="slide-right" className="heading_2 my-4 text-uppercase">
          2. building in a new world.
        </h1>
        <p data-aos="zoom-in-left" className="size">
          No, we dont plan on promising some apocalypticat metaworld but we can
          definatly develop in metaverses that already exist, as a project we
          value the communities input and will be making a metavault where the
          community will decide on what metaverses to invest and develop in with
          project funds for ALL verified holders through a voting system after
          mint.
        </p>
        <h1 data-aos="slide-right" className="heading_2 my-4 text-uppercase">
          3. Exclusive benefits.
        </h1>
        <p data-aos="zoom-in-left" className="size">
          there will be exclusive benifits for holders of Apocalypticats, we
          plan on creating Apocalypticat metaverse copatible assets inside of
          pavia and other metaverses giving exclusive acsess to Apocalypticat
          Holders!!!!.
        </p>

        <h1 data-aos="slide-right" className="heading_2 my-4 text-uppercase">
          4. rug pool!!.
        </h1>
        <p data-aos="zoom-in-left" className="size">
          We will allocate a huge 50% of royalties each quarter From the first
          og collection of 3333 Apocalypticats to help fight the war on rugs. We
          will call it the rug pool. At the end if each quarter, we discuss/vote
          as a community what were the top 3 biggest rugs of the quarter in The
          Cnft space.
        </p>
        <p data-aos="zoom-in-left" className="size">
          We will then take a snapshot at the end if the quarter. all wallets
          holding Apocalypticat nfts + any of the top 3 Rugs , will be counted
          in the rug-pools airdrop!
        </p>

        <p data-aos="zoom-in-left" className="size">
          A huge part of Apocalypticats mission is keeping the community
          prepared as much as possible 😼 <br></br> Each eligble wallet must
          include <br></br> 1 apocalypticats NFT + 1 Rugged NFT <br></br>Jesse
          <br></br>
          And then i need him to take off that were looking for people in the
          slideing text, were no longer looking for help, instead we can write
          what we are, <br />
        </p>
        <p data-aos="zoom-in-left" className="size">
          In that sliding text bar id like it to say <br />
        </p>
        <p data-aos="zoom-in-left" className="size">
          “The untold legend of 3333 Apocalypticats journey to the Cardano
          Blockchain”
        </p>
        <br />

        <h1 data-aos="slide-right" className="heading_2 my-4 text-uppercase">
          5. APOCALYPTIC MERCH.
        </h1>
        <p data-aos="zoom-in-left" className="size">
          We do plan on creating apocalypticat merchandise in the nearest
          future.
        </p>
        <h1 data-aos="slide-right" className="heading_2 my-4 text-uppercase">
          6. Collaborations.
        </h1>
        <p data-aos="zoom-in-left" className="size">
          There are many projects that we would love to collab with and partner
          with and for many different reasons weather its partnering for PFPs
          with metaverse projects,for our short strips and lore, or for
          giveaways and events we are confident we can make some great friends
          and powerful partnerships.
        </p>

        <h1 data-aos="slide-right" className="heading_2 my-4 text-uppercase">
          7. The Metavault.
        </h1>
        <p data-aos="zoom-in-left" className="size">
          The metavault is a community wallet we will use to vote on buying
          metaverse projects and developing inside of them and also on what to
          do with any tokens or ada we earn with the profits from flipping,
          royalties, associated, donations to the wallet and or any income
          earned through metaverse compattible assets.
        </p>

        <h1 className="heading_1 text-center border mt-md-4">
          Sonofabitcoin...
        </h1>
      </div>
    </div>
  );
}

export default WhitePaper;
