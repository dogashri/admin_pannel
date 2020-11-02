import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import {Divider, Table, Tag,Badge, Space,Modal} from 'antd';
import {loadUser} from '../../actions/users'
import { connect } from 'react-redux';
import * as ReactBootStrap from 'react-bootstrap';
import Spinner from '../../assets/spinner';
import LayoutPage from './Layout';
import {getTransaction} from '../../actions/transaction';


const Users = ({loadUser,getTransaction, usersList,loading}) => {
    useEffect(()=>{
    loadUser()
    // getTransaction()
    },[])
console.log(usersList);
const history = useHistory()
const data = usersList;


const CustomStatus = ({text,status}) => {
    const color = status?"success":"error"
    return (<>
     <Badge status={color} text={text}  />
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
const[modal,setModal] = useState(false);
const[ethAddress,setEthAddress] = useState(null)
const [tag,setTag] = useState(null)
const [ethBalance,setEthBalance] = useState(null)
const [mobiBalance,setMobiBalance] = useState(null);
const [pazziBalance,setPazziBalance] = useState(null);
const [xrpBalance,setXrpBalance] = useState(null)
const [usdtBalance,setUsdtBalance] = useState(null);

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
        render:(text,record)=>(<Space>
            <Link to ={{pathname:'/transaction',
            state:{
            userID:record._id
            }}}>View Transaction History</Link>|

           <Link to = {{pathname:'/referralEarning',
           state:{
           userID:record._id
           }}}>View Referrel earning</Link>|

           <Link to={{pathname:'/referralContacts',
           state:{userID:record._id
           }}}>View Referrel Contacts</Link>|
           <br/>

           <a onClick={()=>{setModal(!modal);
            setEthAddress(record.ethAddress);
            setTag(record.tag)
            setEthBalance(record.ethBalance)
            setMobiBalance(record.mobiBalance)
            setPazziBalance(record.pazziBalance)
            setXrpBalance(record.xrpBalance)
            setUsdtBalance(record.usdtBalance)
            }} >View Balances</a>|

           <Link to = {{pathname:'/allTickets',
           state:{userID:record._id
           }}}>View Tickets</Link>
        </Space>)
        }
                    ]
        function onChange(sorter){
            console.log('params',sorter)
        }
   
    

    return (
        <LayoutPage>
        <Table loading={loading} style={{width:'100%',padding:'10px'}} rowKey={null} columns={columns} dataSource={data} onChange={onChange} scroll={{x:100}}>
            
        </Table>
        <Modal
        visible={modal}
        onCancel={()=>setModal(!modal)}
        onOk={()=>setModal(!modal)}
        >
            <p>Ethereum Address-<br/>{ethAddress}</p>
            <p>tag- <br/>{tag} </p>
            <p>ETH Balance- <br/> {ethBalance}</p>
            <p>MOBI Balance- <br/> {mobiBalance}</p>
            <p>PAZZI Balance- <br/> {pazziBalance}</p>
            <p>XRP Balance- <br/> {xrpBalance}</p>
            <p>USDT Balance- <br/> {usdtBalance}</p>
</Modal>
        </LayoutPage>

        /* {!loading?<Spinner animation="border" style={{width:'200px',margin:'auto',display:'block'}}/>: */
        
        
    )
}
const mapStateToProps = state=>({
    usersList:state.users.usersList,
    loading:state.users.loading
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