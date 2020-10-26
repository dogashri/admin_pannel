import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import { Select,Table } from 'antd';
import LayoutPage from './Layout'
import styled from 'styled-components';
import {getTransaction} from '../../actions/transaction';

const { Option } = Select;



const TransactionHistory = ({getTransaction, total,transactionList}) => {
  const location = useLocation()
  console.log(location)
 

const [pagination,setPagination] = useState(1)
const [currency,setCurrency] = useState("ETH")

useEffect(()=>{
  console.log('useeffect chal rha')
  getTransaction(currency,location.state.userID,pagination,10)
},[pagination,currency])


const columns = [
  {
    title:'Type',
    dataIndex:'type'
  },
  {
    title:'Amount',
    dataIndex:'amount'
  },
  {
    title:'Fees',
    dataIndex:'fees'
  },
  {
    title:'Opening Balance',
    dataIndex:'openingBalance'
  },
  {
    title:'Ending Balance',
    dataIndex:'endingBalance'
  },
  {
    title:'Data Time',
    dataIndex:'updatedAt'
  },
  {
    title:'Action'
  }
]
// const setCurrency =(val)=> setFilterData({
//   ...filterData,
//   currency:val
// })

    return (
        <>
        <LayoutPage>
          <div style={{float:'right'}}>
            <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
            <Select className="select-design"
    labelInValue
    defaultValue={{ value: 'ETH' }}
    style={{ width: 200,height:35, }}
    bordered={true}
    onChange={(value)=>setCurrency(value.value)}
  >
    <Option value="ETH" onCLick={(e)=>console.log(e.target.value.value)}>ETH</Option>
    <Option value="XRP" onCLick={(e)=>console.log(e.target.value.value)} >XRP</Option>
    <Option value="MOBI" onCLick={(e)=>console.log(e.target.value.value)}>MOBI</Option>
    <Option value="PAZZI" onCLick={(e)=>console.log(e.target.value.value)}>PAZZI</Option>
    <Option value="USDT" onCLick={(e)=>console.log(e.target.value.value)}>USDT</Option>
  </Select> 
  
  </div>
  <Table style={{float:'inherit', padding:'10px'}} scroll={{x:''}} columns={columns} 
  dataSource={transactionList}
  pagination={{ current:pagination, pageSize:10,total:total,onChange:(page)=>setPagination(page)}}></Table>
  </div>
  
        
        </LayoutPage>
           
        </>
    )
}
const mapStateToProps=state=>({
    total:state.transactionHistory.total,
    transactionList:state.transactionHistory.transactions
})

export default connect(mapStateToProps,{getTransaction})(TransactionHistory)
