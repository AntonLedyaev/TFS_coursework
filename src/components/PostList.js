import React from 'react';
import PostItem from "./PostItem";
import Button from "../decorators/Button";

const PostList = ({posts, title, remove}) => {

  return (
    <div>
      <div style={{display: 'flex', justifyContent:'space-between'}}>
        <h3 style = {{textAlign: 'center'}}>{title}</h3>
        <Button>Добавить блюдо</Button>
      </div>
      {posts.map((post, index) =>
        <PostItem remove = {remove} number={index + 1} post = {post} key = {post.id}/>
      )}
    </div>
  );
};

export default PostList;