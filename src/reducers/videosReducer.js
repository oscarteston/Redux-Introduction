import { ADD_VIDEO } from '../actions/actions'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_VIDEO:
            //return state.push(action.payload.data);
            //return state.concat(action.payload.data);
            return [action.payload, ...state];
        default:
            return state;
    } 
}