import {combineReducers} from 'redux'
import sessionReducer  from './session/sessionReducer'

const rootReducer = combineReducers({
    session: sessionReducer
})

export default rootReducer