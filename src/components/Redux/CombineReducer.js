import decrementReducer from '../Redux/DecrementReducer';
import incrementReducer from '../Redux/incrementReducer';
import { combineReducers } from 'redux';
const combineRed = combineReducers({ incrementReducer, decrementReducer })

export default combineRed;