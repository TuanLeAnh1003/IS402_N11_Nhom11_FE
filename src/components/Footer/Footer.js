import React from "react";
import "./Footer.css";
import Logo from '../../assets/imgs/GISDATCH.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <img src={Logo} alt="Logo" />

      <p>
        Nhà hát Thành phố Hồ Chí Minh (thường được gọi ngắn gọn là Nhà hát Thành phố, tên chính thức là Nhà hát Giao hưởng - Nhạc, Vũ kịch Thành phố Hồ Chí Minh) là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh.
      </p>

      <ul className="footer__items">
        <Link to="/">Trang chủ</Link>
        <Link to="/map-screen">Bản Đồ 3D</Link>
        <Link to="/show">Chương Trình Biểu Diễn</Link>
        <Link to="/visit">Tham quan</Link>
        <Link to="/introduce">Giới Thiệu</Link>
        <Link to="/contact">Liên Hệ</Link>
      </ul>

      <p>Copyrights © All right Reserved By Nhom11 </p>
    </div>
  );
}

export default Footer;
