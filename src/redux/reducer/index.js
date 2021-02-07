import { combineReducers } from 'redux'
import Authecation from './auth';

// Using a combine reducers function to combine the reducers
const rootReducer = combineReducers({
  auth: Authecation
})

export default rootReducer;