import {
    GET_BLOGS,
    BLOGS_ERROR,
    ADD_BLOG,
    GET_BLOG
} from '../actions/types';
  
const initialState = {
    blogs: [],
    blog: null,
    loading: true,
    error: {}
};
  
export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_BLOGS:
        return {
            ...state,
            blogs: payload,
            loading: false
        };
        case ADD_BLOG:
        return {
            ...state,
            blogs: [payload, ...state.blogs],
            loading: false
        };        
        case BLOGS_ERROR:
            return {
              ...state,
              error: payload,
              loading: false
        };
        case GET_BLOG:
        return {
            ...state,
            blog: payload,
            loading: false
        };           
        default:
        return state;
    }
}