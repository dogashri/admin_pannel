import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Card,Form, Input } from 'antd';
import LayoutPage from './Layout';
import SettingUpdateModal from './SettingUpdateModal';
import {getUpdate } from '../../actions/update'
import { connect } from 'react-redux';


const UpdatePassSchema = Yup.object().shape({
    oldPassword: Yup.string().min(5,'Too short password').max(20,'Too Long Password')
    .required('Old Password is required'),
    newPassword:Yup.string().min(5,'Too short password').max(20,'Too Long Password')
    .required('New Password is required'),
    confirmPassword:Yup.string()
    .oneOf([Yup.ref('newPassword'),null],'New Password and Confirm New Password must be same')
    .required('Confirm New Password is required')
  })


const UpdatePassword = ({getUpdate}) => {
    
    const[oldPassword,oldPasswordFocus] = useState(false)
    const [newPassword,newPasswordFocus] = useState(false)
    const [confirmPassword,confirmPasswordFocus] = useState(false)
    const[modal,setModal] = useState(false);
    

    const formik = useFormik({
        initialValues:{
            oldPassword:"",
            newPassword:'',
            confirmPassword:''
        },
        validationSchema:UpdatePassSchema,
        onSubmit: async(values,{setSubmitting})=>{
          const data = {
            "password":values.oldPassword,
            "newPassword":values.newPassword,
            // "confirmNewPassword":values.confirmPassword
          }
          console.log('button clicked')
          console.log(data)
          getUpdate(data,null,"UPDATE_PASSWORD")
        }
    })
    const handleFocus = (event)=>{
        if(event.target.name==='oldPassword'){
          oldPasswordFocus(true)
        }
        if(event.target.name==='newPassword'){
          newPasswordFocus(true)
        }
        if(event.target.name==='confirmPassword'){
            confirmPasswordFocus(true)
        }
      }

    return (
        <>
        <LayoutPage>
        <Card title="Update Password" style={{width:'100%'}}>
            <Form onSubmit={formik.handleSubmit}  autoComplete="off" layout="vertical" className="update-pass-form" style={{display:'flex',flexDirection:'column', justifyContent:'flex-start'}}>
                <Form.Item
                label="OLD PASSWORD" name="Old Password"
                ><br/>
                <Input.Password style={{ width:'100%',height:'55px'}}
                name="oldPassword" placeholder="Enter Your old password here"
                onFocus={handleFocus}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.oldPassword}
                ></Input.Password>
                {formik.errors.oldPassword ? <div className='email-error'>{formik.errors.oldPassword}</div> : null}
                </Form.Item>

                <Form.Item
                label="NEW PASSWORD" name="New Password"
                ><br/>
                <Input.Password style={{width:'100%',height:'55px'}}
                name="newPassword" placeholder="Enter your New password here"
                onFocus={handleFocus}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
                
                ></Input.Password>
                {formik.errors.newPassword ? <div className='email-error'>{formik.errors.newPassword}</div> : null}
                </Form.Item>

                <Form.Item
                label="CONFIRM PASSWORD" name="Confirm Password"
                ><br/>
                <Input.Password style={{width:'100%',height:'55px'}}
                name="confirmPassword" placeholder="Re Enter your new password here"
                onFocus={handleFocus}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                ></Input.Password>
                {formik.errors.confirmPassword ? <div className='email-error'>{formik.errors.confirmPassword}</div> : null}
                </Form.Item>
                <Button onClick={()=>{
                  setModal(!modal)
                  formik.handleSubmit()
                }} style={{height:'50px'}}>Update</Button>

            </Form>

</Card>
<SettingUpdateModal
    modal={modal}
    setModal={setModal}
  />  
        </LayoutPage>
            
        </>
    )
}
const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{getUpdate}) (UpdatePassword)
