import React from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import PostList from '../PostList/PostList';
// import { resetRequest } from '../../../redux/postsRedux';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {

    componentDidMount() {
        const { loadPostsByPage } = this.props;
        loadPostsByPage(1);
      }

    loadPostsPage = (page) => {
        const { loadPostsByPage } = this.props;
        loadPostsByPage(page);
    }

    render() {
        const { posts, request, pages } = this.props;
		const { loadPostsPage } = this;

        if (request.pending === false && request.success === true && posts.length > 0) {
            return (
                <div>
                    <PostList posts={posts} />
                    <Pagination pages={pages} onPageChange={loadPostsPage}/>
                </div>
            );
        } else if (request.pending === true || request.success === null) {
            return (
                <div>
                    <Spinner />
                </div>
            );
        } else if (request.pending === false && request.error !== null) {
            return (
                <div>
                    <Alert variant={'error'}>{request.error}</Alert>
                </div>
            );
        } else if (request.pending === false && request.success === true && posts.length === 0) {
            return (
                <Alert variant={'info'}>No posts</Alert>
            );
        }
    }
};

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        })
    ),
    loadPostByPage: PropTypes.func.isRequired,
};

export default Posts;