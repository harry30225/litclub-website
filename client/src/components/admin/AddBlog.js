import React, { useState, Fragment } from "react";
import FormElement from "../layout/FormElement";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addBlog } from "../../actions/blog";

const AddBlog = ({ addBlog }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const { title,content } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addBlog(title,content);
  };
  return (
    <Fragment>
      <div className="container card mb-3 ">
        <div className="card-header">ADD BLOG</div>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <FormElement
              label="Title"
              name="title"
              placeholder="Enter Title"
              type="text"
              value={title}
              onChange={(e) => onChange(e)}
            />
            <FormElement
              label="Content"
              name="content"
              placeholder="Enter Content"
              type="text"
              value={content}
              onChange={(e) => onChange(e)}
            />
            <input
              type="submit"
              value="Add Blog"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};
AddBlog.propTypes = {
  addBlog: PropTypes.func.isRequired,
};

export default connect(null, { addBlog })(AddBlog);
