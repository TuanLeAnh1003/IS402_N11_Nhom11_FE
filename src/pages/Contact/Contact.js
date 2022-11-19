import React, { useEffect } from "react";
import "./Contact.css";
import Carousel from "react-bootstrap/Carousel";
import visitPic from "../../assets/imgs/Rectangle 1.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])
  return (
    <div className="contact">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={visitPic} alt="First slide" />
          <Carousel.Caption>
            <h1>SAIGON OPERA HOUSE</h1>
            <p>
              In hac habitasse platea dictumst. Morbi ornare metus ex, viverra{" "}
              <br />
              sollicitudin ex gravida et. Mauris aliquet vel nisl et efficitur.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={visitPic} alt="Second slide" />
          <Carousel.Caption>
            <h1>LIÊN HỆ VỚI NHÀ HÁT</h1>
            <p>
              In hac habitasse platea dictumst. Morbi ornare metus ex, viverra{" "}
              <br />
              sollicitudin ex gravida et. Mauris aliquet vel nisl et efficitur.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={visitPic} alt="Third slide" />
          <Carousel.Caption>
            <h1>SAIGON OPERA HOUSE</h1>
            <p>
              In hac habitasse platea dictumst. Morbi ornare metus ex, viverra{" "}
              <br />
              sollicitudin ex gravida et. Mauris aliquet vel nisl et efficitur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="contact__details">
        <div className="contact__details-info">
          <h1>Thông Tin Liên Hệ</h1>
          <p>
            Quisque auctor est ac velit luctus fermentum. Nulla condimentum,
            libero sed iaculis pellentesque.
          </p>
          <p>Số 7 Công Trường Lam Sơn, P. Bến Nghé, Quận 1, Tp. HCM</p>
          <p>0838237419</p>
          <p>08. 3823 7419</p>
          <p>hbsg.org.vn</p>
        </div>

        <div className="contact__details-inputs">
          <h1>Phản Hồi</h1>
          <p>
            Giúp chúng tôi cải thiện tốt hơn về chất lượng Chương trình, Tổ chức
            và Dịch vụ.
          </p>
          <div className="contact__details-input-row">
            <input type="text" placeholder="Họ" />
            <input type="text" placeholder="Tên" />
          </div>
          <div className="contact__details-input-row">
            <input type="text" placeholder="Số Điện Thoại" />
            <input type="text" placeholder="Email" />
          </div>
          <textarea name="content" placeholder="Nội dung">
            Nội dung
          </textarea>
          <br />
          <button>Gửi</button>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2312403776427!2d106.80086541458994!3d10.870008892258094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1668313545740!5m2!1svi!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Contact;
