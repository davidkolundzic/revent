import { createReducer } from "../../../app/common/util/reducerUtil";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./TestConstants";
// import { incrementCounter } from './TestActions';

const initState={
    data:70
};

export const incrementCounter = (state, payload) => {
    return {...state, data:state.data +1 };
}

export const decrementCounter = (state, payload) => {
    return {...state, data: state.data -1}
}
// const testReducer = (state = initState, action)=>{
//     switch (action.type) {
//         case  INCREMENT_COUNTER:
//             return {...state, data: state.data +1}
//         case DECREMENT_COUNTER:
//             return {...state, data: state.data -1}
//         default:
//             return state;
//     }
//     // return state;
// }

export default createReducer(initState, {
    [INCREMENT_COUNTER] : incrementCounter,
    [DECREMENT_COUNTER] : decrementCounter
});