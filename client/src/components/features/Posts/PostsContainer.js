import { connect } from 'react-redux';
import { getPosts, getRequest, getPages, loadPostsByPageRequest, getPresentPage} from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
	posts: getPosts(state),
	request: getRequest(state),
	pages: getPages(state),
	presentPage: getPresentPage(state)
})

const mapDispatchToProps = dispatch => ({
	loadPostByPage: (page, postsPerPage) => dispatch(loadPostsByPageRequest(page, postsPerPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);