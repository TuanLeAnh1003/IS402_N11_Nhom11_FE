import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import ShowItem from './ShowItem';
import ShowImage from '../../assets/imgs/showImage.png'
import bg2 from "../../assets/imgs/bg2.jfif";
import bg3 from "../../assets/imgs/bg3.jfif";
import bg4 from "../../assets/imgs/bg4.jfif";
import bg5 from "../../assets/imgs/bg5.jfif";
import bg6 from "../../assets/imgs/bg6.jfif";
import Calendar from '../../assets/imgs/Calendar.png'
import './Show.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Show() {
    const showList = [
        {
            img: ShowImage,
            name: "Miền ký ức",
            time: "20:00",
            date: "13/11/2022"
        },
        {
            img: bg2,
            name: "Miền ký ức",
            time: "20:00",
            date: "13/11/2022"
        },
        {
            img: bg3,
            name: "Miền ký ức",
            time: "20:00",
            date: "13/11/2022"
        },
        {
            img: bg4,
            name: "Miền ký ức",
            time: "20:00",
            date: "13/11/2022"
        },
        {
            img: bg5,
            name: "Miền ký ức",
            time: "20:00",
            date: "13/11/2022"
        },
        {
            img: bg6,
            name: "Miền ký ức",
            time: "20:00",
            date: "13/11/2022"
        }
    ]

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <div>
            <div className="show__background" style={{ backgroundImage: `url('${ShowImage}')` }}>
                <div>
                    <div>
                        <h1>CHƯƠNG TRÌNH VÀ ĐẶT VÉ</h1>
                        <p>Nhà hát Thành phố Hồ Chí Minh là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh.</p>
                    </div>
                </div>
            </div>
            <div className="show__background-body">
                <div className="show__background-body--button">
                    <Button variant="primary">Tất cả</Button>
                    <Button variant="outline-primary">Giao hưởng</Button>
                    <Button variant="outline-primary">Ballet</Button>
                    <Button variant="outline-primary">Sự kiện</Button>
                    <Button variant="outline-primary">Kịch</Button>
                    <Button variant="outline-primary">Ca nhạc</Button>
                    <Button variant="outline-primary">Live show</Button>
                    <Button variant="outline-primary">Xiếc</Button>
                </div>
                <Row className="show__background-body-wrapper">
                    <Col xs={8} className="show__background-body-wrapper--left">
                        {
                            showList?.map((showItem, index) => (
                                <ShowItem
                                    key={index}
                                    img={showItem.img}
                                    name={showItem.name}
                                    time={showItem.time}
                                    date={showItem.date}
                                />
                            ))
                        }
                    </Col>
                    <Col xs={4} className="show__background-body-wrapper--right">
                        <img src={Calendar} alt="Calendar" />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Show