import React from 'react';

import styles from './DeleteButton.module.css'
const DeleteButton = (props) => {
  return (
    <button className={styles.Button} onClick={props.onClick}>
      <img className={styles.Img} src="https://www.seekpng.com/png/full/89-899803_png-file-svg-close-tab-icon-png.png" alt=""/>
    </button>
  );
};

export default DeleteButton;