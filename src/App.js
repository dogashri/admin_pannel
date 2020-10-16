import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import {Provider} from 'react-redux';
import store from './store';
import Login from './Components/Login/Login';
import Users from './Components/Pages/Users';
import UsersDash from './Components/Pages/Layout'

const App = ()=> {

  return (<>
  <Provider store = {store}>
  <Router>
    <Fragment>
      <Route exact path='/' component={Login} />
      {/* <section className='container'></section> */}
      <Switch>
        <Route exact path = '/usersDash' component={UsersDash}/>
      </Switch>
  </Fragment>
  </Router>
  </Provider>
  </>);
}

export default App;
