import React from 'react'
import Register from '../Register';
import {  Routes, Route } from "react-router-dom";

import Header from '../Header'
import Login from '../Login'
import Logout from '../Logout';

const MainRouter = () => {
  return (
    <Routes>
        <Route path='Profile/' element={<Header />}></Route>
        <Route path='register/' element={<Register/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='Profile/logout/' element={<Logout/>}></Route>
    </Routes>
    
  )
}

export default MainRouter