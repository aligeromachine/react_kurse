import React from "react";
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group"
import "../styles/post.css"
import PropTypes from 'prop-types';

const PostList = function(props) {
  if (!props.posts.length) {
    return (<div>
      <h1 style={{textAlign: "center"}}>List is Empty</h1>
    </div>);
  }
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{props.title}</h1>
      <TransitionGroup>
        {props.posts.map((post, index) => 
          <CSSTransition
            key={post.key}
            timeout={500}
            classNames={"post"}
          >
            <PostItem remove={props.remove} number={index + 1} post={post} />
          </CSSTransition>          
        )}
      </TransitionGroup>         
    </div>
  )
}

PostList.propTypes = {
  props: PropTypes.object,
  title: PropTypes.string,
  posts: PropTypes.array,
  remove: PropTypes.func,
};

export default PostList;