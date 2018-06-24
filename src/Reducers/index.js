import {action} from '../Actions/index';
import {combineReducers} from 'redux';



let  taskReducer=(state = [],action)=>{
    switch (action.type){
        case 'MOVIES':

            state=state.concat(action.payload);
            console.log(state);
            return state

            break;
    }
    return state;
}

let  reducers=combineReducers({

  tasks:taskReducer

});




export default reducers;
