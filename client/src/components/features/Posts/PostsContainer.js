import { connect } from 'react-redux';
import { getPosts, getRequest, getPages, loadPostsByPageRequest } from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  pages: getPages(state),
})

const mapDispatchToProps = dispatch => ({
  loadPostByPage: (page) => dispatch(loadPostsByPageRequest(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);