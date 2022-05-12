import React, {useContext, useEffect, useState} from "react"
import {auth, database} from "../utils/firebase"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import {ref, set} from "firebase/database";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children, ...props }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)


  const writeUserData = () => {
    const userName = currentUser.email.split('@')[0];
    set(ref(database,'users/' + userName), {
      user: currentUser.email,
      weightHistory: props.weightHistory,
      wantedWeight: props.wantedWeight,
      goals: props.goals
    });
  }

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function updateEmail_(email) {
    return updateEmail(currentUser, email)
  }

  function updatePassword_(password) {
    return updatePassword(currentUser, password)
  }

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail_,
    updatePassword_
  }

  if(!loading) {
    writeUserData();
  }


  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
