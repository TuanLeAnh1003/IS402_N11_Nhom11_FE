import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import visitPic from "../../assets/imgs/Rectangle 1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "../../components/News/News";
import "./Visit.css";
import { Link } from 'react-router-dom'

function Visit() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])
  return (
    <div className="visit">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={visitPic} alt="First slide" />
          <Carousel.Caption>
            <h1>SAIGON OPERA HOUSE</h1>
            <p>
              In hac habitasse platea dictumst. Morbi ornare metus ex, viverra{" "}
              <br />
              sollicitudin ex gravida et. Mauris aliquet vel nisl et efficitur.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={visitPic} alt="Second slide" />
          <Carousel.Caption>
            <h1>SAIGON OPERA HOUSE</h1>
            <p>
              In hac habitasse platea dictumst. Morbi ornare metus ex, viverra{" "}
              <br />
              sollicitudin ex gravida et. Mauris aliquet vel nisl et efficitur.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={visitPic} alt="Third slide" />
          <Carousel.Caption>
            <h1>SAIGON OPERA HOUSE</h1>
            <p>
              In hac habitasse platea dictumst. Morbi ornare metus ex, viverra{" "}
              <br />
              sollicitudin ex gravida et. Mauris aliquet vel nisl et efficitur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <News />
      <News isReverse />
      <News />
      <Link to="/map-screen">Xem bản đồ 3D</Link>
    </div>
  );
}

export default Visit;
