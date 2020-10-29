import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { Form, Input, Button, Checkbox,Modal } from 'antd';
import LayoutPage from './Layout';
import SettingUpdateModal from './SettingUpdateModal';
import {getSetting} from '../../actions/setting'
import { connect } from 'react-redux';


function Setting({getSetting,settingData}) {
    useEffect(()=>{
        getSetting()
    },[])

    const[minDeposit,setMinDeposit] = useState(settingData.minDeposit)
    const[minWithdrawal,setMinWithdrawal] = useState(settingData.minWithdrawal)
    const[maxWithdrawal,setMaxWithdrawal] = useState(settingData.maxWithdrawal)
    const[withdrawalFees,setWithdrawalFees] = useState(settingData.withdrawalFees)
    const[minAdminFund,setMinAdminFund] = useState(settingData.minAdminFund)
    const[modal,setModal] = useState(false);
    console.log(minDeposit)
    // const{settingDataList} = formData;
    // const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});
    return (
        <>
        <LayoutPage>
        <div className="site-card-wrapper">
    <Row gutter={0}>
      <Col span={12}>
        <Card title="Min Deposit" bordered={true} style={{width:400}}>
            <Form className="min-deposit-form">
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
            <Button onClick={()=>{setModal(!modal)}} style={{width:'100%'}}>Update</Button>
        </Card>
      </Col>

      <Col span={12}>
        <Card title="Withdrawl Fees" bordered={true} style={{width:400}}>
          <Form>
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
          <Button style={{width:'100%'}}>Update</Button>
        </Card>
      </Col>
      
    </Row>
    <Row>
    <Col span={12}>
        <Card title="Min Withdrawal" bordered={true}>
        <Form>
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
          <Button style={{width:'100%'}}>Update</Button>
        </Card>
      </Col>
      <Col span={12}>
        <Card title="Max Withdrawal" bordered={true}>
        <Form>
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
          <Button style={{width:'100%'}}>Update</Button>
        </Card>
      </Col>
    </Row>
    <Row>
    <Col span={24}>
        <Card title="Min AdminFund" bordered={true}>
        <Form>
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
          <Button style={{width:'100%'}}>Update</Button>
        </Card>
      </Col>
    </Row>
  </div>
  <SettingUpdateModal
    modal={modal}
    setModal={setModal}
  />
  {/* <Modal
        visible={modal}
        onCancel={()=>setModal(!modal)}
        onOk={()=>setModal(!modal)}
        >

        </Modal> */}
        </LayoutPage>
            
        </>
    )
}
const mapStateToProps = state =>({
    settingData:state.setting.settingData
})
export default connect(mapStateToProps,{getSetting}) (Setting)
