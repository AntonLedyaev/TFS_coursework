import React, {useState} from 'react';
import PostList from "../components/PostList";
import Header from "../components/Header";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import Input from "../decorators/Input";
import Button from "../decorators/Button";
import styles from "../styles/Recipe.module.css"
import calendarStyles from "../styles/Diary.module.css"
import DatePicker from "react-datepicker";
import {formatDate} from "../utils/formatDate";
const Recipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [type, setType] = useState('breakfast');
  const [date, setDate] = useState(new Date())
  const [rawDate, setRawDate] = useState(new Date(Date.now()).toLocaleDateString("ru-RU"));
  const id = useParams().id ;
  const recipes = useSelector(state => state.recipes)
  const recipe = recipes.find(item => item.id === Number(id));
  console.log(rawDate)
  const foodItem = {
    Description: recipe.title,
    Energy: recipe.Nutrients.Energy,
    Proteins: recipe.Nutrients.Proteins,
    Carbs: recipe.Nutrients.Carbs,
    Fats: recipe.Nutrients.Fats,
    DateID: rawDate,
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
            <div>
              <h2>Энергетическая ценность в 100г: </h2>
              <span>Калории: {foodItem.Energy ? foodItem.Energy.toFixed(0) : foodItem.Energy}ккал  </span>
              <span>Белки: {foodItem.Proteins ? foodItem.Proteins.toFixed(1) : foodItem.Proteins}г </span>
              <span>Жиры: {foodItem.Fats ? foodItem.Fats.toFixed(1) : foodItem.Fats}г </span>
              <span>Углеводы: {foodItem.Carbs ? foodItem.Carbs.toFixed(1) : foodItem.Carbs }г </span>
            </div>
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
            <DatePicker
              className = {calendarStyles.DiaryCalendar}
              selected={date}
              onChange={(date) => {
                setDate(date)
                setRawDate(new Date(date).toLocaleDateString("ru-RU"))
              }}
            />
            <Button onClick = {handleButtonClick}>Добавить прием пищи</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;