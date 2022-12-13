import React from "react";
import "./News.css";
import img from "../../assets/imgs/nha_hat_tp.jpg";

function News({ isReverse }) {
  return (
    <div className={isReverse ? "news reverse" : "news"}>
      <img src={img} alt="Nha hat thanh pho" />
      <div className="news__des">
        <h3>Tổng quan về Nhà hát</h3>
        <p>
          Nhà hát Thành phố Hồ Chí Minh (gọi tắt là Nhà hát Thành phố HCM, Nhà
          hát TPHCM) là một trong những công trình lâu đời theo kiến trúc châu
          Âu tại Sài Gòn.Với 1800 ghế, không khí thoáng và hệ thống âm thanh,
          ánh sáng hiện đại, Nhà hát là nơi tổ chức các chương trình biểu diễn
          sân khấu chuyên nghiệp như kịch nói, cải lương, opera, múa bale,....{" "}
        </p>
      </div>
    </div>
  );
}

export default News;
