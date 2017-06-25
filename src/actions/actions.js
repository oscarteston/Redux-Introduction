export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
export const UPDATE_VIDEOS = 'UPDATE_VIDEOS';
export const ADD_VIDEO = 'ADD_VIDEO';
export const REMOVE_LAST_VIDEO = 'REMOVE_VIDEO';
export const UPDATE_SELECTED_VIDEO = 'UPDATE_SELECTED_VIDEO';

export function updateSearchText(text) {
    return {
        type: UPDATE_SEARCH_TEXT,
        text: text
    }
};

export function updateVideos(videos) {
    return {
        type: UPDATE_VIDEOS,
        videos: videos
    }
};

export function addVideo(video) {
    return {
        type: ADD_VIDEO,
        video: video
    }
};

export function removeLastVideo() {
    return {
        type: REMOVE_LAST_VIDEO
    }
};


export function toogleSelected(video) {
    return {
        type: UPDATE_SELECTED_VIDEO,
        selectedVideo: video
    }
};