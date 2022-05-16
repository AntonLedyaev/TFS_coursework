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
import AddFoodView from "./pages/AddFoodView";
import AddRecipe from "./pages/AddRecipe";
import Recipe from "./pages/Recipe";

function AppLogin() {
  return (
    <div>
      <AuthProvider>
        <Router>

            <Routes>
              <Route exact path="/diary/:date"
                     element={<PrivateRoute><Diary/></PrivateRoute>}
              />

              <Route exact path="/add-food/:type/:date"
                     element={<PrivateRoute><AddFoodView/></PrivateRoute>}
              />

              <Route exact path="/weight-history"
                     element={<PrivateRoute>
                       <WeightHistory/>
              </PrivateRoute>}
              />
              <Route exact path="/recipes"
                     element={<PrivateRoute><Recipes/></PrivateRoute>}
              />
              <Route exact path="/"
                     element={<PrivateRoute>
                       <Dashboard/>
              </PrivateRoute>}
              />
              <Route path="/update-profile"
                     element={<PrivateRoute><UpdateProfile/></PrivateRoute>}
              />
              <Route path="/add-recipe"
                     element={<PrivateRoute><AddRecipe/></PrivateRoute>}
              />
              <Route path="/recipe/:id"
                     element={<PrivateRoute><Recipe/></PrivateRoute>}
              />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Routes>

        </Router>
      </AuthProvider>
    </div>
  )
}

export default AppLogin
