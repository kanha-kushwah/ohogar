import React, { useState } from "react";
import PointsOfInterest from "./MapPoint";
import dynamic from "next/dynamic";
import Image from "next/image";

const Map = dynamic(() => import("./Map"), { ssr: false });

const pointsOfInterest = [
  { name: "Schools", position: [22.7196, 75.8577] },
  { name: "Healthcare", position: [22.7206, 75.8577] },
  { name: "Commute", position: [22.7216, 75.8577] },
  { name: "Food", position: [22.7226, 75.8577] },
  { name: "Shopping", position: [22.7236, 75.8577] },
  { name: "Parks", position: [22.7246, 75.8577] },
  { name: "Banks", position: [22.7256, 75.8577] },
  { name: "Cinemas", position: [22.7266, 75.8577] },
];

const Viewmap = () => {
  const [selectedPOI, setSelectedPOI] = useState(null);

  const handlePOIClick = (poiName) => {
    const poi = pointsOfInterest.find((p) => p.name === poiName);
    if (poi) {
      setSelectedPOI(poi);
    }
  };

  return (
    <div>
      <section id="map-view">
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pt-0">
          <h6 className="big-heading text-black">
            Explore Neighbourhood - Map View
          </h6>
        </div>

        <Map selectedPOI={selectedPOI} setSelectedPOI={setSelectedPOI} />
        <PointsOfInterest onPOIClick={handlePOIClick} />

        <div className="d-flex  justify-content-between align-items-center pb-2 pt-0">
          <div>
            <h6 className="big-heading text-black mb-0">
              Explore Neighbourhood - Map View
            </h6>
            <p className="black-off p-heading line-h-26 m-0">Locality Guide</p>
          </div>

          <div className="share text-end">
            <button>share</button>
          </div>
        </div>

        <div className="guide">
          <Image
            src="/img/single/guide.svg"
            alt="img"
            width={100}
            height={100}
            style={{ width: "100%", height: "100%" }}
          />

          <div className="flex-wrap d-flex items-center justify-content-between g-20  ">
            <div className="appart-inner">
              <b>21</b> <p>Societies</p>{" "}
            </div>
            <div className="appart-inner">
              <b>21</b> <p>Apartments</p>{" "}
            </div>
            <div className="appart-inner">
              <b>21</b> <p>Owner Properties</p>{" "}
            </div>
          </div>
        </div>

        <p className="black-off p-heading line-h-26 mt-3">
          Bairagarh Chichali is an upcoming locality in Bhopal. Located on the
          Kolar Road, the area is well connected to the adjoining places. Shri
          Ram Colony Railway Station is the nearest ...
        </p>

        <div className="text-center">
          <p className="m-0 border-top pt-2 sub-heading blue">
            Know more about Kolar Road
          </p>
        </div>
      </section>
    </div>
  );
};

export default Viewmap;
