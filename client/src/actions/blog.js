import axios from "axios";
import { GET_BLOGS, BLOGS_ERROR } from "./types";

// Get events
export const getBlogs = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/blog");

    dispatch({
      type: GET_BLOGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BLOGS_ERROR,
      payload: { msg: "error" },
    });
  }
};


