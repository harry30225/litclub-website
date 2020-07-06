import {
    GET_EVENTS,
    EVENTS_ERROR,
    ADD_EVENT,
    DELETE_EVENT,
    EDIT_EVENT,
    GET_EVENT,
    GET_LATESTEVENT,
} from '../actions/types';

const initialState = {
    events: [],
    event: null,
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
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
        case DELETE_EVENT:
            return {
                ...state,
                events: state.events.filter(event => event._id !== payload),
                loading: false
            };
        case EDIT_EVENT:
            return {
                ...state,
                events: state.events.map(event => event._id === payload._id ? payload : event),
                loading: false
            };
        case GET_EVENT:
            return {
                ...state,
                event: payload,
                loading: false
            };
        case GET_LATESTEVENT:
            return {
                ...state,
                event: payload,
                loading: false
            };
        default:
            return state;
    }
}