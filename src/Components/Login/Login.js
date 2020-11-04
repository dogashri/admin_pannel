import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import logo from '../../assets/logoicon.png'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Card from 'react-bootstrap/Card'
import { Button, Container, FormGroup } from 'react-bootstrap';
import { MailTwoTone,LockTwoTone } from '@ant-design/icons';
import { Form , Input,Spin } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert } from 'antd';
import {login} from '../../actions/authentication';
import { Redirect } from 'react-router-dom';
import Noty from 'noty';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password:Yup.string().min(5,'Too short password').max(20,'Too Long Password')
  .required('Password is required')
})



const LoginForm = ({login,token,loggedIn}) => {
  useEffect(()=>{
    
  },[])
  

  const [emailFocus, setEmailFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

const formik = useFormik({
  initialValues:{
    email:"",
    password:""
  },
  validationSchema:LoginSchema,
  onSubmit: async(values,{setSubmitting})=>{
    const data = {
      "email":values.email,
      "password":values.password
    }
    console.log('button clicked')
    login(values.email,values.password)
  }
});

const handleFocus = (event)=>{
  if(event.target.name==='email'){
    setEmailFocus(true)
  }
  if(event.target.name==='password'){
    setPasswordFocus(true)
  }
}
// const SuccessAlert = ( <Alert message="Informational Notes" type="info" showIcon />)
// const ErrorAlert = (<Alert message="Error" type="error" showIcon />)
// const loadSpin = <LoadingOutlined style={{ fontSize: 24 }} spin />
// const notify = () => toast("Wow so easy !");



if(token){ 
  return <Redirect to = '/usersDash'/>
}else{


    return (
        <div className = 'container-fluid'>
            <div className = 'bg'>
              
                <Container>
                      <Card>
                        <Card.Body>
                          <div className = 'my-card'>
                            <div className='text'>
                              <img className = 'text-img' src={logo}></img>
                              <p>login to your admin pannel</p>
                            </div>
                            
                              <Form className='login-form' onSubmit={()=>console.log('clicked')}>
                                <Form.Item>
                                  <label className='label-email'>Email</label><br/>
                                  <StyledInput prefix={<MailTwoTone className='email-icon' />}
                                   placeholder="name@example.com"
                                   type="email"
                                   name="email"
                                   id="form-email"
                                  
                                    onFocus={handleFocus}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                  ></StyledInput>
                                  {formik.errors.email ? <div className='email-error'>{formik.errors.email}</div> : null}
                                  </Form.Item>

                                  <Form.Item>
                                  <label>Password</label><br/>
                                  <StyledInputPass prefix={<LockTwoTone className='password-icon'/>} 
                                   placeholder="enter your password"
                                   type="password"
                                   name='password'
                                   id="form_password"
                                   iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    onFocus={handleFocus}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                   ></StyledInputPass>
                                   {formik.errors.password ? <div className='password-error'>{formik.errors.password}</div> : null}
                                   </Form.Item>

                                <div className='submit-button'>
                                <Button onClick={()=>{
                                  formik.handleSubmit()
                                  // notify()
                                }} type='submit' className = 'login-button'
                                 disabled={formik.isSubmitting}>Submit 
                                 {/* {formik.isSubmitting &&
                                 <Spin indicator={loadSpin}
                                 ></Spin> */}
                                 </Button>
                                 <ToastContainer />
                                </div>
                               </Form>
                              </div>
                        </Card.Body>
                      </Card>
                      
                </Container> 
                {/* {loggedIn?SuccessAlert:ErrorAlert} */}

            </div>
        </div>
    )
  }
}

const StyledInput = styled(Input)`
border-radius:10px;
height:65px;
`
const StyledInputPass = styled(Input.Password)`
border-radius:10px;
height:65px;
`

const mapStateToProps = state =>({
  token:state.authentication.token,
  loggedIn:state.authentication.loggedIn

})
export default connect(mapStateToProps,{login})(LoginForm)
