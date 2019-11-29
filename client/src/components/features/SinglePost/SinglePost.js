import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from "react-router-dom";
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from '../../common/SmallTitle/SmallTitle';

class SinglePost extends React.Component {

  componentDidMount() {
    const { loadPost, match} = this.props;
    loadPost(match.params.id);
  }

  render() {
    const {posts, request} = this.props;

    const textin =  request.pending ? ( 
        <Spinner /> 
      ) : request.success ? ( 
         posts.length > 0 ? (
            <article className="post-summary">
                <SmallTitle>{posts[0].title}</SmallTitle>
                <HtmlBox>{posts[0].content}</HtmlBox>
            </article> 
      ) : ( 
        <Alert variant="info"> No posts!!! </Alert>
      )) : ( 
        <Alert variant="error"> {request.error} </Alert>
      );

    return (
      <div> {textin} </div>
    );
  }

};

SinglePost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadPost: PropTypes.func.isRequired,
};


export default withRouter(props => <SinglePost {...props} />);