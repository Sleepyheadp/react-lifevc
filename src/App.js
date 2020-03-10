import React,{Component} from 'react';
////引入一级路由页面
import {Home,List,Mine,Shopping,Stroll} from './Page'
//引入路由插件
import {withRouter,Route,Switch,Redirect} from 'react-router-dom'
//引入公共底部组件
import AppFooter from './commons/App-footer'
class App extends Component{
  getrender(){
    let {navs} = this.props
    return (
      <Switch>
         {
           navs.map(item=>{
             return (
               <Route key={item.id} path={item.path} component={item.component} exact={item.exact}/>  
             )
           })
         }
         <Redirect to='/home'></Redirect>
      </Switch>
    )
  }
  //新添加的renderAppFooter，判断路径如果是/mine/login就不显示AppFooter
  renderAppFooter(){
    let pathname = this.props.location.pathname
    if(pathname === "/mine/login") return false
    return <AppFooter />
  }
  render(){
    return (
      <div>
        {this.getrender()}
        {this.renderAppFooter()}
      </div>
    )
  }
}
App.defaultProps = {
  navs:[
    {id:1,title:"首页",path:'/home',component:Home,exact:false},
    {id:2,title:"全部产品",path:'/list',component:List,exact:false},
    {id:3,title:"闲逛",path:'/stroll',component:Stroll,exact:false},
    {id:4,title:"购物车",path:'/shopping',component:Shopping,exact:false},
    {id:5,title:"账户中心",path:'/mine',component:Mine,exact:false},
  ]
}


export default withRouter(App);
