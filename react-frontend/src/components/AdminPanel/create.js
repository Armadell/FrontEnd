import React from 'react';
import {useState} from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import axiosInstance from '../../axios'
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

export default function Create() {

		



	const navigator =useNavigate();
	const initialFormData = Object.freeze({
		username: '',
		email: '',
        password:"",
		
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		if ([e.target.name] == 'title') {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value.trim(),
				
			});
		} else {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value.trim(),
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.post(`user/admin/create/`, {
				username: formData.username,
				
				email: formData.email,
				password: formData.password,
				
			})
			.then((res) => {
				navigator('/secure/admin/');
			});
	};
    return(
        <MDBContainer fluid>
        <form >
           <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
             <MDBCardBody>
               <MDBRow>
              
                 <MDBCol md='12' lg='12' className='order-7 order-lg-3 d-flex flex-column align-items-center'>
     
                   <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">New User</p>
     
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
     
              
     
                   <MDBBtn onClick={handleSubmit} type="submit" form='form' className='mb-4' size='lg'>Create</MDBBtn>
         
                 </MDBCol>
     
                
          
               </MDBRow>
             </MDBCardBody>
         
           </MDBCard>
           <div>
           
           </div>
           </form>
          
         
           
         </MDBContainer>
    )
    }
