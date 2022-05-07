import React from "react"
import { AuthProvider } from "./contexts/AuthContext"
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

function AppLogin() {
  return (
    <div>
      <div>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/diary"
                     element={<PrivateRoute><Diary/></PrivateRoute>}
              />
              <Route exact path="/weight-history"
                     element={<PrivateRoute><WeightHistory/></PrivateRoute>}
              />
              <Route exact path="/recipes"
                     element={<PrivateRoute><Recipes/></PrivateRoute>}
              />
              <Route exact path="/dashboard"
                     element={<PrivateRoute><Dashboard/></PrivateRoute>}
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
    </div>
  )
}

export default AppLogin
