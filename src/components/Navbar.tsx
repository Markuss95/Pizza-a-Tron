import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {
  startLogin,
  startLogout,
} from "../modules/configurator/redux/authentication/auth"
import { auth } from "../modules/firebase/firebase"
const Navbar = ({ startLogin, startLogout }) => {
  const [logginButton, setLogginButton] = useState<string>("Log in")

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setLogginButton("Log out")
      } else {
        setLogginButton("Log in")
      }
    })
  }, [auth])
  return (
    <Wrapper className="section-center">
      <div className="section-center navbar-center">
        <Link to="/">
          <h1 className="navbar-title">Pizz-á-tron</h1>
        </Link>
        <Link to="/">
          <StaticImage
            src="../assets/images/smallslice.png"
            alt="pizza"
            layout="fixed"
            width={40}
            height={40.5}
          />
        </Link>

        {logginButton === "Log in" ? (
          <Link to="app/configurator">
            <button className="btn" onClick={startLogin}>
              {"Log in"}
            </button>
          </Link>
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
    startLogin: () => dispatch(startLogin()),
    startLogout: () => dispatch(startLogout()),
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
