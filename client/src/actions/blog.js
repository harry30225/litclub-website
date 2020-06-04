import axios from "axios";
import { GET_BLOGS, BLOGS_ERROR,ADD_BLOG } from "./types";

// Get blogs
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

// add blogs
export const addBlog = (title,content) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ title,content });
  try {
    const res = await axios.post(`/api/blog/`, body, config);

    dispatch({
      type: ADD_BLOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BLOGS_ERROR,
      payload: { msg: "error" },
    });
  }
};
