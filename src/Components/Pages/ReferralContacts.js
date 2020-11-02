import { connect } from 'react-redux';
import React from 'react';
import {getReferralContacts} from '../../actions/referralContacts';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import LayoutPage from './Layout';
import { Table } from 'antd';
import { render } from '@testing-library/react';
import Avatar from 'antd/lib/avatar/avatar';

const ReferralContacts = ({getReferralContacts,contacts,total}) => {

    const location = useLocation()

    useEffect(()=>{
        getReferralContacts(location.state.userID,1,10)
    },[])

    const CustomAvatar = ({text})=>{
        return(
            <Avatar src={text}></Avatar>
        )
    }
    const columns=[
        {
            title:'Profile',
            dataIndex:'avatarUrl',
            render:(text,record)=><CustomAvatar
            text={record.avatarUrl}
            ></CustomAvatar>
        },
        {
            title:'First Name',
            dataIndex:'firstName'
        },
        {
            title:'Last Name',
            dataIndex:'lastName'
        },
        {
            title:'E mail',
            dataIndex:'email'
        }
    ]


    return (
        <>
        <LayoutPage>
            <Table style={{width:'100%'}} columns={columns} dataSource={contacts}></Table>
        </LayoutPage>
            
        </>
    )
}

const mapStateToProps= state =>({
    contacts:state.referralContacts.contacts,
    total:state.referralContacts.total

})

export default connect(mapStateToProps,{getReferralContacts})(ReferralContacts)
