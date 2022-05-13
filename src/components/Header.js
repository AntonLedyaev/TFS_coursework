import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'
const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.container}>
        <h1 className={styles.logo}><span>My</span>FoodTracker</h1>
        <div className = {styles.navigation}>
          <Link to={`/diary/${new Date(Date.now()).toLocaleDateString("ru-RU")}`}>
            Дневник
          </Link>
          <Link to={"/recipes"}>
            Рецепты
          </Link>
          <Link to={"/weight-history"}>
            История веса
          </Link>
          <Link to={"/"}>
            Профиль
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;