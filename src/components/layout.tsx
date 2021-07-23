import React, { useEffect } from "react"
import Navbar from "./Navbar"
import { auth } from "../modules/firebase/firebase"

const Layout = ({ children }) => {
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log("logged in")
      } else {
        console.log("logged out")
      }
    })
  }, [auth])
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
