import React from 'react';

import CarOne from "../../assets/car 1.svg"
import CarTwo from "../../assets/car 2.svg"
import CarThree from "../../assets/car 3.svg"
import CarFour from "../../assets/car 4.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./style.scss"


const Index = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide bg-black pt-5" bg-black>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active ">
            <img src={CarOne} className="d-block w-75 sliderPadding" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={CarTwo} className="d-block w-75  sliderPadding" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={CarThree} className="d-block w-75  sliderPadding" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={CarFour} className="d-block w-75  sliderPadding" alt="Slide 4" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Index;
