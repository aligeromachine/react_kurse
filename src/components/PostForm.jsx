import React, { useState } from "react";
import MyBtn from "./UI/button/MyBtn";
import MyInp from "./UI/input/MyInp";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const PostForm = function(props) {
  const [post, setPost] = useState({title: "", body: ""});
  function add_new_post(event) {
    event.preventDefault();
    props.create({...post, key: uuidv4()});
    setPost({title: "", body: ""});
  }
  function cng_title(event) {
    setPost({...post, title: event.target.value});
  }
  function cng_body(event) {
    setPost({...post, body: event.target.value});
  }
  return(
    <form>
      <MyInp 
        value={post.title}
        onChange={cng_title}
        type="text" 
        placeholder="Name of The Post"/>
      <MyInp 
        value={post.body}
        onChange={cng_body}
        type="text" 
        placeholder="Body of The Post"/>
      <MyBtn onClick={add_new_post} >{"Create Post"}</MyBtn>
    </form>
  );
}

PostForm.propTypes = {
  props: PropTypes.object,
  create: PropTypes.func,
};

export default PostForm;