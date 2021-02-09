import React from "react";
import { Link } from "react-router-dom";
import "./SingleOffer.css";

const SingleOffer = ({ service }) => {
  const { id, img, title, excerpt } = service;
  return (
    <div className="col-md-4">
      <div className="serviceSection m-2">
        <div className="thumb">
          <div className="thumb-inner">
            <img className="img-fullWidth image-fluid w-100" src={img} alt="" />
          </div>
        </div>
        <div className="detailsSection p-3">
          <div className="symbol-icon"></div>
          <h4 className="title">{title} </h4>
          <div className="excerpt">{excerpt} </div>
          <div className="mt-4">
            <Link to="/">
              <button className="glow-on-hover">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOffer;
