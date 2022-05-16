import React from 'react';
import Button from "../decorators/Button";
import styles from "../styles/PostItem.module.css"
import {Link} from "react-router-dom";

const PostItem = (props) => {
  return (
    <div className={styles.PostItem}>
      <div>
        <Link className = {styles.PostItemLink} to = {`/recipe/${props.post.id}`}>{props.post.title}</Link>
        <div className={styles.PostItemDescription}>
          {props.post.description}
        </div>
      </div>

      <div>
        Автор: <strong>{props.post.user}</strong>
      </div>
    </div>
  );
};

export default PostItem;