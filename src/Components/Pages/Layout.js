import React,{Fragment, useEffect, useReducer, useState} from 'react';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";
import { Layout,Input, Menu,Avatar,Dropdown, Breadcrumb, Row } from 'antd';
import { MenuUnfoldOutlined,SearchOutlined,
    MenuFoldOutlined,UserOutlined,BellOutlined,GlobalOutlined,UnlockTwoTone, LaptopOutlined, NotificationOutlined,SettingTwoTone,VideoCameraTwoTone } from '@ant-design/icons';
import styled from 'styled-components';
import Users from './Users';
import Tickets from './Tickets';
import {logout} from '../../actions/authentication';
import { Redirect } from 'react-router-dom';
import MenuItem from 'antd/lib/menu/MenuItem';
import {useMediaQuery, useMediaQueries} from '@react-hook/media-query';
const Component = () => {
    const matches = useMediaQuery('only screen and (min-width: 850px)')
    return `Matches? ${matches ? 'Matched!' : 'Nope :('}`
  }


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search} = Input




const LayoutPage = ({logout,token,children})=> {
    const history = useHistory();
    const matches = useMediaQuery('only screen and (min-width: 850px)')    

   
    const[collapsed,setcollapsed] = useState(false)
    const toggle =()=> {setcollapsed(!collapsed)
        console.log('toggle is ok')
    }
    useEffect(()=>{
     setcollapsed(!matches)
        console.log(matches)
    },[matches])
    const [loggedin,setloggedin] = useState(true);
    const loggedOut =()=>{setloggedin(logout())
        console.log('logged out clicked')
    }
    
    const[ticketvisible,setticketvisivle] = useState(false)
    const[users,setUsers] = useState(false)
    // const ticketRender = ()=>{settickets({<Tickets/>})

    const profileMenu=(
        <Menu style={{float:'right'}}>
        <Menu.Item key="1">Name</Menu.Item>
                                <Menu.Divider/>
                                <Menu.Item key="2">Edit profile</Menu.Item>
                                <Menu.Item key="3">Account Setting</Menu.Item>
                                <Menu.Item key="4">Billing</Menu.Item>
                                {/* <a className="logout-link" href="/">  */}
                                <Menu.Item key ="5" onClick={()=>loggedOut()}>sign out</Menu.Item>
                                {/* </a> */}
                                </Menu>
    )

    // toggle = ()=>{
    //     this.setState({
    //         collapsed:!this.state.collapsed
    //     })
    // }
    if(!token){
        return <Redirect to = '/'/>
    }
    return (
        <Fragment>
        <Layout>
            <Header className="header" style={{ background:'#ffffff'}}>
                <div className="logo"/>
                <Menu theme="light" mode="horizontal" style={{}} >
                    
                    {React.createElement(collapsed?MenuUnfoldOutlined:MenuFoldOutlined,{className:'trigger', onClick:toggle})}
                    <Input className = 'search-input' style={{ float:'left', height:'40px',width:'250px',marginTop:'13px',borderRadius:'10px',marginLeft:'20px'}} prefix={<SearchOutlined />} />
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
                         <SubMenu key="sub1" icon={<UserOutlined />} title="User List">
                            <Menu.Item key="1" onClick={()=>setticketvisivle(!ticketvisible)} >option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="sub2" onClick={()=>history.push('/cinema')} icon={<VideoCameraTwoTone />}>
                            Cinemas
                        </Menu.Item>
                        <MenuItem key = "sub3" onClick={()=>history.push('/setting')} icon ={<SettingTwoTone />}>Setting</MenuItem>
                        
                        <Menu.Item key="sub3" onClick={()=>history.push('/updatePassword')} icon={<UnlockTwoTone />} title="subnav 3">
                            Update Password
                        </Menu.Item>
                     </Menu>
                </Sider>
                <Layout style={{ display:'flex', padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Pages</Breadcrumb.Item>
          <Breadcrumb.Item>User List</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            display:'flex',
            flexDirection:'row',
            padding: 24,
            margin: 0,
            minHeight: 280,
            background:'#ffffff'
          }}
        >
        {/* {ticketvisible?<Tickets/>:<Users/>} */}
        {children}
        </Content>
      </Layout>
            </Layout>
        </Layout>
        </Fragment>
        
    )
}


const StyledSubMenu = styled(SubMenu)`
    display:flex;
    alignContent:start;
`
const mapStateToProps =()=> state =>({
    token:state.authentication.token,
})
export default connect(mapStateToProps,{logout})(LayoutPage)
