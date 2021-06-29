import React from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { Toppings } from "../components"
const configurator = () => {
  return (
    <Wrapper>
      <Navbar />
      <Toppings />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .configurator-openning-message {
    margin-top: 4rem;
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold;
    line-height: 56px;
    color: #383838;
  }
`
export default configurator
