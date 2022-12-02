import React from 'react'
import './UpdateCoordinates.css'

function UpdateCoordinates() {
  return (
    <div className="updateCoordinates">
        <h3>ĐIỀN THÔNG TIN</h3>
        <div className="rowFlex">
            <input type="radio" name="type" id="input1"/>
            <label for="input1">PATH</label>
            <input type="radio" name="type" id="input2"/>
            <label for="input2">POLYGON</label>
        </div>
        <div className="rowFlex">
            <input type="text" placeholder="HEIGHT" />
            <input type="text" placeholder="WIDTH" />
        </div>
        <div className="rowFlex">
            <input type="text" placeholder="COLOR" />
            <input type="text" placeholder="BLOCKNAME" />
        </div>
        <input type="text" placeholder="COORDINATES" />
        <br />
        <button className="updateCoordinates__button">Cập nhật</button>
    </div>
  )
}

export default UpdateCoordinates