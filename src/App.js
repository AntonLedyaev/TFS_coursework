import React, {useEffect} from "react"
import {AuthProvider, useAuth} from "./contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/SignUp"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoutes"
import UpdateProfile from "./pages/UpdateProfile"
import ForgotPassword from "./pages/ForgetPassword"
import './styles/App.css'
import Diary from "./pages/Diary";
import WeightHistory from "./pages/WeightHistory";
import Recipes from "./pages/Recipes";
import {useState} from "react";
import {database} from "./utils/firebase";
import { getDatabase, ref, set, get } from "firebase/database";
import AddFoodView from "./pages/AddFoodView";



function AppLogin() {
  console.log(useAuth());
  const [wantedWeight, setWantedWeight] = useState(70);
  const [goals, setGoals] = useState(
    {
      calories: 2500,
      fats: 80,
      carbs: 250,
      proteins: 120
    }
  );
  const [weightHistory, setWeightHistory] = useState([
    {
      id: "12-02-2020", value: 100
    },
    {
      id: "12-02-2021", value: 85
    },
    {
      id: "12-02-2022", value: 70
    }
  ]);


  const changeCalorieGoals = (newGoals) => {
    setGoals(newGoals);
  }

  const addWeightValue = (newWeight) => {
    setWeightHistory([...weightHistory, newWeight]);
  }

  const changeWantedWeight = (newWeight) => {
    setWantedWeight(newWeight);
  }

  const removeWeight = (weight) => {
    setWeightHistory(weightHistory.filter(w => w.id !== weight))
  }

  return (
    <div>
        <Router>
          <AuthProvider weightHistory={weightHistory} wantedWeight ={wantedWeight} goals = {goals}>
            <Routes>
              <Route exact path="/diary"
                     element={<PrivateRoute><Diary/></PrivateRoute>}
              />

              <Route exact path="/add-food"
                     element={<PrivateRoute><AddFoodView/></PrivateRoute>}
              />

              <Route exact path="/weight-history"
                     element={<PrivateRoute>
                       <WeightHistory
                         addWeightValue = {addWeightValue}
                         changeWantedWeight={changeWantedWeight}
                         weightHistory={weightHistory}
                         removeWeight={removeWeight}
                         wantedWeight ={wantedWeight}
                       />
              </PrivateRoute>}
              />
              <Route exact path="/recipes"
                     element={<PrivateRoute><Recipes/></PrivateRoute>}
              />
              <Route exact path="/"
                     element={<PrivateRoute>
                       <Dashboard
                         weightHistory = {weightHistory}
                         changeCalorieGoals = {changeCalorieGoals}
                         goals = {goals}
                       />
              </PrivateRoute>}
              />
              <Route path="/update-profile"
                     element={<PrivateRoute><UpdateProfile/></PrivateRoute>}
              />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Routes>
          </AuthProvider>
        </Router>
    </div>
  )
}

export default AppLogin
