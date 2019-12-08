import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from "../../common/Alert/Alert";
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {

    componentDidMount() {
        const { loadPostsByPage, initialPage, postsPerPage } = this.props;
        loadPostsByPage(initialPage, postsPerPage);
    }

    loadPostsPage = (page) => {
        const { loadPostsByPage, postsPerPage } = this.props;
        loadPostsByPage(page, postsPerPage);
    };

    render() {
        const {posts, request, pages, pagination, presentPage} = this.props;
        const {loadPostsPage} = this;
    
        const text =  request.pending ? ( 
            <Spinner /> 
          ) : request.success && posts.length > 0 ? ( 
            pagination === true ? (
              <div>
                <PostsList posts={posts} />
                <Pagination pages={pages} onPageChange={loadPostsPage} initialPage={presentPage} />
              </div>
          ) : ( 
              <PostsList posts={posts} />
          )) :  (
             ( 
            //  <Alert variant="error"> {request.error} </Alert> ||
              <Alert variant="info"> No posts </Alert>) 
          );
         
        return (
          <div> {text} </div>
        );
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

Posts.defaultProps = {
    initialPage: 1,
    postsPerPage: 10,
    pagination: true
  };

export default Posts;