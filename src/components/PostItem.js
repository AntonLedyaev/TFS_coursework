import React from 'react';
import Button from "../decorators/Button";
import styles from "../styles/PostItem.module.css"

const PostItem = (props) => {
  return (
    <div className={styles.PostItem}>
      <div>
        <strong>{props.number}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div>
        <Button onClick = {() => props.remove(props.post)}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default PostItem;