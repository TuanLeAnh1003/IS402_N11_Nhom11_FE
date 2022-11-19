import React, { useEffect } from "react";
import "./Ticket.css";
import ticket from "../../assets/imgs/ticket.png";

function Ticket() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])
  return (
    <div className="ticket">
      <h2 className="ticket__title">
        CHƯƠNG TRÌNH HOÀ NHẠC -SUBSCRIPTION CONCERT VOL.147
      </h2>
      <p>
        <span>20:00</span>
        {"    "}
        <span>07.09.2022</span>
      </p>

      <img src={ticket} alt="ticket" />

      <h2 className="ticket__title">SELECT AND BOOK A TICKET</h2>
      <p>The number of seats you choose:</p>

      <h3>
        <b>Enter The Information</b>
      </h3>

      <div className="ticket__inputs">
        <input type="text" placeholder="Họ và tên" />
        <input type="text" placeholder="Số điện thoại" />
        <input type="text" placeholder="Email" />
      </div>
      <button>Xác nhận</button>
    </div>
  );
}

export default Ticket;
