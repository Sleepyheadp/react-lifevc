import './index.scss'
import React,{Component} from 'react'
import Public from "../public"
import GroupState from "../../../commons/Group"
class User extends Component{
    constructor(){
        super();
        this.exit = this.exit.bind(this)
    }
    exit(){
        this.props.exit()
        //退出以后跳转到登录页面
        //this.props.history.replace("/mine/login")
    }
    render(){
        return (
            <div className="mine">
                <div className="top">
                    <p className="counter">账户中心</p>
                    <span className="set">设置</span>    
                </div>
                <div className="entry">
                    <i className="fa fa-user"></i>
                    <p className="notlogin">whale</p>
                    <i className="fa fa-share-square-o"><button onClick={this.exit}>退出</button></i>
                    {/* <div className="func">
                        <a>登录</a>
                        <span></span>
                        <a>注册</a>
                    </div> */}
                </div>
                <Public />
            </div>
        )
    }
}
export default GroupState(User,{
    reducer:"mine",
    states:["userInfo"]
})