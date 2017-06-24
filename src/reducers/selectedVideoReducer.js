import { TOOGLE_SELECTED } from '../actions/actions'

export default (state = {}, action) => {
    switch (action.type) {
        case TOOGLE_SELECTED:
            return Object.assign({},state, action.payload);
        default:
            return state;
    } 
}