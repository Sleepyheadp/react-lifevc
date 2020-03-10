import './index.scss'
import React,{Component} from 'react'
import GroupState from "../../../commons/Group"
import { Toast } from 'antd-mobile';
class LoginUserForm extends Component{
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        this.props.loginByUser({
            username:this.username.value,
            password:this.password.value,
            success:data=>{
                console.log(data)
                Toast.success(data,1)
            },
            fail:err=>{
                console.log(err)
                Toast.fail(err,1,()=>{
                    this.password.value=""
                    this.password.focus()
                })
            }
        })
        e.preventDefault()
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="login-content-top">
                    <h3>账号密码登录</h3>
                    <div className="form">
                        <ul>
                            <li><input ref={el=>this.username=el} type="text" placeholder="请输入用户名"></input></li>
                            <li><input ref={el=>this.password=el} type="text" placeholder="请输入密码"></input></li>
                        </ul>
                    </div> 
                </div>
                <div className="login-content-bottom">
                    <button className="btn-submit" type="submit">登录</button>
                    {/* <button className="btn-submit register" type="submit">注册</button> */}
                </div>
            </form>
        )
    }
}
export default GroupState(LoginUserForm,{
    reducer:"mine",
    states:["userInfo"]
})