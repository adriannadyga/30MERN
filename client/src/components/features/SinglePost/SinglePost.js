import React from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../../common/Spinner/Spinner';
import Alert from "../../common/Alert/Alert";
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import { withRouter } from 'react-router-dom';

class SinglePost extends React.Component {

    componentDidMount() {
        const {loadPost, match} = this.props;
        loadPost(match.params.id);
    }

    render() {
        const {posts, request} = this.props;
    
        const text =  request.pending ? ( 
            <Spinner /> 
          ) : request.success ? ( 
             posts.length > 0 ? (
                <article className="post-summary">
                  <SmallTitle>{posts[0].title}</SmallTitle>
                  <HtmlBox>{posts[0].content}</HtmlBox>
                  <p>Author: {posts[0].author}</p>
                </article> 
          ) : ( 
            <Alert variant="info"> No posts!!! </Alert>
          )) : ( 
            <Alert variant={'info'}>Something went wrong...</Alert>
          );
    
        return (
          <div> 
            {text} 
          </div>
        );
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