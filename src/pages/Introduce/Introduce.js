import React, { useState, useEffect } from "react";
import "./Introduce.css";

function Introduce() {
  const [content, setContent] = useState("history");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  const handleOnClick = (e) => {
    setContent(e.target.id);
    const clickedButton = document.getElementById(e.target.id);
    const otherButtons = document.querySelectorAll(".intro__nav > li");
    clickedButton.classList.add("onclick");
    Array.from(otherButtons).map((i) => {
      i.id !== e.target.id && i.classList.remove("onclick");
    });
  };

  const navigateIntro = () => {
    switch (content) {
      case "history":
        return (
          <div className="intro__content-history">
            <h1>LỊCH SỬ HOÀN THÀNH VÀ PHÁT TRIỂN</h1>
            {["1899", "1899", "1899"].map((_, i) => (
              <div key={i}>
                <p>NĂM {_}</p>
                <p>
                  Khu đất xây dựng Nhà Hát Lớn trước kia là một vùng đầm lầy
                  thuộc đất của hai làng Thạch Tần và Tây Luông thuộc Tổng Phúc
                  Lân Huyện Thọ Xương. Vào năm 1899 hội đồng thành phố nhóm họp
                  dưới quyền chủ tọa của Richard – là Công sứ Hà Nội đề nghị lên
                  tòan quyền Fourer cho xây Nhà Hát.
                </p>
              </div>
            ))}
          </div>
        );
      case "function":
        return (
          <div className="intro__content-function">
            <h1>CHỨC NĂNG VÀ NHIỆM VỤ</h1>

            <p>
              <b>1. Tên giao dịch quốc tế: </b> Saigon Opera House
            </p>

            <b>2. Chức năng, nhiệm vụ:</b>
            <p>
              Tổ chức các hoạt động văn hoá , nghệ thuật phục vụ nhiệm vụ chính
              trị, xã hội quan trọng của Đảng và Nhà nước.
              <br />
              Tổ chức các hoạt động văn hoá , nghệ thuật, hội nghị , hội thảo,
              họp báo chiêu đãi quốc gia và quốc tế theo kế hoạch của Bộ Văn hoá
              thể thao và du lịch.
              <br />
              Tổ chức các hoạt động văn hoá nghệ thuật chất lượng cao phù hợp
              với chức năng, nhiệm vụ.
              <br />
              Quan hệ và hợp tác với các tổ chức trong nước và quốc tế có liên
              quan để trao đổi nghiệp vụ và tổ chức các hoạt động văn hoá nghệ
              thuật theo sự phân công của Bộ và theo qui định của pháp luật.
              <br />
              Tổ chức các hoạt động dịch vụ phù hợp với chức năng và nhiệm vụ
              của Nhà Hát Lớn Hà nội và theo qui định của pháp luật.
            </p>
          </div>
        );
      case "regulations":
        return (
          <div className="intro__content-regulations">
            <h1>QUY ĐỊNH CHUNG</h1>
            <b>1. Quy định đối với khán giả:</b>
            <p>
              – Trang phục lịch sự khi vào nhà hát lớn.
              <br />
              – Vé không kèm trẻ em, chương trình không dành cho trẻ em dưới 6
              tuổi.
              <br />
              – Không hút thuốc lá, không mang quà bánh và kẹo cao su vào nhà
              hát lớn
              <br />
              – Không sử dụng điện thoại để ghi âm, ghi hình, quay phim khi chưa
              được sự đồng ý của ban quản lý.
              <br />
              – Yêu cầu chuyển điện thoại sang chế độ im lặng, hoặc rung khi
              chương trình bắt đầu biểu diễn.
              <br />
              – Sau khi chương trình biểu diễn mở màn 15 phút, nhà hát sẽ đóng
              cửa ra vào.
              <br />– Vui lòng giữ im lặng khi xem biểu diễn.
            </p>
            <b>2. Các biển báo hướng dẫn khán giả khi đến nhà hát:</b>
            <p>
              Phòng gửi đồ
              <br />
              Phòng y tế
              <br />
              <i>Xin chân thành cảm ơn!</i>
            </p>
          </div>
        );
      default:
        return;
    }
  };

  return (
    <div className="intro">
      <ul className="intro__nav">
        <li id="history" onClick={(e) => handleOnClick(e)}>
          LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN
        </li>
        <li id="function" onClick={(e) => handleOnClick(e)}>
          CHỨC NĂNG VÀ NHIỆM VỤ
        </li>
        <li id="regulations" onClick={(e) => handleOnClick(e)}>
          QUY ĐỊNH CHUNG
        </li>
      </ul>

      <div className="intro__content">{navigateIntro()}</div>
    </div>
  );
}

export default Introduce;
