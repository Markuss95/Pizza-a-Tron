import React, { useEffect } from "react"
import { auth } from "../modules/firebase/firebase"
import { connect } from "react-redux"
import Navbar from "./Navbar"

const Layout = ({ children, authUser }) => {
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
