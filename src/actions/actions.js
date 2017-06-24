export const ADD_VIDEO = 'ADD_VIDEO';
export const TOOGLE_SELECTED = 'TOOGLE_SELECTED';

export function addVideo(video) {
    //addVideo is an ActionCreator, it needs to return an action
    //an object with a type propertly
    return {
        type: ADD_VIDEO,
        payload: video
    }
};

export function toogleSelected(video) {
    //addVideo is an ActionCreator, it needs to return an action
    //an object with a type propertly
    return {
        type: TOOGLE_SELECTED,
        payload: video
    }
};