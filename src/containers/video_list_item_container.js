
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UpdateSelected } from '../actions/actions';
import { removeLastVideo } from '../actions/actions';


import VideoList from '../components/video_list_item';


function mapDispatchToProps (dispatch) {
    return bindActionCreators({ UpdateSelected }, dispatch);
}


export default connect(null, mapDispatchToProps)(VideoList);