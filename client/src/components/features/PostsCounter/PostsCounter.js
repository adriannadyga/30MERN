import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

    render() {
        const { posts } = this.props;

        return (
            <div>{posts > 0 ? 'Posts amount: ' + posts : ' No posts '}</div>
        )
    }
}

PostsCounter.propTypes = {
    posts: PropTypes.number,
};

export default PostsCounter;