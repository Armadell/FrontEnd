import React from 'react';
import {useState} from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import axiosInstance from '../../axios'
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { LinkContainer } from 'react-router-bootstrap';

function AdminLogin() {
    const [userdata,setUserdata]=useState([])
    const [data,setData]=useState([])
    const navigate=useNavigate()
    const initialFormData=Object.freeze({
        username:"",
       
        password:"",
    })
    const [formData,updateFormData]=useState(initialFormData)
    const handleChange=(e)=>{
        updateFormData({
            ...formData,
            //trimming any whitespace
            [e.target.name]:e.target.value.trim(),
        })
    }
    const handleSubmit = (e)=>{
       
        e.preventDefault()
        console.log(formData)
        axiosInstance
        .post(`token/`,{
         
            username:formData.username,
            password:formData.password,
        }).then((response)=>{
          localStorage.setItem('access_token',response.data.access)
          localStorage.setItem('refresh_token',response.data.refresh)
          
          axiosInstance.defaults.headers['Authorization']=
          'JWT ' + localStorage.getItem('access_token')
          setData(response.data)
          navigate("admin/")
          
        }).catch((err)=>{
          console.log(err)
        })

    }
    

  return (
    <MDBContainer fluid>
<form>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Admin Login</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput name='username' onChange={handleChange} wrapperClass='mb-4 w-100' label='Username' id='formControlLg' type='email' size="lg"/>
              <MDBInput name='password' onChange={handleChange} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

            
              <MDBBtn onClick={handleSubmit} type="submit" form="form" size='lg'>
                Login
              </MDBBtn>
              <div className="d-flex flex-row align-items-center mb-4">
         
   
              </div>
              

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>
      </form>
    
    </MDBContainer>
  );
}

export default AdminLogin;