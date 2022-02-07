import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostItem = function(props){
    return(
        <div className="post">
        <div className="post__content">
          <strong>{props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__delet">
          <MyButton>Удалить пост</MyButton>
          <MyInput></MyInput>
        </div>
        </div>
    )
}

export default PostItem;