import { UPDATE_SELECTED_VIDEO } from '../actions/actions'

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_SELECTED_VIDEO:
            return Object.assign({},state, action.selectedVideo);
        default:
            return state;
    } 
}