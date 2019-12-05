import { connect } from 'react-redux';
import {getPosts, getRequest, loadPostsByPageRequest, getPages, getPostsPerPage, resetRequest} from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
    posts: getPosts(state),
    request: getRequest(state),
    pages: getPages(state),
    postsPerPage: getPostsPerPage(state),
});

const mapDispatchToProps = dispatch => ({
    loadPostsByPage: (page, postsPerPage) => dispatch(loadPostsByPageRequest(page, postsPerPage)),
    resetRequest: () => dispatch(resetRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);