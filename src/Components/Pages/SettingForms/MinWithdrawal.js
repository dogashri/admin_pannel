import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { Card } from 'antd';
import { Form, Input, Button } from 'antd';
import SettingUpdateModal from '../SettingUpdateModal';
import {getUpdate} from '../../../actions/update';

const MinWithdrawal = ({getUpdate, settingData}) => {

    const[minWithdrawal,setMinWithdrawal] = useState(settingData.minWithdrawal);
    const[modal,setModal] = useState(false);
    useEffect(()=>{
        setMinWithdrawal(settingData.minWithdrawal)
    },[settingData.minWithdrawal])

    return (
        <>
        <Card title="Min Withdrawal" bordered={true}>
        <Form layout="vertical">
          <Form.Item
            label="ETH"
            name="ETH"><br/>
                <Input value={minWithdrawal.eth}
                 onChange={(event)=>setMinWithdrawal({...minWithdrawal,eth:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="MOBI"
            name="MOBI"><br/>
                <Input value={minWithdrawal.mobi}
                 onChange={(event)=>setMinWithdrawal({...minWithdrawal,mobi:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="PAZZI"
            name="PAZZI"><br/>
                <Input value={minWithdrawal.pazzi}
                 onChange={(event)=>setMinWithdrawal({...minWithdrawal,pazzi:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="USDT"
            name="USDT"><br/>
                <Input value={minWithdrawal.usdt}
                 onChange={(event)=>setMinWithdrawal({...minWithdrawal,usdt:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="XRP"
            name="XRP"><br/>
                <Input value={minWithdrawal.xrp}
                 onChange={(event)=>setMinWithdrawal({...minWithdrawal,xrp:event.target.value})}
                ></Input>
            </Form.Item>
            
          </Form>
          <Button onClick={()=>{setModal(!modal);
          getUpdate({minWithdrawal:minWithdrawal},settingData._id,"UPDATE_SETTING")
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
export default connect(mapStateToProps,{getUpdate}) (MinWithdrawal)
