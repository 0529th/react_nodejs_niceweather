import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Carousel } from "react-bootstrap";

const Main = ({ goToProduct }) => {
  return (
    <div>
      <Header className="header" />
      <Carousel className="slider">
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://contents.sixshop.com/thumbnails/uploadedFiles/128335/default/image_1653290449719_2500.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://contents.sixshop.com/thumbnails/uploadedFiles/128335/default/image_1653290449719_2500.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://contents.sixshop.com/thumbnails/uploadedFiles/128335/default/image_1653290449719_2500.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="marquee">
        <span>YIN AND YANG</span>
        <span>YIN AND YANG</span>
        <span>YIN AND YANG</span>
        <span>YIN AND YANG</span>
        <span>YIN AND YANG</span>
        <span>YIN AND YANG</span>
        <span>YIN AND YANG</span>
        <span>YIN AND YANG</span>
        <span>YIN AND YANG</span>
        <span>YIN AND YANG</span>
        <span>YIN AND YANG</span>
        <span>YIN AND YANG</span>
        <span>YIN AND YANG</span>
      </div>
      <div className="box8" onClick={goToProduct}>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
      <div className="post1" onClick={goToProduct}></div>
      <div className="post2" onClick={goToProduct}></div>
      <Footer />
    </div>
  );
};

export default Main;
