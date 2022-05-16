import React, {useEffect, useState} from 'react';
import Input from "../decorators/Input";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {userName} from "../utils/userName";
import {getDatabase, ref, update} from "firebase/database";
import Button from "../decorators/Button";
import styles from "../styles/FoodItem.module.css"
const FoodItem = (props, ingredients) => {

  let navigate = useNavigate();
  const dispatch = useDispatch()
  const foodListState = useSelector(state => state.foodInfo);
  const [measure, setMeasure] = useState({});
  const [amount, setAmount] = useState(1);
  const [measures, setMeasures] = useState(props.foodMeasures)
  const [nutr, setNutr] = useState({
    Description: props.description,
    Energy: null,
    Proteins: null,
    Carbs: null,
    Fats: null,
    DateID: props.date,
    Type: props.type
  });



  let referenceNutr = {
    Description: props.description,
    Energy: null,
    Proteins: null,
    Carbs: null,
    Fats: null,
    DateID: props.date,
    Type: props.type
  };

  props.nutrients.forEach(nutrient => {
    switch (nutrient.nutrientNumber) {
      case '208':
        referenceNutr.Energy = nutrient.value;
        break;
      case '203':
        referenceNutr.Proteins = nutrient.value;
        break;
      case '204':
        referenceNutr.Fats = nutrient.value;
        break;
      case '205':
        referenceNutr.Carbs = nutrient.value;
        break;
      default:
        break;
    }})

  useEffect(()=> {
    let localNutr = {
      Description: props.description,
      Energy: null,
      Proteins: null,
      Carbs: null,
      Fats: null,
      DateID: props.date,
      Type: props.type
    }
    props.nutrients.forEach(nutrient => {
      switch (nutrient.nutrientNumber) {
        case '208':
          localNutr.Energy = nutrient.value;
          break;
        case '203':
          localNutr.Proteins = nutrient.value;
          break;
        case '204':
          localNutr.Fats = nutrient.value;
          break;
        case '205':
          localNutr.Carbs = nutrient.value;
          break;
        default:
          break;
      }})
    setNutr(localNutr);
    if (!measures.find(mes => mes.disseminationText === "g")) {
      setMeasures([...measures, {disseminationText:"g", gramWeight: "1", id: 1}])
    }

  }, [])

  const handleInput = (e) => {
    const localAmount = e.target.value;
    setAmount(localAmount);
    const mes = measures.find(mes => mes.disseminationText === measure)

    setNutr({
      ...nutr,
      Energy: referenceNutr.Energy * localAmount * mes.gramWeight / 100,
      Proteins: referenceNutr.Proteins * localAmount * mes.gramWeight / 100,
      Carbs: referenceNutr.Carbs * localAmount * mes.gramWeight / 100,
      Fats: referenceNutr.Fats * localAmount * mes.gramWeight / 100,
      Weight: localAmount * mes.gramWeight
    })
  }


  const handleAddButtonClick = (event) => {
    event.preventDefault();
    dispatch({type: "ADD_FOOD", payload: nutr})
    navigate(`/diary/${props.date}`);
  }

  return (
    <div className={styles.FoodItemContainer}>
      <div className={styles.FoodItemTitle}>
        <span>
          {props.description}
        </span>
      </div>
      <div className={styles.FoodItemMacros}>
        <div>
          <span> Калорийность: {nutr.Energy ? nutr.Energy.toFixed(0) : 0} ккал</span>
        </div>
        <div>
          <span> Белки: {nutr.Proteins ? nutr.Proteins.toFixed(1) : 0}г</span>
          <span> Жиры: {nutr.Fats ? nutr.Fats.toFixed(1) : 0}г</span>
          <span> Углеводы: {nutr.Carbs ? nutr.Carbs.toFixed(1) : 0}г</span>
        </div>

      </div>

      <div>
        <input
          placeholder={"100 g"}
          className={styles.FoodItemInput}
          type="text"
          onChange={handleInput}
        />
        <select
          className={styles.FoodItemSelect}
          value = {measure.disseminationText}
          defaultValue={"default"}
          onChange={e=> {setMeasure(e.target.value); console.log(measure)}}>
          <option value={"default"} disabled>
            Choose an option
          </option>
          { measures.map(measure => <option key = {measure.id}>
            {measure.disseminationText}</option>
          )}
        </select>
      </div>
      <Button onClick={props.setIngredients ? () => props.setIngredients([...props.ingredients,nutr]) : handleAddButtonClick}>добавить</Button>

    </div>
  );
};

export default FoodItem;