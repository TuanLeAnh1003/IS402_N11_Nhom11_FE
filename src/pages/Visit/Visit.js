import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import visitPic from "../../assets/imgs/Rectangle 1.png";
import bg4 from "../../assets/imgs/bg4.jfif";
import bg5 from "../../assets/imgs/bg5.jfif";
import bg6 from "../../assets/imgs/bg6.jfif";
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
          <img className="d-block w-100" src={bg4} alt="First slide" />
          <Carousel.Caption>
            <h1>SAIGON OPERA HOUSE</h1>
            <p>
              Nhà hát Thành phố Hồ Chí Minh (thường được gọi ngắn gọn là Nhà hát Thành phố, tên chính thức là Nhà hát Giao hưởng - Nhạc, Vũ kịch Thành phố Hồ Chí Minh) là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={bg5} alt="Second slide" />
          <Carousel.Caption>
            <h1>SAIGON OPERA HOUSE</h1>
            <p>
              Nhà hát Thành phố Hồ Chí Minh (thường được gọi ngắn gọn là Nhà hát Thành phố, tên chính thức là Nhà hát Giao hưởng - Nhạc, Vũ kịch Thành phố Hồ Chí Minh) là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bg6} alt="Third slide" />
          <Carousel.Caption>
            <h1>SAIGON OPERA HOUSE</h1>
            <p>
              Nhà hát Thành phố Hồ Chí Minh (thường được gọi ngắn gọn là Nhà hát Thành phố, tên chính thức là Nhà hát Giao hưởng - Nhạc, Vũ kịch Thành phố Hồ Chí Minh) là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh.
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
