import React from 'react';
import styles from "../styles/IngerdientsItem.module.css"
const IngredientsItem = (props) => {
  if(props.Description) {return (
    <div className={styles.IngredientsItemContainer}>
      <strong>{props.Description}</strong>
      <span>{props.Weight ? `Вес: ${props.Weight}` : ' Вес: 100г'}</span>
    </div>
  )} else {
    return ''
  }
};

export default IngredientsItem;