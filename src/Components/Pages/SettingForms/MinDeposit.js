import { connect } from 'react-redux'
import React,{useEffect,useState} from 'react'
import { Card } from 'antd';
import { Form, Input, Button } from 'antd';
import SettingUpdateModal from '../../Pages/SettingUpdateModal';
import {getUpdate} from '../../../actions/update'

const MinDeposit = ({getUpdate, settingData}) => {
    

    const[minDeposit,setMinDeposit] = useState(settingData.minDeposit)
    const[modal,setModal] = useState(false);
    useEffect(()=>{
        setMinDeposit(settingData.minDeposit)
    },[settingData.minDeposit])

    return (
        <>
            <Card title="Min Deposit" bordered={true} style={{width:'100%'}}>
            <Form layout="vertical" className="min-deposit-form">
            <Form.Item
            label="ETH"
            name="ETH"><br/>
                <Input name="eth" value={minDeposit.eth }
                onChange={(event)=>{
                    // console.log(event.target.value)
                    setMinDeposit({...minDeposit,eth:event.target.value})
                }} ></Input>
            </Form.Item>
            <Form.Item
            label="MOBI"
            name="MOBI"><br/>
                <Input value={minDeposit.mobi}
                onChange={(event)=>setMinDeposit({...minDeposit,mobi:event.target.value})}
                ></Input>
            </Form.Item>
            <Form.Item
            label="PAZZI"
            name="PAZZI"><br/>
                <Input value={minDeposit.pazzi}
                onChange={(event)=>setMinDeposit({...minDeposit,pazzi:event.target.value})}
                ></Input>
            </Form.Item>
            </Form>
            <Button onClick={()=>{setModal(!modal);
                getUpdate({minDeposit:minDeposit},settingData._id,"UPDATE_SETTING")
                }} style={{width:'100%',height:'45px'}}>Update</Button>
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
export default connect(mapStateToProps,{getUpdate}) (MinDeposit)
