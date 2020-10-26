import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {Table} from 'antd';
import LayoutPage from './Layout';
import {getReferralEarning} from '../../actions/referralEarning';
import Column from 'antd/lib/table/Column';

const ReferralEarning = ({getReferralEarning,referralEarn}) => {
    const location = useLocation()
    useEffect(()=>{
        getReferralEarning(location.state.userID,1,10)
    })

    const columns = [
        {
            title:'First Name',
            dataIndex:'firstName'
        },
        {
            title:'Last Name',
            dataIndex:'lastName'
        },
        {
            title:'Email',
            dataIndex:'email'
        },
        {
            title:'Type',
            dataIndex:'type'
        },
        {
            title:'Bonus',
            dataIndex:'bonus'
        }
    ]

    return (
        <>
        <LayoutPage>
            <Table columns={columns} dataSource={referralEarn}></Table>
        </LayoutPage>
            
        </>
    )
}

const mapStateToProps= state =>({
    referralEarn:state.refrelEarning.referralEarning
})

export default connect(mapStateToProps,{getReferralEarning})(ReferralEarning)

