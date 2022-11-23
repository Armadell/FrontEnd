import React,{useState} from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import axiosInstance from '../axios'
import { LinkContainer } from 'react-router-bootstrap'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,

}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-bootstrap';

function Register() {
    const navigate=useNavigate()
    const initialFormData=Object.freeze({
        username:"",
        email:"",
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
        .post(`/user/register/`,{
            email:formData.email,
            username:formData.username,
            password:formData.password,
        }).then((response)=>{
            
           navigate('/Login')
           console.log(response)
           console.log(response.data)
        }).catch((err)=>{
          console.log(err)
        })
    }
  return (
   
    <MDBContainer fluid>
   <form >
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
         
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput name="username"onChange={handleChange} label='Your Name' id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput name="email"onChange={handleChange} label='Your Email' id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput name="password"onChange={handleChange} label='Password' id='form3' type='password'/>
              </div>

              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput name='password2' onChange={handleChange} label='Repeat your password' id='form4' type='password'/>
              </div> */}

         

              <MDBBtn onClick={handleSubmit} type="submit" form='form' className='mb-4' size='lg'>Register</MDBBtn>
              <div className="d-flex flex-row align-items-center mb-4">
           <small>Already have an Account? Login here.</small>
      <LinkContainer to="/">
      <Nav.Link href="#pricing">LogIn</Nav.Link>
      </LinkContainer>
              </div>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>
            
     
          </MDBRow>
        </MDBCardBody>
    
      </MDBCard>
      <div>
      
      </div>
      </form>
     
    
      
    </MDBContainer>
  );
}

export default Register;