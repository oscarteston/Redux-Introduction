export const ADD_VIDEO = 'ADD_VIDEO';

export function addVideo(video) {
    //addVideo is an ActionCreator, it needs to return an action
    //an object with a type propertly
    return {
        type: ADD_VIDEO,
        payload: video
    }
};