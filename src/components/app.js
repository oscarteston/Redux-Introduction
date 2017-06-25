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
    }

    render() {
        return (
             <div>
                <SearchBar/>
                <VideoDetail/>
                <VideoList/>
            </div>
        )
    }
}