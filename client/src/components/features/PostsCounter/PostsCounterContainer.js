import { connect } from 'react-redux';
import { getPosts, getPostsCounter, loadPostsRequest } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
    posts: getPosts(state),
    counter: getPostsCounter(state)
});

const mapDispachToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostsRequest()),
});

export default connect(mapStateToProps, mapDispachToProps)(PostsCounter);