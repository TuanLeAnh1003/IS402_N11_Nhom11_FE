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
          <p style={{ marginBottom: 0 }}>Tài khoản</p>
        </Link>
        <Link to="/admin/transaction">
          <FontAwesomeIcon icon={solid("folder-open")} />
          <p style={{ marginBottom: 0 }}>Lịch sử</p>
        </Link>
        <Link to="/admin/update-coordinates">
          <FontAwesomeIcon icon={solid("pen")} />
          <p style={{ marginBottom: 0 }}>Cập nhật tọa độ</p>
        </Link>
      </div>
    </div>
  )
}

export default AdminSideBar