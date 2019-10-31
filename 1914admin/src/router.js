import React,{Fragment} from 'react'
import {HashRouter,Route,withRouter,Redirect,Switch} from 'react-router-dom'
import Login from './pages/login/index'
import Admin from './pages/admin/index'
import Home from './pages/home/home'
import User from './pages/user/user'
import Set from './pages/set/set'
class RootRoute extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={()=>{
                    return(
                        <Admin>
                            <Route path='/admin/home' component={Home}></Route>
                            <Route path='/admin/user' component={User}></Route>
                            <Route path='/admin/set' component={Set}></Route>
                        </Admin>
                    )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default RootRoute