import React from 'react';
import { Select } from 'antd';
import LayoutPage from './Layout'
import styled from 'styled-components';

const { Option } = Select;

function handleChange(value) {
  console.log(value);
}

const TransactionHistory = () => {


    return (
        <>
        <LayoutPage>
            <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
            <Select className="select-design"
    labelInValue
    defaultValue={{ value: 'ETH' }}
    style={{ width: 200,height:35, }}
    bordered={true}
    // onChange={handleChange}
  >
    <Option value="ETH">ETH</Option>
    <Option value="BTC">BTC</Option>
  </Select> 
            </div>
        
        </LayoutPage>
           
        </>
    )
}

export default TransactionHistory
