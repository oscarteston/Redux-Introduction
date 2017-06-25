import { UPDATE_VIDEOS } from '../actions/actions'

export default (state = [], action) => {
    switch (action.type) {
        case UPDATE_VIDEOS:
            return [action.videos, ...state];
        default:
            return state;
    } 
}