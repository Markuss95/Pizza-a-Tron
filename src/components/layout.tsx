import React, { useEffect } from "react"
import { connect } from "react-redux"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
