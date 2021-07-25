import React, { useEffect } from "react"
import { navigate } from "@reach/router"
import { auth } from "../modules/firebase/firebase"
import { connect } from "react-redux"
import Navbar from "./Navbar"

const Layout = ({ children, authUser }) => {
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

const mapStateToProps = state => {
  return {
    authUser: state.auth,
  }
}

export default connect(mapStateToProps)(Layout)
