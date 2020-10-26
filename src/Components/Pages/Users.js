import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import {Divider, Table, Tag,Badge, Space} from 'antd';
import {loadUser} from '../../actions/users'
import { connect } from 'react-redux';
import * as ReactBootStrap from 'react-bootstrap';
import Spinner from '../../assets/spinner';
import LayoutPage from './Layout';
import {getTransaction} from '../../actions/transaction';


const Users = ({loadUser,getTransaction, usersList,loading}) => {
    useEffect(()=>{
    loadUser()
    getTransaction()
    },[])
console.log(usersList);
const history = useHistory()
// console.log(loggedIn);
const data = usersList;
// console.log(data[0].isVerified)

const CustomStatus = ({text,status}) => {
    const color = status?"success":"error"
    return (<>
    {/* <Flex style={{fontSize:"10px",justifyContent:"left",padding:"0em",paddingLeft:"0.5em"}}> */}
     <Badge status={color} text={text}  />
    {/* </Flex> */}
    </>)
}
const CustomVerification = ({text,status})=>{
    const color = status?"processing":"error"
    return(
        <>
        <Badge status={color} text={text}/>
        </>
    )
}

    const columns = [
        {
            title:'S no.',
            dataIndex:'key',
            render:(text,record,index)=>index+1
        },
        {
        title:'Firstname',
        dataIndex:'firstName',
        sorter:(a,b)=>a.firstName.length-b.firstName.length
        },
        {
        title:'Lastname',
        dataIndex:'lastName'
        },
        {
        title:'Email',
        dataIndex:'email'
        },
        {
        title:'Membership',
        dataIndex:'membershipType',
        sorter: (a, b) => a.membershipType.length - b.membershipType.length},
        {
        title:'Verified',
        dataIndex:'isVerified',
        render:
        (text,record)=><CustomVerification
        status={record.isVerified}
        text={record.isVerified?"Verified":"Not Verified"}
                              />
        },
        {
        title:'Status',
        dataIndex:'isActive',
        render:(text,record)=><CustomStatus 
                                    status={record.isActive}
                                    text={record.isActive?"Active":"Inactive"}
                                    />
        },
        {
        title:'Action',
        key:'action',
        render:(text,record)=>(<Space><Link to ={{pathname:'/transaction',state:{
            userID:record._id
        }}}>View Transaction History</Link>|
        <a href = "">View Referrel earning</a>|<a href="">View Referrel Contacts</a>|<br/>
        <a href="">View Balances</a>|<a href="">View Tickets</a>
        </Space>)
        }
                    ]
        function onChange(sorter){
            console.log('params',sorter)
        }
   
    

    return (
        <LayoutPage>
{loading===true?<Spinner/>:
        <Table style={{float:'center',padding:'10px'}} rowKey={null} columns={columns} dataSource={data} onChange={onChange} scroll={{x:1000}}>
        </Table>}
        </LayoutPage>

        /* {!loading?<Spinner animation="border" style={{width:'200px',margin:'auto',display:'block'}}/>: */
        
        
    )
}
const mapStateToProps = state=>({
    usersList:state.users.usersList,
    loading:state.authentication.loading
})
export default connect(mapStateToProps,{loadUser,getTransaction}) (Users)


const colors={
    0:"success",
    1:"error",
    3:"processing"                                       
}

const statusText={
    // 0:data.isActive.true,
    // 1:usersList.isActive.false,
}