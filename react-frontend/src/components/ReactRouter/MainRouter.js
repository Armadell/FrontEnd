import React from 'react'
import Register from '../Register';
import {  Routes, Route } from "react-router-dom";

import Header from '../Header'
import Login from '../Login'
import Logout from '../Logout';
import Admin from '../AdminPanel/Admin';
import AdminLogin from '../AdminPanel/AdminLogin';
import Create from '../AdminPanel/create'
import Delete from '../AdminPanel/delete'
import Edit from '../AdminPanel/edit'
import Users from '../AdminPanel/users'

const MainRouter = () => {
  return (
    <Routes>
        <Route path='Profile/' element={<Header />}></Route>
        <Route path='register/' element={<Register/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='Profile/logout/' element={<Logout/>}></Route>
        <Route path='secure/' element={<AdminLogin/>}></Route>
        <Route path='secure/admin/' element={<Admin/>}></Route>
        <Route path='secure/admin/create/' element={<Create/>}></Route>
        <Route path='secure/admin/delete/:id' element={<Delete/>}></Route>
        <Route path='secure/admin/edit/:id' element={<Edit/>}></Route>
        <Route path='secure/admin/users/' element={<Users/>}></Route>
        


    </Routes>
    
  )
}

export default MainRouter