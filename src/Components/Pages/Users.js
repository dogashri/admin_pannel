import React, { useState } from 'react';
import {Table} from 'antd';


const Users = () => {
//     const[sortedInfo,setSortedInfo] = useState(null)
// const handleChange = ()=>{
//         setSortedInfo()
//     }

    const columns = [{title:'Name',dataIndex:'name',
    sorter: (a, b) => a.name.length - b.name.length,
    // sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    // ellipsis: true,
},
                     {title:'Role',dataIndex:'role',
                     sorter: (a, b) => a.role.length - b.role.length},
                     {title:'Last online',dataIndex:'online'},
                     {title:'Status',dataIndex:'status'}
                    ]
    const data = [{key:'1',name:'john doe',role:'user',online:1/1/12,status:'online'},
                  {key:'2',name:'don doe',role:'admin',online:1/1/12,status:'online'},
                  {key:'3',name:'mayank',role:'user',online:1/1/12,status:'online'},
                  {key:'4',name:'benzie',role:'admin',online:1/1/12,status:'online'},
                  {key:'5',name:'mogo',role:'user',online:1/1/12,status:'online'},
                  {key:'6',name:'jbrad',role:'admin',online:1/1/12,status:'online'},
                  {key:'7',name:'derek',role:'user',online:1/1/12,status:'online'},
                  {key:'8',name:'john doe',role:'user',online:1/1/12,status:'online'},
                  {key:'9',name:'don doe',role:'admin',online:1/1/12,status:'online'},
                  {key:'10',name:'mayank',role:'user',online:1/1/12,status:'online'},
                  {key:'11',name:'benzie',role:'admin',online:1/1/12,status:'online'},
                  {key:'12',name:'mogo',role:'user',online:1/1/12,status:'online'},
                  {key:'13',name:'jbrad',role:'admin',online:1/1/12,status:'online'},
                  {key:'14',name:'derek',role:'user',online:1/1/12,status:'online'}]
    

    return (
        <Table columns={columns} dataSource={data}>
        </Table>
    )
}

export default Users
