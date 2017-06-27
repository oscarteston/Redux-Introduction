import axios from 'axios';

export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
export const UPDATE_VIDEOS = 'UPDATE_VIDEOS';
export const ADD_VIDEO = 'ADD_VIDEO';
export const REMOVE_LAST_VIDEO = 'REMOVE_VIDEO';
export const UPDATE_SELECTED_VIDEO = 'UPDATE_SELECTED_VIDEO';

const API_KEY = 'AIzaSyDDNVSYCxyCWsOctzIcLCNYd-DRRAW7vrg';

export function updateSearchText(text) {
    return {
        type: UPDATE_SEARCH_TEXT,
        text: text
    }
};

export function updateVideos(searchText) {

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&type=video&q=${searchText}`;
    const request = axios.get(url);

    return (dispatch, getState) => {
        axios.get(url)
            .then((response)=>{
                dispatch({
                    type: UPDATE_VIDEOS,
                    payload: response.data.items 
                })
            })
    }
};

export function UpdateSelected(video) {
    return {
        type: UPDATE_SELECTED_VIDEO,
        selectedVideo: video
    }
};