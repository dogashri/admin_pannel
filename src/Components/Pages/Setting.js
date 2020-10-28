import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import LayoutPage from './Layout';
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
                onChange={(value)=>setMinDeposit(value)} ></Input>
            </Form.Item>
            <Form.Item
            label="MOBI"
            name="MOBI"><br/>
                <Input value={minDeposit.mobi}
                onChange={(value)=>setMinDeposit(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="PAZZI"
            name="PAZZI"><br/>
                <Input value={minDeposit.pazzi}
                onChange={(value)=>setMinDeposit(value)}
                ></Input>
            </Form.Item>
            </Form>
            <Button style={{width:'100%'}}>Update</Button>
        </Card>
      </Col>

      <Col span={12}>
        <Card title="Withdrawl Fees" bordered={true} style={{width:400}}>
          <Form>
          <Form.Item
            label="ETH"
            name="ETH"><br/>
                <Input value={withdrawalFees.eth}
                onChange={(value)=>setWithdrawalFees(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="MOBI"
            name="MOBI"><br/>
                <Input value={withdrawalFees.mobi}
                onChange={(value)=>setWithdrawalFees(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="PAZZI"
            name="PAZZI"><br/>
                <Input value={withdrawalFees.pazzi}
                onChange={(value)=>setWithdrawalFees(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="USDT"
            name="USDT"><br/>
                <Input value={withdrawalFees.usdt}
                onChange={(value)=>setWithdrawalFees(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="XRP"
            name="XRP"><br/>
                <Input value={withdrawalFees.xrp}
                onChange={(value)=>setWithdrawalFees(value)}
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
                 onChange={(value)=>setMinWithdrawal(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="MOBI"
            name="MOBI"><br/>
                <Input value={minWithdrawal.mobi}
                 onChange={(value)=>setMinWithdrawal(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="PAZZI"
            name="PAZZI"><br/>
                <Input value={minWithdrawal.pazzi}
                 onChange={(value)=>setMinWithdrawal(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="USDT"
            name="USDT"><br/>
                <Input value={minWithdrawal.usdt}
                 onChange={(value)=>setMinWithdrawal(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="XRP"
            name="XRP"><br/>
                <Input value={minWithdrawal.xrp}
                 onChange={(value)=>setMinWithdrawal(value)}
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
                value={maxWithdrawal.xrp}
                onChange={(value)=>setMaxWithdrawal(value)} 
                ></Input>
            </Form.Item>
            <Form.Item
            label="MOBI"
            name="MOBI"><br/>
                <Input
                value={maxWithdrawal.xrp}
                onChange={(value)=>setMaxWithdrawal(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="PAZZI"
            name="PAZZI"><br/>
                <Input
                value={maxWithdrawal.xrp}
                onChange={(value)=>setMaxWithdrawal(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="USDT"
            name="USDT"><br/>
                <Input
                value={maxWithdrawal.xrp}
                onChange={(value)=>setMaxWithdrawal(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="XRP"
            name="XRP"><br/>
                <Input
                value={maxWithdrawal.xrp}
                onChange={(value)=>setMaxWithdrawal(value)}
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
                value={minAdminFund.xrp}
                onChange={(value)=>setMinAdminFund(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="MOBI"
            name="MOBI"><br/>
                <Input
                value={minAdminFund.xrp}
                onChange={(value)=>setMinAdminFund(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="PAZZI"
            name="PAZZI"><br/>
                <Input
                value={minAdminFund.xrp}
                onChange={(value)=>setMinAdminFund(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="USDT"
            name="USDT"><br/>
                <Input
                value={minAdminFund.xrp}
                onChange={(value)=>setMinAdminFund(value)}
                ></Input>
            </Form.Item>
            <Form.Item
            label="XRP"
            name="XRP"><br/>
                <Input
                value={minAdminFund.xrp}
                onChange={(value)=>setMinAdminFund(value)}
                ></Input>
            </Form.Item>
            
          </Form>
          <Button style={{width:'100%'}}>Update</Button>
        </Card>
      </Col>
    </Row>
  </div>
        </LayoutPage>
            
        </>
    )
}
const mapStateToProps = state =>({
    settingData:state.setting.settingData
})
export default connect(mapStateToProps,{getSetting}) (Setting)
