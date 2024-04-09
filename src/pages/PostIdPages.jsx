import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import * as Request from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import St from "../styles/App.module.css"
import { v4 as uuidv4 } from 'uuid';

const PostIdPages = () => {
  const parmas = useParams();
  const [post, setPost] = useState(1);
  const [fetchPostById, isLoading, isErr] = useFetching(async (id) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const data = await Request.fetchById(url, id);
    setPost(data);
  });
  
  useEffect(() => {
    fetchPostById(parmas.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [comment, setComment] = useState([]);
  const [fetchComment, isComLoading, isComErr] = useFetching(async (id) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const data = await Request.fetchComment(url, id);
    setComment(data);
  });
  useEffect(() => {
    fetchComment(parmas.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div className={St.root}>
      <h1>You open page posts {parmas.id}</h1>
      {isLoading 
        ? <Loader/> 
        : <div>{post.id} {post.title}</div>}
      {isComLoading 
        ? <Loader/> 
        : <div>
            {comment.map((comm) => 
              <div key={uuidv4()}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
                <div>{comm.name}</div>
                <h5>{comm.postId}, {comm.id}</h5>
              </div>
            )}
          </div>}
    </div>
  );
}

export default PostIdPages;