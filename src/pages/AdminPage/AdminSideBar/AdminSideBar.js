import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './AdminSideBar.css';
import image from '../../../assets/imgs/showImage.png'

function AdminSideBar() {
  return (
    <div className="ad-sidebar">
      <div className="ad-sidebar__info">
        <img src={image} alt="img" />
      </div>

      <div className="ad-sidebar__items">
        <Link to="/admin">
          <FontAwesomeIcon icon={solid("id-card")} />
          <p>Tài khoản</p>
        </Link>
        <Link to="/admin/transaction">
          <FontAwesomeIcon icon={solid("folder-open")} />
          <p>Lịch sử</p>
        </Link>
      </div>
    </div>
  )
}

export default AdminSideBar