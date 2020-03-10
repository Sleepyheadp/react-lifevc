import  React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Group from '../Group'
import './index.scss'
class App_Footer extends Component{
    componentDidMount(){
        this.props.getBanners()
    }
    renderNavs(){
        let {navs} =this.props
        return (
            navs.map(item=>{
                return (
                    <NavLink key={item.id} to={item.path} exact={item.exact}>
                        <i className={'fa fa-'+item.icon}></i>
                        <span>{item.title}</span>
                    </NavLink>
                )
            })
        )
    }
    render(){
        return (
            <div className='footerNav'>
                {this.renderNavs()}
            </div>
        )
    }
 
}
App_Footer.defaultProps={
    navs:[
        {id:1,title:'首页',icon:'home',path:'/home',exact:false},
        {id:2,title:'全部产品',icon:'list',path:'/list',exact:false},
        {id:3,title:'闲逛',icon:'compass',path:'/stroll',exact:false},
        {id:4,title:'购物车',icon:'shopping-cart',path:'/shopping',exact:false},
        {id:5,title:'账户中心',icon:'user',path:'/mine',exact:false}
    ]
}
export default withRouter(Group(App_Footer,{
    reducer:'home',
    states:['banners']
}))