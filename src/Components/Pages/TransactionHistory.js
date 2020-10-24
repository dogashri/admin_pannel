import React from 'react';
import { Select } from 'antd';
import LayoutPage from './Layout'

const TransactionHistory = () => {

const { Option } = Select;

function handleChange(value) {
  console.log(value);
}
    return (
        <>
        <LayoutPage>
        <Select
    labelInValue
    defaultValue={{ value: 'ETH' }}
    style={{ width: 120 }}
    onChange={handleChange}
  >
    <Option value="ETH">ETH</Option>
    <Option value="BTC">BTC</Option>
  </Select> 
        </LayoutPage>
           
        </>
    )
}

export default TransactionHistory
