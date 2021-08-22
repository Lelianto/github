import { combineReducers } from 'redux'
import { userReducer } from './userReducers'
import { orgReducer } from './orgReducers'

export default combineReducers({
	userReducer,
	orgReducer
})