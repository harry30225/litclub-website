import axios from "axios";
import { GET_IMAGES, ADD_IMAGE, IMAGES_ERROR } from "./types";

// Get events
//export const getEvents = () => async (dispatch) => {
//    try {
//        const res = await axios.get("/api/event");
//
//        dispatch({
//            type: GET_EVENTS,
//            payload: res.data,
//        });
//    } catch (err) {
//        dispatch({
//            type: EVENTS_ERROR,
//            payload: { msg: "error" },
//        });
//    }
//};

// add image
export const addImage = (title, caption, picture) => async (
    dispatch
) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const body = JSON.stringify({ title, caption, picture });
    try {
        const res = await axios.post(`/api/imageslider/`, body, config);

        dispatch({
            type: ADD_IMAGE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: IMAGES_ERROR,
            payload: { msg: "error" },
        });
    }
};

