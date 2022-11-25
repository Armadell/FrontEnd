import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios'
import Button from 'react-bootstrap/Button';

import Users from './users'
const Admin = () => {
  const [userdata,setUserdata]=useState([])
  useEffect(()=>{
    axiosInstance.get(`profilenew/`)
    .then((response)=>{
       console.log(response)
       setUserdata(response.data)
    })
  },[setUserdata])
  console.log(userdata,"userdata")
  return (
    <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">profile_picture</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  {userdata.map((item)=>{
    return(
  <tbody>
    <tr>
       
            
       
      <th scope="row">{item.user.id}</th>
      <td>{item.user.username}</td>
      <td>{item.user.email}</td>
      <td>{item.profile_picture}</td>
      <td>
      <a style={{width:"100px"}} href={'/secure/admin/edit/' + item.user.id} type="button" class="btn btn-secondary btn-sm m-0">Edit</a>
      <a style={{width:"100px"}} href={'/secure/admin/delete/'+item.id}type="button" class="btn btn-secondary btn-sm m-0 pt-1">Delete</a>

    </td>

     
    </tr>
 
  </tbody>)
   })}

        <div  className='d-flex row'>
 <Button className='justify-content-start' href={'/secure/admin/create'} variant="info" size="md">
        Block level button
      </Button>
      </div>
    
</table>
    </>
  )
}

export default Admin