import state from './state'
import {fromJS} from 'immutable'
const reducer = (prevState = fromJS(state),action)=>{
    switch(action.type){
        default :
            return prevState;
    }
}
export default reducer;