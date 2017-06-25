import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import VideoDetail from '../components/video_detail';


function mapStateToProps (state) {
    return {
        video: state.selectedVideo
    };
}


export default connect(mapStateToProps)(VideoDetail);