import { connect } from 'react-redux';
import { getRequest, addPostRequest, resetRequest } from '../../../redux/postsRedux';
import PostForm from './PostForm';

const mapStateProps = state => ({
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    addPost: (post) => dispatch(addPostRequest(post)),
    resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateProps, mapDispatchToProps)(PostForm);