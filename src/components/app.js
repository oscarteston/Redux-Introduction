import React, {Component} from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDDNVSYCxyCWsOctzIcLCNYd-DRRAW7vrg';

import SearchBar from '../containers/search_bar';
import VideoListConainer from '../containers/video_list_container';
import VideoDetailContainer from '../containers/video_detail_container';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
             <div>
                <SearchBar/>
                <VideoDetailContainer/>
                <VideoListConainer/>
            </div>
        )
    }
}