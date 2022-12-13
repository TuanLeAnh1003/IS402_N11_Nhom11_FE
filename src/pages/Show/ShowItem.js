import React from 'react'
import './Show.css'
import { Link } from 'react-router-dom'

function ShowItem({ img, name, time, date, key }) {
  return (
    <div key={key} className="showItem">
        <img src={img} alt="img" style={{ width: '60%' }}/>
        <h4>{name}</h4>
        <div>Lịch:   <span>{time}   {date}</span></div>
        <Link to='/ticket'>Đặt vé ngay</Link>
    </div>
  )
}

export default ShowItem