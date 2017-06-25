import { UPDATE_VIDEOS } from '../actions/actions';
import { ADD_VIDEO } from '../actions/actions';
import { REMOVE_LAST_VIDEO } from '../actions/actions';

const removeLastVideo = (videos) => {
    return videos.slice(0, videos.length-1)
}

export default (state = [], action) => {
    switch (action.type) {
        case UPDATE_VIDEOS:
            return [action.videos];
        case ADD_VIDEO:
            debugger
            return [...state, action.video];
        case REMOVE_LAST_VIDEO:
            return state.slice(0, state.length-1)

        default:
            return state;
    } 
}