import React, { useState, useEffect } from "react"
import { navigate } from "@reach/router"
import styled from "styled-components"
import { connect } from "react-redux"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import LoginModal from "./LoginModal"
import { v4 as uuidv4 } from "uuid"
import {
  startLogout,
  login,
  logout,
} from "../modules/configurator/redux/authentication/actions"
import { auth } from "../modules/firebase/firebase"
const Navbar = ({ startLogout, login, logout }) => {
  const [logginButton, setLogginButton] = useState<string>("Log in")
  const [link, setLink] = useState<string>("/")
  const [isLoginWindowOpen, setIsLoginWindowOpen] = useState<boolean>(false)

  const updateIsLoginWindowOpen = () => {
    setIsLoginWindowOpen(!isLoginWindowOpen)
  }
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!!user) {
        setLogginButton("Log out")
        setLink("/app/configurator")
        login(user.uid)
      } else {
        setLogginButton("Log in")
        navigate("/")
        logout()
      }
    })
  }, [auth])
  return (
    <Wrapper className="section-center">
      <LoginModal
        isLoginWindowOpen={isLoginWindowOpen}
        updateIsLoginWindowOpen={updateIsLoginWindowOpen}
        key={uuidv4()}
      />
      <div className="section-center navbar-center">
        <Link to={link}>
          <h1 className="navbar-title">Pizz-á-tron</h1>
        </Link>
        <Link to={link}>
          <StaticImage
            src="../assets/images/smallslice.png"
            alt="pizza"
            layout="fixed"
            width={40}
            height={40.5}
          />
        </Link>
        {logginButton === "Log in" ? (
          <button className="btn" onClick={updateIsLoginWindowOpen}>
            Log in
          </button>
        ) : (
          <Link to="/">
            <button className="btn" onClick={startLogout}>
              {"Log out"}
            </button>
          </Link>
        )}
      </div>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => dispatch(startLogout()),
    login: (id: string) => dispatch(login(id)),
    logout: () => dispatch(logout()),
  }
}

const Wrapper = styled.div`
  .navbar-title {
    font-style: normal;
    font-weight: 800;
    font-size: 1.4em;
    line-height: 2.2rem;
  }
  .navbar-center {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    a {
      h1 {
        color: #383838;
      }
    }
  }
`

export default connect(null, mapDispatchToProps)(Navbar)
