import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import PostList from '../PostList/PostList';

class Posts extends React.Component {

    componentDidMount() {
        const { loadPosts } = this.props;
        loadPosts();
    }

    render() {
        const { posts, request } = this.props;

        if (pending === false && success === true && posts.length > 0) {
            return (
                <div>
                    <PostsList posts={posts} />
                </div>
            );
        } else if (pending === true || success === null) {
            return (
                <div>
                    <Spinner />
                </div>
            );
        } else if (pending === false && error !== null) {
            return (
                <div>
                    <Alert variant={'error'}>{request.error}</Alert>
                </div>
            );
        } else if (pending == false && success === true && posts.length === 0) {
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
        })
    ),
    loadPosts: PropTypes.func.isRequired,
};

export default Posts;