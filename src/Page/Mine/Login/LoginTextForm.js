import './index.scss'
import React,{Component} from 'react'
import GroupState from "../../../commons/Group"
import { Toast } from 'antd-mobile';
class LoginTextForm extends Component{
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        this.props.loginByPhone({
            phone:this.phone.value,
            code:this.code.value,
            success:data=>{
                console.log(data)
                Toast.success(data,1)
            },
            fail:err=>{
                console.log(err)
                Toast.fail(err,1,()=>{
                    this.code.value=""
                    this.code.focus()
                })
            }
        })
        //取消默认行为
        e.preventDefault()
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="login-content-top">
                    <h3>手机快捷登录</h3>
                    <div className="form">
                        <ul>
                            <li><input ref={el=>this.phone=el} type="text" placeholder="请输入手机号"></input></li>
                            <li><input ref={el=>this.code=el} type="text" placeholder="请输入验证码"></input></li>
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
export default GroupState(LoginTextForm,{
    reducer:"mine",
    states:["userInfo"]
})