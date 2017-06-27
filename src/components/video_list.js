import React from 'react';
import VideoListItemContainer from '../containers/video_list_item_container';
import video from '../mocks/video';

const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItemContainer
                video={video}/>
        )
    });

    return (
        <div>
            <div className="col-md-4"> 
                <ul className="list-group">
                    {videoItems}
                </ul>
            </div>
        </div>
    )
}

export default VideoList;