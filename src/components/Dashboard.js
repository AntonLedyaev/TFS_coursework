import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      console.log(currentUser)
      await logout()
      // history.push("/login")
      history('/login')
    } catch (e) {
      // console.log(e)
      setError("Failed to log out")
    }
  }
  return (
    <>
      <>
        <div>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <alert>{error}</alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile">
            Update Profile
          </Link>
        </div>
      </>
      <div>
        <button type="submit" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </>
  )
}
