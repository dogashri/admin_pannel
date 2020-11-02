import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import LayoutPage from './Layout';
import MinDeposit from '../Pages/SettingForms/MinDeposit'
import WithdrawalFees from '../Pages/SettingForms/WithdrawalFees'
import MinWithdrawal from '../Pages/SettingForms/MinWithdrawal'
import MaxWithdrawal from '../Pages/SettingForms/MaxWithdrawal'
import AdminFund from '../Pages/SettingForms/AdminFund'
import {getSetting} from '../../actions/setting'
import { connect } from 'react-redux';


function Setting({getSetting,settingData}) {
    useEffect(()=>{
        getSetting()
    },[])

    
    return (
        <>
        <LayoutPage>
        <div className="site-card-wrapper" style={{width:'100%'}}>
            <Row gutter={50}>
                <Col xs={24} sm={24} lg={12} xl={12}><MinDeposit/></Col>
                <Col xs={24}  sm={24} lg={12} xl={12}><WithdrawalFees/></Col>  
            </Row>

            <Row gutter={50}>
                <Col xs={24} sm={24} lg={12} xl={12}><MinWithdrawal/></Col>
                <Col xs={24} sm={24} lg={12} xl={12}><MaxWithdrawal/></Col>
            </Row>
            
            <Row gutter={50}>
                <Col xs={24} sm={24} lg={12} xl={12}><AdminFund/></Col>
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
