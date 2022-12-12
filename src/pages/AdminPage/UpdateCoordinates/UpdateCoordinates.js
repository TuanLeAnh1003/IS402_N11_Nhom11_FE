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
  const [selectedPrism, setSelectedPrism] = useState()
  const [selectedBodyComp, setSelectedBodyComp] = useState()
  const [selectedNode, setSelectedNode] = useState()
  const [selectedFace, setSelectedFace] = useState()

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

  useEffect(() => {
    setSelectedNode()
  }, [object])

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
            <option value="BodyComp">BodyComp</option>
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
                      <span>Line </span>{selectedLine}<span> gồm 4 Node vui lòng chọn Node bạn muốn sửa</span>
                      <div className="rowFlex">
                        <input type="radio" name="type" id="input11" onClick={() => setSelectedNode(1)} />
                        <label htmlFor="input11">Node 1</label>
                        <input type="radio" name="type" id="input21" onClick={() => setSelectedNode(2)} />
                        <label htmlFor="input21">Node 2</label>
                        <input type="radio" name="type" id="input31" onClick={() => setSelectedNode(3)} />
                        <label htmlFor="input31">Node 3</label>
                        <input type="radio" name="type" id="input41" onClick={() => setSelectedNode(4)} />
                        <label htmlFor="input41">Node 4</label>
                      </div>
                      {
                        selectedNode &&
                        <textarea className="textarea" placeholder={`Coordinates node ${selectedNode}`} />
                      }
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
                        <span>Cylinder </span>{selectedCylinder}<span> gồm 1 Node là tâm</span>
                        <textarea className="textarea" placeholder={`Coordinates node ở tâm`} />
                        <br />
                        <button className="updateCoordinates__button">Cập nhật</button>
                      </div>
                    }
                  </div> :
                  object === 'Prism' ?
                    <div>
                      <span>Layer </span>{layer}<span> có 3 Prism, vui lòng chọn Prism muốn sửa</span>
                      <div className="rowFlex">
                        <input type="radio" name="type" id="input1" onClick={() => setSelectedPrism(1)} />
                        <label htmlFor="input1">Prism 1</label>
                        <input type="radio" name="type" id="input2" onClick={() => setSelectedPrism(2)} />
                        <label htmlFor="input2">Prism 2</label>
                        <input type="radio" name="type" id="input3" onClick={() => setSelectedPrism(3)} />
                        <label htmlFor="input3">Prism 3</label>
                      </div>
                      {
                        selectedPrism &&
                        <div>
                          <span>Chỉnh sửa thông tin của Prism </span>{selectedPrism}
                          <div className="rowFlex">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Height" />
                          </div>
                          <span>Prism </span>{selectedPrism}<span> gồm 1 Face tạo thành</span><br />
                          <span>Face đó gồm 4 Node vui lòng chọn Node bạn muốn sửa</span>
                          <div className="rowFlex">
                            <input type="radio" name="type" id="input11" onClick={() => setSelectedNode(1)} />
                            <label htmlFor="input11">Node 1</label>
                            <input type="radio" name="type" id="input21" onClick={() => setSelectedNode(2)} />
                            <label htmlFor="input21">Node 2</label>
                            <input type="radio" name="type" id="input31" onClick={() => setSelectedNode(3)} />
                            <label htmlFor="input31">Node 3</label>
                            <input type="radio" name="type" id="input41" onClick={() => setSelectedNode(4)} />
                            <label htmlFor="input41">Node 4</label>
                          </div>
                          {
                            selectedNode &&
                            <textarea className="textarea" placeholder={`Coordinates node ${selectedNode}`} />
                          }
                          <br />
                          <button className="updateCoordinates__button">Cập nhật</button>
                        </div>
                      }
                    </div>
                    :
                    object === 'BodyComp' ?
                      <div>
                        <span>Layer </span>{layer}<span> có 4 BodyComp, vui lòng chọn BodyComp muốn sửa</span>
                        <div className="rowFlex">
                          <input type="radio" name="type" id="input1" onClick={() => setSelectedBodyComp(1)} />
                          <label htmlFor="input1">BodyComp 1</label>
                          <input type="radio" name="type" id="input2" onClick={() => setSelectedBodyComp(2)} />
                          <label htmlFor="input2">BodyComp 2</label>
                          <input type="radio" name="type" id="input3" onClick={() => setSelectedBodyComp(3)} />
                          <label htmlFor="input3">BodyComp 3</label>
                          <input type="radio" name="type" id="input4" onClick={() => setSelectedBodyComp(4)} />
                          <label htmlFor="input4">BodyComp 4</label>
                        </div>
                        {
                          selectedBodyComp &&
                          <div>
                            <span>Chỉnh sửa thông tin của BodyComp </span>{selectedBodyComp}
                            <div className="rowFlex">
                              <input type="text" placeholder="Name" />
                            </div>
                            <span>BodyComp </span>{selectedPrism}<span> gồm 4 Face tạo thành, vui lòng chọn Face muốn sửa</span>
                            <div className="rowFlex">
                              <input type="radio" name="type" id="input11" onClick={() => setSelectedFace(1)} />
                              <label htmlFor="input11">Face 1</label>
                              <input type="radio" name="type" id="input21" onClick={() => setSelectedFace(2)} />
                              <label htmlFor="input21">Face 2</label>
                              <input type="radio" name="type" id="input31" onClick={() => setSelectedFace(3)} />
                              <label htmlFor="input31">Face 3</label>
                              <input type="radio" name="type" id="input41" onClick={() => setSelectedFace(4)} />
                              <label htmlFor="input41">Face 4</label>
                            </div>
                            {
                              selectedFace &&
                              <div>
                                <span>Face </span>{selectedFace}<span> gồm 5 Node vui lòng chọn Node bạn muốn sửa</span>
                                <div className="rowFlex">
                                  <input type="radio" name="type" id="input111" onClick={() => setSelectedNode(1)} />
                                  <label htmlFor="input111">Node 1</label>
                                  <input type="radio" name="type" id="input211" onClick={() => setSelectedNode(2)} />
                                  <label htmlFor="input211">Node 2</label>
                                  <input type="radio" name="type" id="input311" onClick={() => setSelectedNode(3)} />
                                  <label htmlFor="input311">Node 3</label>
                                  <input type="radio" name="type" id="input411" onClick={() => setSelectedNode(4)} />
                                  <label htmlFor="input411">Node 4</label>
                                  <input type="radio" name="type" id="input511" onClick={() => setSelectedNode(5)} />
                                  <label htmlFor="input511">Node 5</label>
                                </div>
                                {
                                  selectedNode &&
                                  <textarea className="textarea" placeholder={`Coordinates node ${selectedNode}`} />
                                }
                              </div>
                            }
                            <br />
                            <button className="updateCoordinates__button">Cập nhật</button>
                          </div>
                        }
                      </div>
                      :
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