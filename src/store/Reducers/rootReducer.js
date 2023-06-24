import {combineReducers} from 'redux'
import listUserPerPageReducer from './listUserPerPageReducer';
import listUserReducer from './listUserReducer';

const rootReducer = combineReducers({
    listUser: listUserReducer,
    listUserPerPage: listUserPerPageReducer
});

export default rootReducer