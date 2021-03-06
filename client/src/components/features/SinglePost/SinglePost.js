import React from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../../common/Spinner/Spinner';
import Alert from "../../common/Alert/Alert";
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import { withRouter } from 'react-router-dom';

import { FacebookProvider, Comments, Share, ShareButton } from 'react-facebook';
import { BASE_URL} from "../../../config";

class SinglePost extends React.Component {

    componentDidMount() {
        const {loadPost, match} = this.props;
        loadPost(match.params.id);
    }

    render() {
        const {posts, request, location} = this.props;
    
        const text =  request.pending ? ( 
            <Spinner /> 
          ) : request.success ? ( 
             posts.length > 0 ? (
                <article className="post-summary">
                  <SmallTitle>{posts[0].title}</SmallTitle>
                  <HtmlBox>{posts[0].content}</HtmlBox>
                  <p>Author: {posts[0].author}</p>
                  <FacebookProvider appId="2471797863074135">
                    <ShareButton href={`${BASE_URL}/${location.pathname}`} >
                      Udostępnij
                    </ShareButton>
                    <Comments href={`${BASE_URL}/${location.pathname}`} />
                  </FacebookProvider>
                </article> 
          ) : ( 
            <Alert variant="info">No posts</Alert>
          )) : ( 
            <Alert variant={'info'}>Something went wrong</Alert>
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