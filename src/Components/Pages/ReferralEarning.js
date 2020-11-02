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
    },[])

    const CustomName = ({text})=>{
        return(<>
               { text.firstName+" "} {text.lastName}
        </>)
    }
    const CustomEmail = ({text})=>{
        return(<>
        {text.email}
        </>)
    }

    const columns = [
        {
            title:'Full Name',
            dataIndex:'user',
            render:(text,record)=><CustomName
            text = {record.user}
            ></CustomName>
        },
        {
            title:'Email',
            dataIndex:'email',
            render:(text,record)=><CustomEmail
            text={record.user}
            ></CustomEmail>
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
            <Table style={{width:"100%"}} columns={columns} dataSource={referralEarn}></Table>
        </LayoutPage>
            
        </>
    )
}

const mapStateToProps= state =>({
    referralEarn:state.refrelEarning.referralEarning
})

export default connect(mapStateToProps,{getReferralEarning})(ReferralEarning)

