import React from 'react'
import './Show.css'

function ShowItem({ img, name, time, date, key }) {
  return (
    <div key={key} className="showItem">
        <img src={img} alt="img" />
        <h4>{name}</h4>
        <div>Lịch:   <span>{time}   {date}</span></div>
        <button>Đặt vé ngay</button>
    </div>
  )
}

export default ShowItem