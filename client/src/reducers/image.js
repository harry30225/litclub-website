import {
    GET_IMAGES,
    ADD_IMAGE,
    IMAGES_ERROR
} from '../actions/types';

const initialState = {
    images: [],
    image: null,
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_IMAGES:
            return {
                ...state,
                images: payload,
                loading: false
            };
        case ADD_IMAGE:
            return {
                ...state,
                images: [payload, ...state.images],
                loading: false
            };
        case IMAGES_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}