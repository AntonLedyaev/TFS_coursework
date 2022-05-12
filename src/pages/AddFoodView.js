import React from 'react';
import Header from "../components/Header";
import {useEffect, useState} from "react";
import Input from "../decorators/Input";
import Button from "../decorators/Button";
import FoodItem from "../components/FoodItem";
const AddFoodView = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('')

  let apiKey = 't7sbpbkc71VdmMtGtpgdARcHA95W3ARpeGgWnXOn'

  const handleSearch = () => {
      fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${search}&pageSize=35&api_key=${apiKey}`, )
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          })
  }

  const renderList = () => {
    return(
      items.foods.map(item => (
        <FoodItem key ={item.fdcId}
                  description = {item.description}
                  nutrients = {item.foodNutrients}
                  foodMeasures = {item.foodMeasures}
        />
      ))
    );
  }
  if (error) {
    return (
      <>
        <Header>
        </Header>
        return <div>Ошибка: {error.message}</div>;
      </>
    )
  } else if (isLoaded && items.foods) {return (
    <>
      <Header>
      </Header>
      <div className="container">
        <h2>Найти еду:</h2><Input type="text" onChange={(e)=> setSearch(e.target.value)}/>
        <Button onClick = {handleSearch}>Найти</Button>
        <div>

          <h3>Результаты поиска:</h3>
          <ul>
            {items.foods.length > 0 ?  renderList() : <span>Ничего не нашли(</span>}
          </ul>
        </div>
      </div>
    </>
  )} else {
    return (
      <>
          <Header>
          </Header>
          <div className="container">
            <h2>Найти еду:</h2><Input type="text" onChange={(e)=> setSearch(e.target.value)}/>
            <Button onClick = {handleSearch}>Найти</Button>
          </div>
      </>

      )

    }
};





/*



<li key = {item.fdcId}>
                {item.description}
              </li>
 */



export default AddFoodView;