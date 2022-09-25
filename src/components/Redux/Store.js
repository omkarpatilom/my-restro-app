import combineRed from '../Redux/CombineReducer';
import {createStore} from 'redux';

const store=createStore(combineRed);