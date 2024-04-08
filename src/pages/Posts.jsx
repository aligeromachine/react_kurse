import React, { useEffect, useState } from "react";
import St from "../styles/App.module.css"
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/mymodal/MyModal";
import MyBtn from "../components/UI/button/MyBtn";
import '../styles/post.css';
import {useSortedPosts} from "../hooks/usePost" 
import { v4 as uuidv4 } from 'uuid';
import * as Request from "../API/PostService"
import * as utils  from "../components/Utils"
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import Pagination from "../components/UI/paginations/Pagination";

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  
  const sortedAndSearchPost = useSortedPosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, ] = useState(10);
  const [page, setPage] = useState(1);
  
  const [fetchPosts, isLoading, isErr] = useFetching(async (limit, page) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const [data, size] = await Request.fetchData(url, limit, page);
    setTotalPages(utils.getPageCount(size, limit));
    const ls = data.map(it => {return {id: it.id, title: it.title, body: it.body, key: uuidv4()}});
    setPosts(ls);
  });
  
  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit,]);

  function create_post(new_post){
    setPosts([...posts, new_post]);
    setModal(false);
  }
  function remove_post(new_post){
    setPosts(posts.filter(p => p.key !== new_post.key));
  }
  function changePage(p) {
    setPage(p);
    fetchPosts(limit, p);
  }

  return(
    <div className={St.root}>
      <div className={St.App}>
        <MyBtn onClick={fetchPosts}>GET POST</MyBtn>
        <MyBtn style={{marginTop: "30px"}} onClick={() => setModal(true)}>
          Create Post
        </MyBtn>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={create_post}/>
        </MyModal>        
        <hr style={{margin: "15px 0"}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {isErr && <h1>ERR {isErr}</h1>}
        {isLoading
          ? <Loader />
          : <PostList remove={remove_post} posts={sortedAndSearchPost} title="List of Posts"/>
        }
        <Pagination 
          totalPages={totalPages}
          page={page} 
          changePage={changePage} 
          />
      </div> 
    </div>  
  );
}

export default Posts;