import React, { useState } from 'react';
import {Modal} from 'antd';
import OtpInput from 'react-otp-input';

const SettingUpdateModal = ({modal,setModal}) => {
    const [otpData,setOtpData] = useState({
        otp:''
    })
    const handleChange = otp => setOtpData({otp});
    return (
        <div>
            <Modal
        visible={modal}
        onCancel={()=>setModal(!modal)}
        onOk={()=>setModal(!modal)}
        >
            <OtpInput
            name="otp"
        value={otpData.otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span></span>}
        containerStyle={{display:"flex",justifyContent:'space-around'}}
        inputStyle={{width:50,borderBlockColor:'blue'}}
        />

        </Modal>
        </div>
    )
}

export default SettingUpdateModal
