import React, {useEffect, useState} from 'react';
import Input from "../decorators/Input";

const FoodItem = (props) => {
  const [measure, setMeasure] = useState({});
  const [amount, setAmount] = useState(1);
  const [measures, setMeasures] = useState(props.foodMeasures)
  const [nutr, setNutr] = useState({
    Energy: null,
    Proteins: null,
    Carbs: null,
    Fats: null
  });


  let referenceNutr = {
    Energy: null,
    Proteins: null,
    Carbs: null,
    Fats: null
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
      Energy: null,
      Proteins: null,
      Carbs: null,
      Fats: null
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
      Energy: referenceNutr.Energy * localAmount * mes.gramWeight / 100,
      Proteins: referenceNutr.Proteins * localAmount * mes.gramWeight / 100,
      Carbs: referenceNutr.Carbs * localAmount * mes.gramWeight / 100,
      Fats: referenceNutr.Fats * localAmount * mes.gramWeight / 100
    })
  }
  return (
    <div>
      <span>
        {props.description}
      </span>
      <span> Энергетическая ценность: {nutr.Energy} ккал</span>
      <span> Белки: {nutr.Proteins}г</span>
      <span> Жиры: {nutr.Fats}г</span>
      <span> Углеводы: {nutr.Carbs}г</span>

      <Input type="text" onChange={handleInput}/>

      <select
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
      <button> добавить</button>
    </div>
  );
};

export default FoodItem;