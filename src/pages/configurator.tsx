import React from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { Toppings, PizzaSizeSelector } from "../components"
const configurator = () => {
  return (
    <Wrapper>
      <Navbar />
      <Toppings />
      <PizzaSizeSelector />
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default configurator
