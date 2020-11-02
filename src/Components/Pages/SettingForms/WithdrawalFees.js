import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { Card } from 'antd';
import { Form, Input, Button } from 'antd';
import SettingUpdateModal from '../SettingUpdateModal';
import {getUpdate} from '../../../actions/update'


const WithdrawalFees = ({getUpdate, settingData}) => {

    const[withdrawalFees,setWithdrawalFees] = useState(settingData.withdrawalFees)
    const[modal,setModal] = useState(false);
    useEffect(()=>{
        setWithdrawalFees(settingData.withdrawalFees)
    },[settingData.withdrawalFees])

    return (
        <>
           <Card title="Withdrawl Fees" bordered={true} style={{width:'100%'}}>
          <Form layout="vertical">
          <Form.Item
            label="ETH"
            name="ETH"><br/>
                <Input value={withdrawalFees.eth}
                onChange={(event)=>setWithdrawalFees({...withdrawalFees,eth:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="MOBI"
            name="MOBI"><br/>
                <Input value={withdrawalFees.mobi}
                onChange={(event)=>setWithdrawalFees({...withdrawalFees,mobi:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="PAZZI"
            name="PAZZI"><br/>
                <Input value={withdrawalFees.pazzi}
                onChange={(event)=>setWithdrawalFees({...withdrawalFees,pazzi:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="USDT"
            name="USDT"><br/>
                <Input value={withdrawalFees.usdt}
                onChange={(event)=>setWithdrawalFees({...withdrawalFees,usdt:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="XRP"
            name="XRP"><br/>
                <Input value={withdrawalFees.xrp}
                onChange={(event)=>setWithdrawalFees({...withdrawalFees,xrp:event.target.value})}
                ></Input>
            </Form.Item>
            
          </Form>
          <Button onClick={()=>{setModal(!modal);
          getUpdate({withdrawalFees:withdrawalFees},settingData._id,"UPDATE_SETTING")
        }} style={{width:'100%'}}>Update</Button>
        </Card> 
        <SettingUpdateModal
    modal={modal}
    setModal={setModal}
  />
        </>
    )
}

const mapStateToProps = state =>({
    settingData:state.setting.settingData
})
export default connect(mapStateToProps,{getUpdate}) (WithdrawalFees)
