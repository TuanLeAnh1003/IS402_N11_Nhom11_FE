import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Signup.css'

function Signup({ setShowSignup, handleOpenLogin }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = () => {

    }

    return (
        <div className="signUpWrap" onClick={() => setShowSignup(false)}>
            <div className="signUp" onClick={e => e.stopPropagation()}>
                <div style={{ width: '50%' }}></div>
                <div className="signUp_form">
                    <FontAwesomeIcon icon={solid('circle-xmark')} onClick={() => setShowSignup(false)} /><br />
                    {/* <img src={Logo} alt="Logo" /> */}
                    <h1>ĐĂNG KÝ</h1>
                    <div className="signUp_form-name">
                        <input type="text" placeholder="Họ và tên" name="name" onChange={e => setName(e.target.value)} />
                    </div>
                    {/*<input type="date" name="dob" />*/}
                    <input type="email" placeholder="Email (*)" name="email" onChange={e => setEmail(e.target.value)} />
                    <input type="text" placeholder="Số điện thoại (*)" name="phone" onChange={e => setPhone(e.target.value)} />
                    <input type="password" placeholder="Mật khẩu (*)" name="password" onChange={e => setPassword(e.target.value)} />
                    <input type="password" placeholder="Nhập lại mật khẩu (*)" name="confirmPassword" onChange={e => setConfirmPassword(e.target.value)} />
                    <div className="signUp_check">
                        <input type="checkbox" name="remember" />
                        <label htmlFor="remember">Khách hành đồng ý với các <a href="#">điều khoản</a> thành viên của chúng tôi</label>
                    </div>
                    <button onClick={handleRegister}>Đăng ký</button>
                    <div className="signUp_toSignUp">
                        <span>Đã có tài khoản?</span>
                        <button onClick={handleOpenLogin}>Đăng nhập</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup