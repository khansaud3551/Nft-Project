import React from "react";
import "./NftCards.css";

function NftsCards() {
  return (
    <div className="container section_gap pb-5 pb-md-0 pt-1 pt-md-0">
      <div className="row justify-content-center gap_32 mt-5">
        <NftCard img="assets/nfts/4.png" animation="fade-right" />
        <NftCard img="assets/nfts/4.png" animation="fade-left" />
        <NftCard img="assets/nfts/4.png" animation="slide-left" />
        <NftCard img="assets/nfts/4.png" animation="slide-right" />
      </div>
    </div>
  );
}

export default NftsCards;

function NftCard({ img, animation }) {
  return (
    <>
      <div
        className="col-md-4  ms-3 me-3 bg_primary p-2 border_rad21 text-center style_328 d-flex justify-content-center"
        data-aos={animation}
      >
        <div className="bg-white p-1  border_rad21">
          <div className="position328 btn_hover1">
            <h3 className="m-0 ">Geneses Creepz</h3>
            <h4 className="m-0 ">Drop : Sold Out</h4>
          </div>
          <div className="col-12 border_rad21 py-5 px-3 bg_primary ">
            <img className="w-100 border_rad33 " src={img} alt="" />
            <h4 className="mb-0 mt-3">
              The OG Genesis Creepz. 800+ traits Min Yield 1500 $loomi/day
            </h4>
            <h3 className="m-0 mt-0">Mint: 0.069ETH</h3>
          </div>
          <div className="position_21">
            <h3 className="pos_h9 m-0 btn_hover1">BUY ON OPENSEA</h3>
            <svg
              width={248}
              height={60}
              viewBox="0 0 248 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.7"
                d="M3.59644 7.83708C2.99548 6.43486 4.02405 4.875 5.54962 4.875H243.671C245.155 4.875 246.182 6.35691 245.661 7.74614L237.076 30.6394C236.747 31.5166 236.747 32.4834 237.076 33.3606L245.661 56.2539C246.182 57.6431 245.155 59.125 243.671 59.125H5.54962C4.02405 59.125 2.99548 57.5651 3.59643 56.1629L13.2978 33.5264C13.7155 32.5517 13.7155 31.4483 13.2978 30.4736L3.59644 7.83708Z"
                fill="#291013"
                stroke="#f7962d"
                strokeWidth="1.75"
              />
              <path
                d="M3.19383 5.231C2.31008 3.16891 3.82267 0.875 6.06616 0.875H241.228C243.41 0.875 244.92 3.05429 244.154 5.09726L236.207 26.2883C235.794 27.3919 235.794 28.6081 236.207 29.7117L244.154 50.9027C244.92 52.9457 243.41 55.125 241.228 55.125H6.06617C3.82268 55.125 2.31008 52.8311 3.19383 50.769L12.129 29.9204C12.6545 28.6941 12.6545 27.3059 12.129 26.0796L3.19383 5.231Z"
                fill="#291013"
                stroke="#f7962d"
                strokeWidth="1.75"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
