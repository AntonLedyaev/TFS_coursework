import React, {useEffect} from 'react';
import Header from "../components/Header";
import Input from "../decorators/Input";
import Button from "../decorators/Button";
import {useState} from "react";
import FoodItem from "../components/FoodItem";
import PostItem from "../components/PostItem";
import IngredientsItem from "../components/IngredientsItem";
import {useSelector} from "react-redux";
import {userName} from "../utils/userName";
import {getDatabase, ref, update, push} from "firebase/database";
import {useNavigate} from "react-router-dom";
import styles from "../styles/AddRecipe.module.css"
import classNames  from "classnames";
import we from "react-datepicker";
const AddRecipe = () => {
  const state = useSelector(state => state)
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [guide, setGuide] = useState('');
  const [weight, setWeight] = useState(0)
  const [nutrients, setNutrients] = useState({
    Energy: 0,
    Proteins: 0,
    Fats: 0,
    Carbs: 0
  })
  const userName = state.user.user.email ?  state.user.user.email.split('@')[0] : '';
  const db = getDatabase();
  const navigate = useNavigate();
  let apiKey = 't7sbpbkc71VdmMtGtpgdARcHA95W3ARpeGgWnXOn'

  const handleSearch = () => {
    fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${search}&pageSize=10&api_key=${apiKey}`, )
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

  useEffect(() => {
    if(ingredients.length > 0) {
      ingredients.forEach(item => {
        const localWeight = item.Weight ? weight + item.Weight : weight + 100
        setWeight(item.Weight ? weight + item.Weight : weight + 100)
        setNutrients({
          Energy: (nutrients.Energy + item.Energy) / localWeight * 100,
          Proteins: (nutrients.Proteins + item.Proteins) /localWeight * 100,
          Fats: (nutrients.Fats + item.Fats) /localWeight * 100,
          Carbs:(nutrients.Carbs + item.Carbs) /localWeight * 100,
        })
      })
    }
  }, [ingredients])



  const handleAddRecipe = () => {
    const updates = {}
    updates[`/recipes/${Date.now()}`] = {
      id: Date.now(),
      Nutrients: nutrients,
      user: userName,
      title: title,
      description: description,
      guide: guide
    }
    update(ref(db), updates).then();

    navigate('/recipes')
  }

  const renderList = () => {
    return(
      items.foods.map((item, index) => (
        <FoodItem key ={item.fdcId}
                  description = {item.description}
                  nutrients = {item.foodNutrients}
                  foodMeasures = {item.foodMeasures}
                  setIngredients = {setIngredients}
                  ingredients = {ingredients}
                  date = {Date.now() + index}
        />
      ))
    );
  }

  if (error) {
    return (
      <>
        <Header>
        </Header>
        return <div>????????????: {error.message}</div>;
      </>
    )
  } else if (isLoaded && items.foods) {return (
    <>
      <Header/>
      <div className="container">
        <div className={styles.AddRecipeTitleContainer}>
          <h2>?????????????????? ????????????</h2>
          <Button onClick = {handleAddRecipe}>???????????????? ????????????</Button>
        </div>
        <form>
          <input className={styles.AddRecipeInput} placeholder={"???????????????? ??????????????"} onChange = {(e) => setTitle(e.target.value)}/>
          <input
            className={classNames(styles.AddRecipeInput, styles.AddRecipeDescriptionInput)}
            placeholder={"???????????????? ??????????????"}
            onChange={(e) => setDescription(e.target.value)}
          />
          <textarea className={styles.AddRecipeTextArea} placeholder={"????????????"} onChange={(e) => setGuide(e.target.value)}/>
        </form>
        <div>
          <h3>???????????? ????????????????????????</h3>
          <div>
            {ingredients.map((item, index) =>
              <IngredientsItem
                Description = {item.Description}
                Weight = {item.Weight}
                key = {index}
              />
            )}
          </div>
        </div>
        <h3>???????????????????????????? ???????????????? ?? 100??:</h3>
        <div className={styles.AddRecipeNutrientsContainer}>
          <span>{`??????: ${weight}??`}</span>
          <span>{`??????????????: ${nutrients.Energy ? nutrients.Energy.toFixed(0) : "0"}`}</span>
          <span>{`??????????: ${nutrients.Proteins ? nutrients.Proteins.toFixed(1) : "0"}`}</span>
          <span>{`????????: ${nutrients.Fats ? nutrients.Fats.toFixed(1) : "0"}`}</span>
          <span>{`????????????????: ${nutrients.Carbs ? nutrients.Carbs.toFixed(1) : "0"}`}</span>
        </div>
        <div>
          <h3>?????????? ??????????????????????:</h3>
          <input
            className={classNames(styles.AddRecipeInput, styles.AddRecipeDescriptionInput)}
            placeholder={"?????????? ??????????????????????"}
            type="text"
            onChange={(e)=> setSearch(e.target.value)}
          />
        </div>

        <Button onClick = {handleSearch}>??????????</Button>
        <div>
          <h3>???????????????????? ????????????:</h3>
          <ul>
            {items.foods.length > 0 ?  renderList() : <span>???????????? ???? ??????????(</span>}
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
          <div className={styles.AddRecipeTitleContainer}>
            <h2>?????????????????? ????????????</h2>
            <Button onClick = {handleAddRecipe}>???????????????? ????????????</Button>
          </div>
          <form>
            <input className={styles.AddRecipeInput} placeholder={"???????????????? ??????????????"} onChange = {(e) => setTitle(e.target.value)}/>
            <input
              className={classNames(styles.AddRecipeInput, styles.AddRecipeDescriptionInput)}
              placeholder={"???????????????? ??????????????"}
              onChange={(e) => setDescription(e.target.value)}
            />
            <textarea className={styles.AddRecipeTextArea} placeholder={"????????????"} onChange={(e) => setGuide(e.target.value)}/>
          </form>
          <h3>?????????? ??????????????????????:</h3>
            <input
            className={classNames(styles.AddRecipeInput, styles.AddRecipeDescriptionInput)}
            placeholder={"?????????? ??????????????????????"}
            type="text"
            onChange={(e)=> setSearch(e.target.value)}
            />
          <Button onClick = {handleSearch}>??????????</Button>
        </div>
      </>

    )

  }
};

export default AddRecipe;