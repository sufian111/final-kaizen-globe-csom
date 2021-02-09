import React from "react";
import slider1 from "../../../../Image/slider1.jpg";
import slider2 from "../../../../Image/silder5.png";
import slider3 from "../../../../Image/silder4.png";
import "./HeaderSlider.css";

const HeaderSlider = () => {
  return (
    <div className="mt-md-2 mt-5">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active sliderBG">
            <img
              class="d-block w-100 sliderImage"
              src={slider1}
              alt="First slide"
            ></img>
          </div>
          <div class="carousel-item sliderBG">
            <img
              class="d-block w-100 sliderImage"
              src={slider2}
              alt="Second slide"
            ></img>
          </div>
          <div class="carousel-item sliderBG">
            <img
              class="d-block w-100 sliderImage"
              src={slider3}
              alt="Third slide"
            ></img>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default HeaderSlider;
