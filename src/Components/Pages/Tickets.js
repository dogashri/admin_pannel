import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";
import {Button, Space, Table} from 'antd'
import {getCinema} from '../../actions/cinema';
import {getTicketByCinema} from '../../actions/tickets'
import TicketByCinema from './TicketByCinema';
import { Redirect } from 'react-router-dom';
import LayoutPage from './Layout'

const Tickets = ({getCinema,cinemaList,getTicketByCinema}) => {
    useEffect(()=>{
    getCinema()
    getTicketByCinema()
    // getTicketByCinema()
    },[])

    // console.log(cinemaList)
    const history = useHistory()
    const [tickets,setTickets] = useState(false)
    // if(tickets==false){
    //     return <Redirect to="/cinema"></Redirect>
    // }
    // // if(!tickets){ 
    //     return <Redirect to = '/usersDash'/>
    // }
    // const tickethandler =()=>{
    //     setTickets(getTicketByCinema())
    // }
        
    


   const CustomFees = ({text})=>{
       return(<>
             basic { text.basic} <br/>
            super {text.super}
       </>)
   }


    const columns = [
        {title:'Cinema Name',
        dataIndex:'cinemaName'
        },
        {title:'Fees',
        dataIndex:'fees',
        render:(text,record)=><CustomFees
        text={record.fees}
        />
        
        },
        {title:'Membership',
        dataIndex:'allowMembership'
        },
        {
            title:'Min Yield %',
            dataIndex:'minYieldPercentage'
        },
        {
            title:'Max yeild %',
            dataIndex:'maxYieldPercentage'
        },
        {
            title:'Tickets',
            render:(text,record)=>(<Space>
                <Button onClick={()=>{getTicketByCinema(record._id);history.push('/tickets')}}>view</Button>
            </Space>)
        }
    ]




    return (<>
    <LayoutPage>
    <Table style={{display:'flex',flexDirection:'inherit', float:'center'}} columns={columns} dataSource={cinemaList} >
        </Table>
    </LayoutPage>
        
        
        </>
    )
}

const mapStateToProps = state =>({
    cinemaList:state.getCinema.cinemaList,
    ticketsList:state.ticketByCinema.ticketsList
})

export default connect(mapStateToProps,{getCinema,getTicketByCinema})(Tickets)
