import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "../../components/News/News";
import visitPic from "../../assets/imgs/Rectangle 1.png";
import img from "../../assets/imgs/nha_hat_tp.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])
  return (
    <div className="home">
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
            <h1>SAIGON OPERA HOUSE</h1>
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

      <News />

      <iframe
        width="100%"
        height="560"
        src="https://www.youtube.com/embed/89ea5VPCKm8"
      ></iframe>

      <h1>libero sed iaculis pellentesque</h1>
      <p>
        Quisque auctor est ac velit luctus fermentum. Nulla <br />
        condimentum, libero sed iaculis pellentesque, massa urna
        <br />
        mollis mauris, in egestas sem nisi ac arcu.{" "}
      </p>

      <div className="home__images">
        <div className="home__images-wrap">
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
        </div>
        <div className="home__images-line"></div>
        <div className="home__images-wrap">
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
        </div>
      </div>

      <div className="home__shows">
        <h2>Chương trình biểu diễn</h2>
        <p>
          Quisque auctor est ac velit luctus fermentum. Nulla condimentum,
          <br /> libero sed iaculis pellentesque, massa urna mollis mauris, in
          egestas sem
          <br /> nisi ac arcu.{" "}
        </p>

        <div className="home__shows-detail">
          {[0, 1, 2].map((_, i) => (
            <Card style={{ width: "30%" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>Miền Kí Ức</Card.Title>
                <Card.Text>
                  Lịch{"  "}20:00{"   "}13.30.2022
                </Card.Text>
                <Button variant="dark">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <div className="home__contact">
        <div className="home__contact-info">
          <h1>Liên hệ</h1>
          <p>
            Quisque auctor est ac velit luctus fermentum. Nulla
            <br /> condimentum, libero sed iaculis pellentesque.
          </p>
          <p>
            <span>0838237419</span>
          </p>
          <p>
            <span>08. 3823 7419</span>
          </p>
          <p>
            <span>info@hbso.org.vn</span>
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2312403776427!2d106.80086541458994!3d10.870008892258094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1668313545740!5m2!1svi!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
