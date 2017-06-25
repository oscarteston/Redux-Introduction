import { UPDATE_SEARCH_TEXT } from '../actions/actions'

export default (state = '', action) => {
    switch (action.type) {
        case UPDATE_SEARCH_TEXT:
            return action.text;
        default:
            return state;
    } 
}