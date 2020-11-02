import React,{useState} from 'react';
import {connect} from 'react-redux';
import { Card } from 'antd';
import { Form, Input, Button } from 'antd';
import SettingUpdateModal from '../SettingUpdateModal';
import {getUpdate} from '../../../actions/update'

const MaxWithdrawal = ({getUpdate, settingData}) => {
    const[maxWithdrawal,setMaxWithdrawal] = useState(settingData.maxWithdrawal)
    const[modal,setModal] = useState(false);
    useState(()=>{
        setMaxWithdrawal(settingData.maxWithdrawal)
    },[settingData.maxWithdrawal])
    return (
        <>
         <Card title="Max Withdrawal" bordered={true}>
        <Form layout="vertical"> 
          <Form.Item
            label="ETH"
            name="ETH"><br/>
                <Input
                value={maxWithdrawal.eth}
                onChange={(event)=>setMaxWithdrawal({...maxWithdrawal,eth:event.target.value})} 
                ></Input>
            </Form.Item>
            <Form.Item
            label="MOBI"
            name="MOBI"><br/>
                <Input
                value={maxWithdrawal.mobi}
                onChange={(event)=>setMaxWithdrawal({...maxWithdrawal,mobi:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="PAZZI"
            name="PAZZI"><br/>
                <Input
                value={maxWithdrawal.pazzi}
                onChange={(event)=>setMaxWithdrawal({...maxWithdrawal,pazzi:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="USDT"
            name="USDT"><br/>
                <Input
                value={maxWithdrawal.usdt}
                onChange={(event)=>setMaxWithdrawal({...maxWithdrawal,usdt:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="XRP"
            name="XRP"><br/>
                <Input
                value={maxWithdrawal.xrp}
                onChange={(event)=>setMaxWithdrawal({...maxWithdrawal,xrp:event.target.value})}
                ></Input>
            </Form.Item>
            
          </Form>
          <Button onClick={()=>{setModal(!modal);
          getUpdate({maxWithdrawal:maxWithdrawal},settingData._id,"UPDATE_SETTING")
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

export default connect(mapStateToProps,{getUpdate}) (MaxWithdrawal)
