import {CHECK_USER_INFO} from "./const"
export default{
    loginByPhone({phone,code,success,fail}){
        return dispatch=>{
            setTimeout(() => {
               if(phone==="123" && code==="456"){
                   let action = {
                       type:CHECK_USER_INFO,
                       userInfo:{username:"123"}
                   }
                   dispatch(action)
                   success("手机登录成功")
                   return false;
               } 
               fail && fail("手机登录失败")
            }, 1000);
        }
    },
    loginByUser({username,password,success,fail}){
        return dispatch=>{
            setTimeout(() => {
                if(username==="123" && password==="456"){
                    let action = {
                        type:CHECK_USER_INFO,
                        userInfo:{username:"123"}
                    } 
                    dispatch(action)
                    success("用户登录成功")
                    return false;
               }
               fail && fail("用户登录失败")
            }, 1000);
        }
    },
    /* login({username,password,success,fail}){
        return dispatch=>{
            setTimeout(() => {
                if(username==="whale"&&password==="123"){
                    let action  = {
                        type:CHECK_USER_INFO,
                        userInfo:{userInfo:"whale"}
                    }
                    dispatch(action)
                    success("登陆成功")
                    return false;
                }
                fail && fail("登陆失败")
            }, 1000);
        }
    }, */
    exit(){
        let action = {
            type:CHECK_USER_INFO,
            USERInfo:null
        }
        return action;
    }
}