import React,{ useState } from 'react';
import {connect} from 'react-redux';
import { Card } from 'antd';
import { Form, Input, Button } from 'antd';
import SettingUpdateModal from '../SettingUpdateModal';
import {getUpdate} from '../../../actions/update';

const AdminFund = ({getUpdate, settingData}) => {

    const[minAdminFund,setMinAdminFund] = useState(settingData.minAdminFund)
    const[modal,setModal] = useState(false);
    useState(()=>{
        setMinAdminFund(settingData.minAdminFund)
    },[settingData.minAdminFund])

    return (
        <>
          <Card title="Min Admin Fund" bordered={true}>
        <Form layout="vertical">
          <Form.Item
            label="ETH"
            name="ETH"><br/>
                <Input
                value={minAdminFund.eth}
                onChange={(event)=>setMinAdminFund({...minAdminFund,eth:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="MOBI"
            name="MOBI"><br/>
                <Input
                value={minAdminFund.mobi}
                onChange={(event)=>setMinAdminFund({...minAdminFund,mobi:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="PAZZI"
            name="PAZZI"><br/>
                <Input
                value={minAdminFund.pazzi}
                onChange={(event)=>setMinAdminFund({...minAdminFund,pazzi:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="USDT"
            name="USDT"><br/>
                <Input
                value={minAdminFund.usdt}
                onChange={(event)=>setMinAdminFund({...minAdminFund,usdt:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="XRP"
            name="XRP"><br/>
                <Input
                value={minAdminFund.xrp}
                onChange={(event)=>setMinAdminFund({...minAdminFund,xrp:event.target.value})}
                ></Input>
            </Form.Item>
            
          </Form>
          <Button onClick={()=>{setModal(!modal);
          getUpdate({minAdminFund:minAdminFund},settingData._id,"UPDATE_SETTING")
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
export default connect(mapStateToProps,{getUpdate}) (AdminFund)
