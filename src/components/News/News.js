import React from "react";
import "./News.css";
import img from "../../assets/imgs/nha_hat_tp.jpg";

function News({ isReverse }) {
  return (
    <div className={isReverse ? "news reverse" : "news"}>
      <img src={img} alt="Nha hat thanh pho" />
      <div className="news__des">
        <h3>Libero sed iaculis pellentesque</h3>
        <p>
          Quisque auctor est ac velit luctus fermentum. Nulla condimentum,
          libero sed iaculis pellentesque, massa urna mollis mauris, in egestas
          sem nisi ac arcu. Nulla facilisi. In sit amet vehicula massa. Nulla
          facilisi. In sit amet vehicula massa. Nulla facilisi. In sit amet
          vehicula massa. Nulla facilisi. In sit amet vehicula massa. Nulla
          facilisi. In sit amet vehicula massa.{" "}
        </p>
      </div>
    </div>
  );
}

export default News;
