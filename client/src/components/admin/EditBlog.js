import React, { useEffect, useState, Fragment } from "react";
import FormElement from "../layout/FormElement";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editBlog, getBlog } from "../../actions/blog";
import FileBase64 from 'react-file-base64';

const EditBlog = ({ getBlog, editBlog, match, blog: { blog, loading } }) => {
  useEffect(() => {
    getBlog(match.params.id);
    if (!loading && blog) {

      setFormData({
        blogtag: blog.blogtag,
        title: blog.title,
        content: blog.content,
        author: blog.author,
        picture: blog.picture
      })
    }
  }, [getBlog, loading, blog && blog._id]);

  const [formData, setFormData] = useState({
    blogtag: "",
    title: "",
    content: "",
    author: "",
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
    editBlog(match.params.id, blogtag, title, content, author, picture);
  };
  return (
    <Fragment>
      <div className="container card mb-3 ">
        <div className="card-header">EDIT BLOG</div>
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
              value="Edit Blog"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};
EditBlog.propTypes = {
  editBlog: PropTypes.func.isRequired,
  getBlog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  blog: state.blog,
});
export default connect(mapStateToProps, { editBlog, getBlog })(EditBlog);
