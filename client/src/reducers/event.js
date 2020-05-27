import {
    GET_EVENTS,
    EVENTS_ERROR,
    ADD_EVENT
} from '../actions/types';
  
const initialState = {
    events: [],
    event: null,
    loading: true,
    error: {}
};
  
export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_EVENTS:
        return {
            ...state,
            events: payload,
            loading: false
        };
        case ADD_EVENT:
        return {
            ...state,
            events: [payload, ...state.events],
            loading: false
        };
        case EVENTS_ERROR:
            return {
              ...state,
              error: payload,
              loading: false
        };
        default:
        return state;
    }
}