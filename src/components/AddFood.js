import React from 'react';
import {Link} from "react-router-dom";
import styles from "../styles/AddFood.module.css"
const AddFood = () => {
  return (
    <Link to={"/diary"} className={styles.AddFood}>
      <div className={styles.AddFoodItem}>
        <img style={{width: "20px", height: "20px", marginRight: '20px'}} src="https://pngimg.com/uploads/plus/plus_PNG65.png" alt="+" />
        <span>Добавить продукт</span>
      </div>
    </Link>
  );
};

export default AddFood;