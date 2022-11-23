import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React,{useEffect, useState} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import axiosInstance from '../axios'

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

const Header = () => {
  const tokentoserver = localStorage.getItem('access_token');
  console.log(tokentoserver);
   
  const [initialState,updateState]=useState([])
 

  useEffect(()=>{
    console.log("hello")
    axiosInstance.get(`user/authuser/`,
              {
                  headers: { 'Authorization': `Bearer ${tokentoserver}`,
                'Accept':'application/json',
              'Content-Type':'application/json'
            }
                  
              }
          ).then((res) => {
           updateState(res.data)
             
          }).catch(Error => {
              console.log(Error)
          })},[])
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container className='me-end'>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
       
        <Nav className="ml-auto">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <LinkContainer to ="/register">
          <Nav.Link>Register</Nav.Link>
          </LinkContainer>
          <Nav.Link href="#features">Admin</Nav.Link>
          {initialState.username ?
          <LinkContainer to ="logout/">
         
          <Nav.Link href="#pricing">LogOut</Nav.Link>
          </LinkContainer>:
                    <LinkContainer to='/'>
                    <Nav.Link href="#pricing">LogIn</Nav.Link>
                    </LinkContainer>
           }

        
          </Navbar.Collapse>
        </Nav>
        
      </Container>


    </Navbar>
    
    <div className='container-fluid'>
    <div className="vh-100" style={{ backgroundColor: 'white' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>{initialState.username}</MDBCardTitle>
                    <MDBCardText>{initialState.email}</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                    
                    </div>
                   
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </div>

  
  </>
  )
}

export default Header