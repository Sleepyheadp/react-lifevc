import {combineReducers} from 'redux-immutable'
import home from './Home/reducer'
import mine from './Mine/reducer'
// import shopping from './Shopping/reducer'
// import list from './List/reducer'
// import stroll from './Stroll/reducer'
const reducer = combineReducers({
    // home,mine,shopping,list,stroll
    home,mine
})
export default reducer