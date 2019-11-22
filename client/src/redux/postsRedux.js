import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getPosts = ({ posts }) => posts;
export const getPostsCounter = ({ posts }) => posts.length;

/* ACTIONS */
//action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const loadPosts = payload => ({payload, type: LOAD_POSTS});

/* THUNKS */
export const loadPostsRequest = () => {
    return async dispatch => {

        try {

            let res = await axios.get(`${API_URL}/posts`);
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));
            dispatch(loadPosts(res.data));

        } catch(e) {
        console.log(e.message);
        }

    };
};

/* INITIAL STATE */

const initialState = [];

/* REDUCER */

export default function reducer (statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_POSTS:
            return [ ...action.payload ];
        default:
            return statePart;
    }
};