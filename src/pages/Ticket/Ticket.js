import React, { useEffect } from "react";
import "./Ticket.css";
import ticket from "../../assets/imgs/ticket.png";
import Swal from "sweetalert2";

function Ticket() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const validateInfo = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let phone = e.target.phone.value;
    let email = e.target.email.value;
    const form = document.querySelector("form");
    console.log(name, phone, email);
    if (name !== "" && email !== "" && phone !== "") {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Đặt vé thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Không thành công",
        text: "Có vẻ bạn chưa nhập đủ thông tin đặt vé!",
      });
    }
  };
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

      <form onSubmit={validateInfo} id="form-ticket" className="ticket__inputs">
        <input type="text" placeholder="Họ và tên" name="name" />
        <input type="text" placeholder="Số điện thoại" name="phone" />
        <input type="text" placeholder="Email" name="email" />
      </form>
      <input type="submit" form="form-ticket" value="Xác nhận" />
    </div>
  );
}

export default Ticket;
