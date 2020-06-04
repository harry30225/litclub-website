import {
    GET_BLOGS,
    BLOGS_ERROR,
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
        case BLOGS_ERROR:
            return {
              ...state,
              error: payload,
              loading: false
        };
        default:
        return state;
    }
}