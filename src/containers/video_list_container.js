
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateVideos } from '../actions/actions';


import VideoList from '../components/video_list';


function mapStateToProps (state) {
    return {
        videos: state.videos
    };
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ updateVideos }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoList);