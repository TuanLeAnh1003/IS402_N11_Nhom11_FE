import React, { useState, useEffect } from 'react'
import './UpdateCoordinates.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

function UpdateCoordinates() {
  const [confirmed, setConfirmed] = useState(false)
  const [layer, setLayer] = useState()
  const [object, setObject] = useState()
  const [selectedLine, setSelectedLine] = useState()
  const [selectedCylinder, setSelectedCylinder] = useState()

  const handleClickConfirm = () => {
    if (object && layer) {
      setConfirmed(true)
      // setConfirmed(!confirmed)
    } else if (!object) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Vui lòng chọn đối tượng!',
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Vui lòng chọn layer!',
        showConfirmButton: false,
        timer: 1000,
      });
    }
  }

  return (
    <div className="update_container">
      <div className="update_sideBar">
        <h3>Chọn đối tượng</h3>
        <div>
          <Form.Select aria-label="Layer" onChange={(e) => setLayer(e.target.value)}>
            <option>Chọn layer</option>
            <option value="1">Lớp 1</option>
            <option value="2">Lớp 2</option>
            <option value="3">Lớp 3</option>
            <option value="4">Lớp 4</option>
            <option value="5">Lớp 5</option>
            <option value="6">Lớp 6</option>
            <option value="7">Lớp 7</option>
            <option value="8">Lớp 8</option>
          </Form.Select>
          <Form.Select aria-label="Đối tượng" onChange={(e) => setObject(e.target.value)}>
            <option>Chọn đối tượng muốn thay đổi</option>
            <option value="Line">Line</option>
            <option value="Cylinder">Cylinder</option>
            <option value="Prism">Prism</option>
            <option value="Body_Comp">Body_Comp</option>
          </Form.Select>
          <Button variant="primary" onClick={handleClickConfirm}>Xác nhận</Button>{' '}
        </div>
      </div>
      <div className="updateCoordinates">
        <h3>Sửa thông tin</h3>
        {
          confirmed ?
            (
              object === 'Line' ?
              <div>
                <span>Layer </span>{layer}<span> có 3 line, vui lòng chọn line muốn sửa</span>
                <div className="rowFlex">
                  <input type="radio" name="type" id="input1" onClick={() => setSelectedLine(1)} />
                  <label htmlFor="input1">Line 1</label>
                  <input type="radio" name="type" id="input2" onClick={() => setSelectedLine(2)} />
                  <label htmlFor="input2">Line 2</label>
                  <input type="radio" name="type" id="input3" onClick={() => setSelectedLine(3)} />
                  <label htmlFor="input3">Line 3</label>
                </div>
                {
                  selectedLine &&
                  <div>
                    <span>Chỉnh sửa thông tin của line </span>{selectedLine}
                    <div className="rowFlex">
                      <input type="text" placeholder="Name" />
                      <input type="text" placeholder="Color" />
                    </div>
                    <div className="rowFlex">
                      <input type="text" placeholder="Width" />
                      <input type="text" placeholder="Height" />
                    </div>
                    <textarea className="textarea" placeholder="COORDINATES" />
                    <br />
                    <button className="updateCoordinates__button">Cập nhật</button>
                  </div>
                }
              </div> : 
              object === 'Cylinder' ?
              <div>
                <span>Layer </span>{layer}<span> có 2 Cylinder, vui lòng chọn Cylinder muốn sửa</span>
                <div className="rowFlex">
                  <input type="radio" name="type" id="input1" onClick={() => setSelectedCylinder(1)} />
                  <label htmlFor="input1">Cylinder 1</label>
                  <input type="radio" name="type" id="input2" onClick={() => setSelectedCylinder(2)} />
                  <label htmlFor="input2">Cylinder 2</label>
                </div>
                {
                  selectedCylinder &&
                  <div>
                    <span>Chỉnh sửa thông tin của Cylinder </span>{selectedCylinder}
                    <div className="rowFlex">
                      <input type="text" placeholder="Width" />
                      <input type="text" placeholder="Depth" />
                    </div>
                    <div className="rowFlex">
                      <input type="text" placeholder="Height" />
                      <input type="text" placeholder="Color" />
                    </div>
                    <textarea className="textarea" placeholder="COORDINATES" />
                    <br />
                    <button className="updateCoordinates__button">Cập nhật</button>
                  </div>
                }
              </div> : 
              <div></div>
            )
            :
            <p>Vui lòng chọn đối tượng muốn sửa</p>
        }
      </div>
    </div>
  )
}

export default UpdateCoordinates