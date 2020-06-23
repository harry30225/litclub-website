import React, { useState, Fragment } from "react";
import FormElement from "../layout/FormElement";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addImage } from "../../actions/image";
import FileBase64 from 'react-file-base64';

const AddImageslider = ({ addImage }) => {
  const [formData, setFormData] = useState({
    title: "",
    caption: "",
    picture: {}
  });

  const { title, caption, picture } = formData;

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
    addImage(title, caption, picture);
  };
  return (
    <Fragment>
      <div className="container card mb-3 ">
        <div className="card-header">ADD IMAGE</div>
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
              label="Caption"
              name="caption"
              placeholder="Enter Caption"
              type="text"
              value={caption}
              onChange={(e) => onChange(e)}
            />
            <FileBase64
              multiple={false}
              onDone={(uploadimage) => onDone(uploadimage)}
            />
            {picture && <img src={picture.data} />}
            <input
              type="submit"
              value="Add Image"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};
AddImageslider.propTypes = {
  addImage: PropTypes.func.isRequired,
};

export default connect(null, { addImage })(AddImageslider);
