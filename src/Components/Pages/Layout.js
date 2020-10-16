import React,{useReducer, useState} from 'react'
import { Layout,Input, Menu,Avatar,Dropdown, Breadcrumb, Row } from 'antd';
import { MenuUnfoldOutlined,SearchOutlined,
    MenuFoldOutlined,UserOutlined,BellOutlined,GlobalOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Users from './Users'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search} = Input


const profileMenu=(
    <Menu style={{float:'right'}}>
    <Menu.Item key="1">Name</Menu.Item>
                            <Menu.Divider/>
                            <Menu.Item key="2">Edit profile</Menu.Item>
                            <Menu.Item key="3">Account Setting</Menu.Item>
                            <Menu.Item key="4">Billing</Menu.Item>
                            <Menu.Item key ="5">sign out</Menu.Item>
                            </Menu>
)

function UsersDash() {
    const[collapsed,setcollapsed] = useState(false)
    const toggle =()=> {setcollapsed(!collapsed)
        console.log('toggle is ok')
    }

    // toggle = ()=>{
    //     this.setState({
    //         collapsed:!this.state.collapsed
    //     })
    // }

    return (
        <Layout>
            <Header className="header" style={{ background:'#ffffff'}}>
                <div className="logo"/>
                <Menu theme="light" mode="horizontal" style={{}} >
                    
                    {React.createElement(collapsed?MenuUnfoldOutlined:MenuFoldOutlined,{className:'trigger', onClick:toggle})}
                    <Input className = 'search-input' style={{display:'flex', float:'left', height:'40px',width:'300px',marginTop:'15px',borderRadius:'10px',marginLeft:'20px'}} prefix={<SearchOutlined />} />
                    <Dropdown overlay={profileMenu} style={{float:'right'}} trigger={['click']}>
                        <a className="dropdown-profile" onClick={e => e.preventDefault()}>
                        <Avatar size="large" icon={<UserOutlined />} />
                        </a></Dropdown>
                        <SubMenu key="sub3" style={{float:'right'}} icon={<GlobalOutlined style={{fontSize:'20px'}} />}></SubMenu>
                        <SubMenu key="sub2" style={{float:'right'}} icon={<BellOutlined style={{fontSize:'20px'}}/>} ></SubMenu>
                            
                </Menu>
            </Header>
            <Layout>
                <Sider trigger={null}
                collapsible collapsed={collapsed}
                className = "site-layout-background-sider">
                    <Menu
                    mode="inline"
                    // defaultOpenKeys={['sub1']}
                    style={{height:'100%',borderRight:0}}
                     >
                         <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                            <Menu.Item key="5" href='/usersDash' >option5</Menu.Item>
                            <a className='dummy-link' href='/'><Menu.Item key="6">option6</Menu.Item></a>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                     </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Pages</Breadcrumb.Item>
          <Breadcrumb.Item>User List</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            
            padding: 24,
            margin: 0,
            minHeight: 280,
            background:'#ffffff'
          }}
        >
        <Users/>
        </Content>
      </Layout>
            </Layout>
        </Layout>
        
    )
}


const StyledSubMenu = styled(SubMenu)`
    display:flex;
    alignContent:start;
`

export default UsersDash
