import { connect } from 'react-redux';
import { counterPosts, loadPostsRequest, getRequest } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
    posts: counterPosts(state),
    request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsCounter);