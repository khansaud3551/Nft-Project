import React from "react";
import { Timeline, Event } from "react-timeline-scribble";

function RoadMap() {
  return (
    <div
      className="container  test section_gap  py-4 "
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="row bg_primary border_rad shadow1 py-md-4">
        <h1 className="font_siz8hj text-center my-3">ROADMAP</h1>
        <Timeline>
          <Event className="p-3" interval={"Phase I"} title={"Q1"}>
            <ol className="margin_le32h">
              <li>LAUNCH TWITTER/DISCORD</li>
              <li>GROW OUR COMMUNITY </li>
              <li>START TO BUILD UP OUR METAVAULT</li>
              <li>LAUNCH WEBSITE</li>
            </ol>
            <h1 className="font_ssa7">Q2</h1>
            <ol className="margin_le32h">
              <li>SHORT STRIP PREVIEW</li>
              <li>NETWORK AND COLLABORATE</li>
              <li>MINT 3333 APOCALYPTICATS</li>
              <li>RELEASE MERCH</li>
            </ol>
            <h1 className="font_ssa7">Q3</h1>
            <ol className="margin_le32h">
              <li>COMIC STRIP RELEASE</li>
              <li>????????</li>
              <li>????????</li>
              <li>????????</li>
            </ol>
          </Event>
          <Event interval={"Phase II"} title={"Q1"}>
            <h1 className="font_ssa7"> Coming Soon ...</h1>
          </Event>
          {/* <Event interval={"Phase II"} title={"Q1"} subtitle={"OPENING"}>
          <h1 className="font_ssa7"> Coming Soon ...</h1>
        </Event> */}
        </Timeline>
      </div>
    </div>
  );
}

export default RoadMap;
