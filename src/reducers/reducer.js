import { combineReducers } from 'redux';
import videosReducer from './videosReducer';
import selectedVideoReducer from './selectedVideoReducer';

const reducer = combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer
});

export default reducer;