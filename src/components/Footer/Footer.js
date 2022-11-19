import React from "react";
import "./Footer.css";
import Logo from '../../assets/imgs/GISDATCH.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <img src={Logo} alt="Logo" />

      <p>
        In hac habitasse platea dictumst. Morbi ornare metus ex, viverra <br />
        sollicitudin ex gravida et. Mauris aliquet vel nisl et efficitur.{" "}
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
