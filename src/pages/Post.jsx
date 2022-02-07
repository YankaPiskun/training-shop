import React, { useState } from "react";
import PostItem from "../components/PostItem";
import '../styles/App.css';

function Post() {
    const [posts] = useState([
      {id:1, title:'First', body: 'descr'},
      {id:2, title:'First2', body: 'descr'},
      {id:3, title:'First3', body: 'descr'},
    ])
  return (
    <div className="App">
     {posts.map(post => 
      <PostItem post={post} key = {post.id}></PostItem>
      )}
      </div>
  );
}

export default Post;
