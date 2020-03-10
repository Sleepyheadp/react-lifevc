import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from './actionCreators'


const GroupState =  (UIcomponent,option)=>{
    return connect(state=>{
        let {reducer,states} = option
        
        let _state ={}
        states.forEach(item=>{
            _state[item] = state.getIn([reducer,item])
        })
        
        return _state
    },dispatch=>{
        return bindActionCreators(actionCreators[option.reducer],dispatch)
    })(UIcomponent)
}  
export default GroupState