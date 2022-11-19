import React from 'react'
import icon from '../../../assets/imgs/trans_icon.png'
import './Transaction.css'

function Transaction() {
    const list = [
        {
            icon: icon,
            name: "Đêm nhạc Miền Cực Lạc",
            date: "08:23 - 28/06/2022",
            location: "Nhà hát Thành phố Hồ Chí Minh",
            price: "200.000đ"
        },
        {
            icon: icon,
            name: "Đêm nhạc Miền Cực Lạc",
            date: "08:23 - 28/06/2022",
            location: "Nhà hát Thành phố Hồ Chí Minh",
            price: "200.000đ"
        },
        {
            icon: icon,
            name: "Đêm nhạc Miền Cực Lạc",
            date: "08:23 - 28/06/2022",
            location: "Nhà hát Thành phố Hồ Chí Minh",
            price: "200.000đ"
        },
        {
            icon: icon,
            name: "Đêm nhạc Miền Cực Lạc",
            date: "08:23 - 28/06/2022",
            location: "Nhà hát Thành phố Hồ Chí Minh",
            price: "200.000đ"
        },
        {
            icon: icon,
            name: "Đêm nhạc Miền Cực Lạc",
            date: "08:23 - 28/06/2022",
            location: "Nhà hát Thành phố Hồ Chí Minh",
            price: "200.000đ"
        },
        {
            icon: icon,
            name: "Đêm nhạc Miền Cực Lạc",
            date: "08:23 - 28/06/2022",
            location: "Nhà hát Thành phố Hồ Chí Minh",
            price: "200.000đ"
        }
    ]
  return (
    <div className="trans">
        <h1>LỊCH SỬ GIAO DỊCH</h1>
        <div>
            {
                list.map((item, index) => (
                    <div key={index} className="trans__item">
                        <img src={item.icon} alt="icon" />
                        <div>
                            <h4>{item.name}</h4>
                            <p>{item.date}</p>
                            <p>{item.location}</p>
                        </div>
                        <span>
                            <p>{item.price}</p>
                        </span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Transaction