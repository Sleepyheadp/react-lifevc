import state from "./state"
import {fromJS} from "immutable"
import {CHECK_USER_INFO} from "./const" 
const reducer=(prevState=fromJS(state),action)=>{
    switch(action.type){
        case CHECK_USER_INFO:
            //返回获取到的userInfo的数据
            return prevState.set("userInfo",action.userInfo)
        default:
            return prevState;
    }
}
export default reducer;