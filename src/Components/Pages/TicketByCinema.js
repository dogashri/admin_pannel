import { Table } from 'antd';
import React, { useState } from 'react';
import { connect } from 'react-redux'
import {Button, Space,} from 'antd'
import { Link, Redirect } from 'react-router-dom';
import LayoutPage from './Layout';

const TicketByCinema = ({ticketsList }) => {
    const [toCinema,setToCinema] = useState(false)
    // if(toCinema){
        
    //         <Link to = '/cinema'/>
        
    // }
    const CustomcinemaId=({text})=>{
        return(<>
            {text.cinemaName}
            </>
        )
    }
    const CustomreturnValue=({text})=>{
        return(<>
            [text]
            </>
        )
    }

    const columns = [
        {
            title:'Cinema Name',
            dataIndex:'cinemaName',
            render:(text,record)=><CustomcinemaId
            text = {record.cinemaID}
            ></CustomcinemaId>
        },
        {
            title:'Type',
            dataIndex:'ticketType'
        },
        {
            title:'Deposit',
            dataIndex:'depositAmount'
        },
        {
            title:'Return Value',
            dataIndex:'returnvalue',
            render:(text,record)=><CustomreturnValue
            text={record.returnValue}
            ></CustomreturnValue>
        },{
            title:'Investment Period',
            dataIndex:'investmentPeriod'
        },{
            title:'Yield Percentage',
            dataIndex:'yieldPercentage'
        },
        {
            title:'Quantity',
            dataIndex:'quantity'
        }
    ]

    return (
        <>
        <LayoutPage>
        <Table columns={columns} dataSource={ticketsList}>
            
            </Table>
        </LayoutPage>
        
        {/* <Button onClick={()=>setToCinema(true)} Link to ='/usersDash' >cinema</Button> */}
        </>
    )
}
const mapStateToProps = state =>({
    ticketsList:state.ticketByCinema.ticketsList
})
export default connect(mapStateToProps,{})(TicketByCinema)
