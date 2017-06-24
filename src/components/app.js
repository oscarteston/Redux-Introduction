import React, {Component} from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDDNVSYCxyCWsOctzIcLCNYd-DRRAW7vrg';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.videoSearch('accedo');
    }

    videoSearch(searchText) {
        YTSearch({key: API_KEY,term: searchText},(videos) => {
            this.setState((prevState)=>({
                videos: videos,
                selectedVideo: videos[0]
            }));
        });
    }

    onVideoSelect(selectedVideo) {
        this.setState({selectedVideo})
    }
 
    render() {
        const videoSearch = _.debounce((searchText)=>{this.videoSearch(searchText)}, 300);

        return (
             <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    videos={this.state.videos}
                    onVideoSelect = {this.onVideoSelect}/>
            </div>
        )
    }
}