import React from "react";
import "./News.css";
import img from "../../assets/imgs/nha_hat_tp.jpg";

function News({ isReverse }) {
  return (
    <div className={isReverse ? "news reverse" : "news"}>
      <img src={img} alt="Nha hat thanh pho" />
      <div className="news__des">
        <h3>Nhà hát Thành phố Hồ Chí Minh</h3>
        <p>
        Nhà hát Thành phố Hồ Chí Minh (thường được gọi ngắn gọn là Nhà hát Thành phố, tên chính thức là Nhà hát Giao hưởng - Nhạc, Vũ kịch Thành phố Hồ Chí Minh) là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh.
        </p>
      </div>
    </div>
  );
}

export default News;
