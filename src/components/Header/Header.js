import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom"
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import Logo from '../../assets/imgs/GISDATCH.png'

function Header() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const isLoginLS = localStorage.getItem('isLogin')

  const navigate = useNavigate()

  const handleOpenLogin = () => {
    setShowSignup(false)
    setShowLogin(true)
  }

  const handleOpenSignup = () => {
    setShowLogin(false)
    setShowSignup(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('isLogin')
    setIsLogin(false)
  }

  useEffect(() => {
    if (isLoginLS) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [isLoginLS])

  return (
    <div className="header-bg">
      <div className="header">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>

        <ul className="header__items">
          <Link to="/">Trang chủ</Link>
          <Link to="/map-screen">Bản Đồ 3D</Link>
          <Link to="/show">Chương Trình Biểu Diễn</Link>
          <Link to="/visit">Tham quan</Link>
          <Link to="/introduce">Giới Thiệu</Link>
          <Link to="/contact">Liên Hệ</Link>
          {
            isLogin ?
              <div>
                <button onClick={() => navigate('/admin')}>Vào trang admin</button>
                <button onClick={handleLogout}>Đăng xuất</button>
              </div>
              :
              <div>
                <button onClick={handleOpenLogin}>Đăng Nhập</button>
                <button onClick={handleOpenSignup}>Đăng Ký</button>
              </div>
          }
        </ul>
      </div>
      {
        showLogin &&
        <Login setShowLogin={setShowLogin} handleOpenSignup={handleOpenSignup} setIsLogin={setIsLogin} />
      }
      {
        showSignup &&
        <Signup setShowSignup={setShowSignup} handleOpenLogin={handleOpenLogin} />
      }
    </div>
  );
}

export default Header;
