import React, {useState} from 'react';
import PostList from "../components/PostList";
import Header from "../components/Header";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import Input from "../decorators/Input";
import Button from "../decorators/Button";
import styles from "../styles/Recipe.module.css"
const Recipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [type, setType] = useState('breakfast');
  const [date, setDate] = useState('');
  const id = useParams().id ;
  const recipes = useSelector(state => state.recipes)
  const recipe = recipes.find(item => item.id === Number(id));

  const foodItem = {
    Description: recipe.title,
    Energy: recipe.Nutrients.Energy,
    Proteins: recipe.Nutrients.Proteins,
    Carbs: recipe.Nutrients.Carbs,
    Fats: recipe.Nutrients.Fats,
    DateID: date,
    Type: type
  }

  const handleButtonClick = (event) => {
    event.preventDefault();
    dispatch({type: "ADD_FOOD", payload: foodItem})
    navigate(`/diary/${foodItem.DateID}`);
  }

  return (
    <div>
      <Header/>
      <div className={"container"}>
        <div className={styles.RecipeContainer}>
          <div>
            <h2>{ recipe.title ? recipe?.title : "Рецепт"}</h2>
            <p>{recipe.description}</p>
            <p>{recipe.guide}</p>
          </div>
          <div>
            <p>Выберите прием пищи:</p>
            <select className={styles.RecipeSelect} onChange={(e) => setType(e.target.value)}>
              <option value="" disabled>Выберите прием пищи</option>
              <option value="breakfast">Завтрак</option>
              <option value="lunch">Обед</option>
              <option value="dinner">Ужин</option>
            </select>
            <p>Дата приема пищи: </p>
            <input className={styles.RecipeInput} placeholder={"ДД.ММ.ГГГГ"} onChange = {(e) => setDate(e.target.value)}/>
            <Button onClick = {handleButtonClick}>Добавить прием пищи</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;