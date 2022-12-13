import React from "react";
import "./Show.css";
import { Link } from "react-router-dom";

function ShowItem({ img, name, time, date, key }) {
  return (
    <div key={key} className="showItem">
      <img src={img} alt="img" />
      <h4>{name}</h4>
      <div>
        Lịch:{" "}
        <span>
          {time} {date}
        </span>
      </div>
      <button>
        <Link to="/ticket" style={{ textDecoration: "none", color: "#fff" }}>
          Đặt vé ngay
        </Link>
      </button>
    </div>
  );
}

export default ShowItem;
