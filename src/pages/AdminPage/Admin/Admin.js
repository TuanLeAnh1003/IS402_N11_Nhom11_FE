import React from 'react';
import './Admin.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Transaction from '../Transaction/Transaction';
import AdminProfile from '../AdminProfile/AdminProfile';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import UpdateCoordinates from '../UpdateCoordinates/UpdateCoordinates';

function Admin() {
  return (
    <div className='admin'>
      <div className='admin-wrapper'>
        <AdminSideBar />
        <div className='admin__col'>
          <Routes>
            <Route path='/' element={<AdminProfile />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/update-coordinates" element={<UpdateCoordinates />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin