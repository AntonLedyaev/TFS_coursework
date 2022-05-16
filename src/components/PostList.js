import React from 'react';
import PostItem from "./PostItem";
import Button from "../decorators/Button";
import {Link, useNavigate} from "react-router-dom";

const PostList = (props) => {

  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    event.preventDefault();
    navigate('/add-recipe');
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent:'space-between'}}>
        <h2 style = {{textAlign: 'center'}}>Пользовательские блюда</h2>
        <Button onClick = {handleButtonClick}>Добавить блюдо</Button>
      </div>
      {props.posts.reverse().map((post, index) =>
          <PostItem post = {post} number={index + 1}  key = {post.id}/>
      )}
    </div>
  );
};

export default PostList;