import { connect } from 'react-redux';
import React from 'react';
import {getAllTickets} from '../../actions/allTickets';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import LayoutPage from './Layout';
import { Table } from 'antd';
import { render } from '@testing-library/react';
import Avatar from 'antd/lib/avatar/avatar';

const AllTickets = ({getAllTickets,allTickets,total}) => {

    const location = useLocation()

    useEffect(()=>{
        getAllTickets(location.state.userID)
    },[])

    const CustomCInemaName = ({text})=>{
        return(<>
         {text.cinemaName}
        </>)
       }
       const CustomReturn = ({text})=>{
           return(<>
           {text.mobi}
           {text.xrp}
           {text.eth}
           {text.pazzi}
           </>)
       }

    const columns=[
        {
            title:'S no.',
            dataIndex:'key',
            render:(text,record,index)=>index+1
        },
        {
            title:'Cinema Name',
            dataIndex:'avatarUrl',
            render:(text,record)=><CustomCInemaName
            text={record.cinemaID}
            ></CustomCInemaName>
        },
        {
            title:'Ticket ID',
            dataIndex:'ticketId'
        },
        {
            title:'Type',
            dataIndex:'currency'
        },
        {
            title:'Deposit',
            dataIndex:'depositAmount'
        },
        {
            title:'Return Value',
            dataIndex:'returnValue',
            render:(text,record)=><CustomReturn
            text={record.returnValue}
            ></CustomReturn>
        },
        {
            title:'Investment Period',
            dataIndex:'investmentPeriod'
        },
        {
            title:'Yield %',
            dataIndex:'yieldPercentage'
        },
        {
            title:'Status',
            dataIndex:'status'
        },
        {
            title:'Purchase Date',
            dataIndex:'createdAt'
        },
        {
            title:'Closure Date',
            dataIndex:'closedAt'
        }
    ]


    return (
        <>
        <LayoutPage>
            <Table style={{width:'100%'}} columns={columns} dataSource={allTickets}  scroll={{x:1000}}></Table>
        </LayoutPage>
            
        </>
    )
}

const mapStateToProps= state =>({
    total:state.allTickets.total,
    allTickets:state.allTickets.allTickets

})

export default connect(mapStateToProps,{getAllTickets})(AllTickets)
