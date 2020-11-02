import React, { useState } from 'react';
import {Modal} from 'antd';
import OtpInput from 'react-otp-input';
import {confirmUpdate} from '../../actions/update';
import { connect } from 'react-redux';

const SettingUpdateModal = ({modal,setModal,operationID,confirmUpdate}) => {
    console.log(operationID)
    const [otpData,setOtpData] = useState({
        otp:''
    })
    const handleChange = otp => setOtpData({otp});
    return (
        <div>
            <Modal
        visible={modal}
        onCancel={()=>setModal(!modal)}
        onOk={()=>{confirmUpdate(operationID,otpData.otp);
             setModal(!modal)}}
        >
            <OtpInput
            name="otp"
        value={otpData.otp}
        onChange={handleChange}
        numInputs={8}
        separator={<span></span>}
        containerStyle={{display:"flex",justifyContent:'space-around'}}
        inputStyle={{width:50,borderBlockColor:'blue'}}
        />

        </Modal>
        </div>
    )
}
const mapStateToProps = state =>({
    operationID:state.update.operationId
})

export default connect(mapStateToProps,{confirmUpdate}) (SettingUpdateModal)
