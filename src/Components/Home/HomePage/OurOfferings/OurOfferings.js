import React from "react";
import { allServices } from "../../../../FakeData/AllServices";
import "./OurOfferings.css";
import SingleOffer from "./SingleOffer";

const OurOfferings = () => {
  const services = allServices;

  return (
    <div className="mt-5">
      <div className="container offerBg">
        <div className="title-wrapper text-center">
          <h2 className="title">Our Offerings</h2>
        </div>
        <div className="paragraphs-wrapper text-center">
          <p className="paragraph">Explore Our Completed Services!</p>
        </div>

        <div className="services row">
          {services.map((service) => (
            <SingleOffer service={service} key={service.id}></SingleOffer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurOfferings;
