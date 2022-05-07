import React from 'react';
import Header from "../components/Header";
import PostList from "../components/PostList";
import PostItem from "../components/PostItem";
import {useState} from "react";
import Button from "../decorators/Button";
const Recipes = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Солянка', body: 'Описание'},
    {id: 2, title: 'Борщ', body: 'Описание'},
    {id: 3, title: 'Картошка по-французски', body: 'Описание'},
  ])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div>
      <Header/>

      <div className="container">
        <PostList posts={posts} remove ={removePost} title = {'Пользовательские блюда'}/>
      </div>
    </div>
  );
};

export default Recipes;