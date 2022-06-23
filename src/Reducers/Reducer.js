// Main Reducer
// Importing the reducer
import ChangeLenguage from './1_Apply_Reducer';
// combine multiple reducer 
import {combineReducers} from 'redux';

// now we can call multiple reducer
// Easy to read
const rootReducer=combineReducers({
    ChangeLenguage
    //,2 printsomthing
})

export default rootReducer;