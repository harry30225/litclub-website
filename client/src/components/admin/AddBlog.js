import React, { useState, Fragment } from "react";
import FormElement from "../layout/FormElement";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addBlog } from "../../actions/blog";
import FileBase64 from 'react-file-base64';

const AddBlog = ({ addBlog }) => {
  const [formData, setFormData] = useState({
    blogtag: "",
    title: "",
    content: "",
    author: "",
    picture: {}
  });

  const { blogtag, title, content, author, picture } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onDone = (uploadimage) => {
    console.log(uploadimage);
    setFormData({
      ...formData, picture: {
        name: "base-image-" + Date.now(),
        data: uploadimage.base64.toString()
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addBlog(blogtag, title, content, author, picture);
  };
  return (
    <Fragment>
      <div className="container card mb-3 ">
        <div className="card-header">ADD BLOG</div>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <FormElement
              label="Blog Tag"
              name="blogtag"
              placeholder="Enter Blog Tag"
              type="text"
              value={blogtag}
              required={false}
              onChange={(e) => onChange(e)}
            />
            <FormElement
              label="Title"
              name="title"
              placeholder="Enter Title"
              type="text"
              value={title}
              required={true}
              onChange={(e) => onChange(e)}
            />
            <FormElement
              label="Content"
              name="content"
              placeholder="Enter Content"
              type="text"
              value={content}
              required={false}
              onChange={(e) => onChange(e)}
            />
            <FormElement
              label="Author"
              name="author"
              placeholder="Enter Author"
              type="text"
              value={author}
              required={false}
              onChange={(e) => onChange(e)}
            />
            <FileBase64
              multiple={false}
              onDone={(uploadimage) => onDone(uploadimage)}
            />
            {picture && <img src={picture.data} />}
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
