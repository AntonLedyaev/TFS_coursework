import React from "react"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Signup from "./components/SignUp"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoutes"
import UpdateProfile from "./components/UpdateProfile"
import ForgotPassword from "./components/ForgetPassword"
import './styles/App.css'
// https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5

function AppLogin() {
  return (
    <div>
      <div>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/"
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
