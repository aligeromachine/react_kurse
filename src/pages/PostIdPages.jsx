import React from "react";
import { useParams } from "react-router-dom";

const PostIdPages = () => {
  const parmas = useParams();
  return(
    <div>
      <h1>You open page posts {parmas.id}</h1>
    </div>
  );
}

export default PostIdPages;