import React, { useEffect } from "react"
import Navbar from "./Navbar"
import { auth } from "../modules/firebase/firebase"
import { navigate } from "@reach/router"

const Layout = ({ children }) => {
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log("logged in")
      } else {
        navigate("/")
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
