import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from "../../common/Alert/Alert";
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {

    componentDidMount() {
        const { loadPostsByPage, initialPage, postsPerPage } = this.props;
        loadPostsByPage(initialPage || 1, postsPerPage);
    }

    loadPostsPage = (page) => {
        const { loadPostsByPage, postsPerPage } = this.props;
        loadPostsByPage(page, postsPerPage);
    };

    render() {
        const { posts, request, pages, presentPage } = this.props;
        let { pagination } = this.props;
        const { loadPostsPage } = this;

        if (pagination === undefined) {
            pagination = true
        }
        if (request.pending === false && request.success === true && posts.length > 0) {
            return (
                <div>
                    <PostsList posts={posts}/>
                    <Pagination pages={pages} onPageChange={loadPostsPage} initialPage={presentPage} />
                </div>
            );
        } else if (request.pending === true || request.success === null) {
            return (
                <div>
                    <Spinner/>
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
                <div>
                    <Alert variant={'info'}>No posts</Alert>
                </div>
            );
        } else {
            return (
                <div>
                    <Alert variant={'info'}>Something went wrong...</Alert>
                </div>
            );
        }
    }
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        })
    ),
    loadPostsByPage: PropTypes.func.isRequired,
};

export default Posts;