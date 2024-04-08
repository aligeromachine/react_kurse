import React from "react";
import St from "../styles/App.module.css"
import MyBtn from "./UI/button/MyBtn";
import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom"

const PostItem = function(props) {
  const router = useNavigate();
  //console.log(router);
  function remove_elem(){
    props.remove(props.post);
  }
  return (
    <div className={St.post}>
      <div>
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className={St.post__btn}>
        <MyBtn onClick={() => router(`${props.post.id}`)} >View</MyBtn>
        <MyBtn onClick={remove_elem} >Delete</MyBtn>
      </div>
    </div>
  )
}

PostItem.propTypes = {
  props: PropTypes.object,
  remove: PropTypes.func,
  post: PropTypes.object,
};

export default PostItem;