import { combineReducers } from 'redux';
import searchTextReducer from './searchTextReducer';
import videosReducer from './videosReducer';
import selectedVideoReducer from './selectedVideoReducer';

const appReducer = combineReducers({
    searchText: searchTextReducer,
    videos: videosReducer,
    selectedVideo: selectedVideoReducer
});

export default appReducer;