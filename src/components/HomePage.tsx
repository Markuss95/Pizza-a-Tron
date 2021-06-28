import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Navbar from "./Navbar"

import React from "react"

const HomePage = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="section-center content-center">
        <div>
          <StaticImage
            className="test"
            src="../assets/images/pizzaslice.png"
            alt="pizza"
            width={147.88}
            height={171.03}
          />
        </div>
        <div className="content-description">
          <h1>There is Pizza and then there is Pizz-á-tron Pizza!</h1>
          <p>We let our Pizza do the talking.</p>
          <button className="btn register-btn">Register</button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    text-align: left;
    line-height: 46px;
    line-height: 56px;
    color: #383838;
  }
  p {
    padding-top: 1rem;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 28px;
    color: #8c8c8c;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 2rem;
    margin-top: 15rem;
  }
  .content-description {
    display: flex;
    flex-direction: column;
  }
  .register-btn {
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    background-color: #b95de4;
    border-radius: 48px;
    align-items: center;
    width: 186px;
    height: 68px;
    padding: 16px 48px;
    margin-top: 1.5rem;
  }
`

export default HomePage
