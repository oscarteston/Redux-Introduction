import React from 'react';

const videoListItem = ({video, UpdateSelected}) => {
    //const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    const onItemClicked = () => {
        UpdateSelected(video)
    };

    return (
        <li onClick={(e) => onItemClicked()} className ="list-group-item">

            <div className="video-list media">
                <div className = "media-left">
                    <img className = "media-object" src={imageUrl}/>
                </div>
                <div className = "media-body">
                    <div className = "media-heading">{video.snippet.title}</div>
                </div>
            </div>  

        </li>
    )
}

export default videoListItem;