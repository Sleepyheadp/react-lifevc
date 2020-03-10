import './index.scss'
import React,{Component} from 'react'
import Login from "./Login"
import User from "./User"
import GroupState from "../../commons/Group"
import {Route} from "react-router-dom"
class Mine extends Component{
    componentWillReceiveProps(props){
        if(props.userInfo !== this.props.userInfo || props.location.pathname ==="/mine"){
            this.checkUserInfo(props)
        }
    }
    componentWillMount(){
        this.checkUserInfo()
    }
    checkUserInfo(props){
        let {userInfo,history} = props || this.props
        if(userInfo){
            history.replace("/mine/user")
        }else{
            history.replace("/mine/login")
        }
    }
    render(){
        return (
            <div className="mine">
                <Route path="/mine/login" component={Login} />
                <Route path="/mine/user" component={User} />
            </div>
        )
    }
}
export default GroupState(Mine,{
    reducer:"mine",
    states:["userInfo"]
})