import axios from "axios";
import { DELETE_BLOG, GET_BLOGS, BLOGS_ERROR, ADD_BLOG, GET_BLOG, EDIT_BLOG } from "./types";

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
export const addBlog = (blogtag, title, content, author) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ blogtag, title, content, author });
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

// Get blog by id
export const getBlog = (id) => async dispatch => {
  try {
    const res = await axios.get(`/api/blog/${id}`);

    dispatch({
      type: GET_BLOG,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BLOGS_ERROR,
      payload: { msg: "error" }
    });
  }
};

// edit blog
export const editBlog = (id, blogtag, title, content, author) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ blogtag, title, content, author });
  try {
    const res = await axios.put(`/api/blog/edit/${id}`, body, config);

    dispatch({
      type: EDIT_BLOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BLOGS_ERROR,
      payload: { msg: "error" },
    });
  }
};

// delete blog
export const deleteBlog = (id) => async dispatch => {
  try {
    await axios.delete(`/api/blog/delete/${id}`);

    dispatch({
      type: DELETE_BLOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: BLOGS_ERROR,
      payload: { msg: "error" }
    });
  }
};
