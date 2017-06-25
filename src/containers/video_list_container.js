
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addVideo } from '../actions/actions';
import { removeLastVideo } from '../actions/actions';


import VideoList from '../components/video_list';


function mapStateToProps (state) {
    return {
        videos: state.videos
    };
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addVideo, removeLastVideo }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoList);