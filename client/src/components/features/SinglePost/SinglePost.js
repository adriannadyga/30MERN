import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from "react-router-dom";
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import { resetRequest } from '../../../redux/postsRedux';

class SinglePost extends React.Component {

  componentDidMount() {
    const { loadPost, match} = this.props;
    loadPost(match.params.id);
    resetRequest();
  }

  render() {
    const {posts, request} = this.props;

    if (request.pending === false && request.success === true && posts ) {
      return (
          <div>
              <article>
                  <SmallTitle>{posts[0].title}</SmallTitle>
                  <p>Author: {posts[0].author}</p>
                  <HtmlBox>{posts[0].content}</HtmlBox>
              </article>
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
  } else if (request.pending === false && request.success === true) {
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

SinglePost.propTypes = {
posts: PropTypes.arrayOf(
  PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
  })
),
loadPost: PropTypes.func.isRequired,
};

export default withRouter(props => <SinglePost {...props}/>);