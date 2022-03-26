import React from "react";

function TeamCard({ img, description, name }) {
  return (
    <div className="col-12 col-sm-3 px-4 col-md-4 " data-aos="flip-up">
      <div className="grow">
        <div className=" p-2 bg_primary border_rad">
          <img className="w-100 mt-1 p-1 border_rad" src={img} alt="" />
          <h1 className="m-0 mt-3 mb-0 text-center my-1 color_extra">
            {description}
          </h1>
          <h1 className="text-center text-white m-0 mb-1 size_sah">{name}</h1>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
