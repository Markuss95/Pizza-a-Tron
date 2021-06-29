import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const Navbar = () => {
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
        <button className="btn">Log in</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .navbar-title {
    font-style: normal;
    font-weight: 800;
    font-size: 1.4em;
    line-height: 24px;
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

export default Navbar
