import React from "react";

function TeamCard({ img, description }) {
  return (
    <div className="col-12 col-sm-3 px-4 col-md-4 " data-aos="flip-up">
      <div className="grow">
        <div className=" p-2 bg_primary border_rad">
          <img className="w-100 mt-1 p-1 border_rad" src={img} alt="" />
          <h1 className="m-0 mt-3 mb-2 text-center my-1 color_extra">
            {description}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
