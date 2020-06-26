import axios from "axios";
import { GET_IMAGES, ADD_IMAGE, IMAGES_ERROR } from "./types";

//Get images
export const getImages = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/image");
        dispatch({
            type: GET_IMAGES,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: IMAGES_ERROR,
            payload: { msg: "error" },
        });
    }
};

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
        const res = await axios.post(`/api/image/`, body, config);

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

